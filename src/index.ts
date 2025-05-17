export { Parser } from './parser.ts';
export type { ParserType } from './parser.ts';
export type { DataParser } from './types/parser.ts';

import type JsonParser from './parser/json.ts';
import type Json5Parser from './parser/json5.ts';
import type JsoncParser from './parser/jsonc.ts';
import type TomlParser from './parser/toml.ts';
import type YamlParser from './parser/yaml.ts';

export type { JsonParser, Json5Parser, JsoncParser, TomlParser, YamlParser };

import { Parser } from './parser.ts';
export default Parser;
