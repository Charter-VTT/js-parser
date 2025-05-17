import * as YAML from '@std/yaml';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://yaml.org/ YAML} strings and objects
 *
 * @example
 * ```ts
 * const data = await YamlParser.parse<MyDataType>('key: value')
 * ```
 */
const YamlParser = {
  /**
   * The type of the parser
   */
  type: 'yaml',
  /**
   * Parses a YAML string into an object
   * @param data The YAML string to parse
   * @returns A promise that resolves to the parsed object
   */
  parse<R>(data: string) {
    return Promise.resolve(YAML.parse(data) as R);
  },
  /**
   * Stringifies an object into a YAML string
   * @param data The object to stringify
   * @returns A promise that resolves to the YAML string
   */
  stringify(data) {
    return Promise.resolve(YAML.stringify(data));
  },
} satisfies DataParser<'yaml'>;

export default YamlParser;
