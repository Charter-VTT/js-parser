import type InitParser from './parser/ini.ts';
import type JsonParser from './parser/json.ts';
import type Json5Parser from './parser/json5.ts';
import type JsoncParser from './parser/jsonc.ts';
import type TomlParser from './parser/toml.ts';
import type YamlParser from './parser/yaml.ts';
import type { DataParser } from './types/parser.ts';

/**
 * Represents the available parser types.
 */
export type ParserType =
  | typeof JsonParser.type
  | typeof TomlParser.type
  | typeof YamlParser.type
  | typeof Json5Parser.type
  | typeof JsoncParser.type
  | typeof InitParser.type;

const lookUp: {
  [type in ParserType]: () => Promise<{ default: DataParser<type> }>;
} = {
  json: () => import('./parser/json.ts'),
  toml: () => import('./parser/toml.ts'),
  yaml: () => import('./parser/yaml.ts'),
  json5: () => import('./parser/json5.ts'),
  jsonc: () => import('./parser/jsonc.ts'),
  ini: () => import('./parser/ini.ts'),
};

/**
 * The Parser module provides a way to parse and stringify data objects
 * using different parsers. It supports JSON, JSON5, TOML, and YAML.
 *
 * @module Parser
 * @see {@link ParserType}
 * @see {@link DataParser}
 */
export namespace Parser {
  /**
   * Parse a string into an object
   * @param type {@link ParserType}
   * @param data A string to be converted into an object
   * @returns The parsed object
   */
  export async function parse<
    R extends Record<string, unknown> = Record<string, unknown>,
  >(type: ParserType, data: string): Promise<R> {
    const parser = await getParser(type);
    return await parser.parse(data);
  }

  /**
   * Stringify an object into a string
   * @param type {@link ParserType}
   * @param data An object to be converted into a string
   * @returns The stringified object
   */
  export async function stringify<
    D extends Record<string, unknown> = Record<string, unknown>,
  >(type: ParserType, data: D): Promise<string> {
    const parser = await getParser(type);
    return await parser.stringify(data);
  }

  /**
   * Get a parser by type
   * @param type {@link ParserType}
   * @returns The parser
   */
  export async function getParser<T extends ParserType>(
    type: ParserType,
  ): Promise<DataParser<T>> {
    const output = await lookUp[type]?.().then((data) => data.default);

    if (!output) {
      throw Error(`Parser not implemented for type "${type}"`);
    }

    return output as DataParser<T>;
  }
}

export default Parser;
