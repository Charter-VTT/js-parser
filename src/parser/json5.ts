import JSON5 from 'json5';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://json5.org/ JSON5} strings and objects
 *
 * @example
 * ```ts
 * const data = await Json5Parser.parse<MyDataType>('{"key": "value"}')
 * ```
 */
const Json5Parser = {
  type: 'json5',
  parse<R>(data: string) {
    return Promise.resolve(JSON5.parse(data) as R);
  },
  stringify(data) {
    return Promise.resolve(JSON5.stringify(data));
  },
} satisfies DataParser<'json5'>;

export default Json5Parser;
