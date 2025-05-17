import * as ini from '@std/ini';
import type { DataParser } from '../types/parser.ts';

/**
 * Parses {@link https://json.schemastore.org/ini INI} strings and objects
 *
 * @example
 * ```ts
 * const data = await IniParser.parse<MyDataType>('key=value')
 * ```
 */
const IniParser = {
  type: 'ini',
  parse<R>(data: string) {
    return Promise.resolve(ini.parse(data) as R);
  },
  stringify(data) {
    return Promise.resolve(ini.stringify(data));
  },
} satisfies DataParser<'ini'>;

export default IniParser;
