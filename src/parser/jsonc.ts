import * as jsonc from '@std/jsonc';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://json.schemastore.org/jsonc JSONC} strings and objects
 *
 * @example
 * ```ts
 * const data = await JsoncParser.parse<MyDataType>('{"key": "value"}')
 * ```
 */
const JsoncParser = {
  type: 'jsonc',
  parse<R>(data: string) {
    return Promise.resolve(jsonc.parse(data) as R);
  },
  stringify(data) {
    return Promise.resolve(JSON.stringify(data));
  },
} satisfies DataParser<'jsonc'>;

export default JsoncParser;
