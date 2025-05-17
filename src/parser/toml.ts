import * as TOML from '@std/toml';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://toml.io/en/ TOML} strings and objects
 *
 * @example
 * ```ts
 * const data = await TomlParser.parse<MyDataType>('key = "value"')
 * ```
 */
const TomlParser = {
  type: 'toml',
  parse<R>(data: string) {
    return Promise.resolve(TOML.parse(data) as R);
  },
  stringify(data) {
    return Promise.resolve(TOML.stringify(data));
  },
} satisfies DataParser<'toml'>;

export default TomlParser;
