import * as json from 'lib0/json';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://www.json.org/ JSON} strings and objects
 *
 * @example
 * ```ts
 * const data = await JsonParser.parse<MyDataType>('{"key": "value"}')
 * ```
 */
const JsonParser = {
  type: 'json',
  parse<R>(data: string) {
    return Promise.resolve(json.parse(data) as R);
  },
  stringify(data) {
    return Promise.resolve(json.stringify(data));
  },
} satisfies DataParser<'json'>;

export default JsonParser;
