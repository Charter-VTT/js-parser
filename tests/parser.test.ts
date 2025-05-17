import { describe, expect, test } from 'bun:test';
import Parser, { type ParserType } from '../src/index.ts';

describe('Parser', () => {
  test.failing('parse', async () => {
    const result = await Parser.parse('abc' as ParserType, '{"key": "value"}');
  });

  describe('JSON', () => {
    test('parse', async () => {
      const result = await Parser.parse('json', '{"key": "value"}');

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('json', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('"key"');
      expect(result).toContain('"value"');
    });
  });

  describe('JSONC', () => {
    test('parse', async () => {
      const result = await Parser.parse(
        'jsonc',
        '//Hello world\n{"key": "value"}',
      );

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('jsonc', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('"key"');
      expect(result).toContain('"value"');
      expect(result).not.toContain('//');
    });
  });

  describe('JSON5', () => {
    test('parse', async () => {
      const result = await Parser.parse(
        'json5',
        "//Hello world\n{key: 'value'}",
      );

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('json5', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('key');
      expect(result).toContain("'value'");
    });
  });

  describe('YAML', () => {
    test('parse', async () => {
      const result = await Parser.parse(
        'yaml',
        `
# Hello world
key: value
        `,
      );

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('yaml', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('key:');
      expect(result).toContain('value\n');
    });
  });

  describe('Ini', () => {
    test('parse', async () => {
      const result = await Parser.parse(
        'toml',
        `
# Hello world
key = "value"
        `,
      );

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('toml', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('key =');
      expect(result).toContain('"value"\n');
    });
  });

  describe('INI', () => {
    test('parse', async () => {
      const result = await Parser.parse('ini', 'key=value');

      expect(result).toBeObject();
      expect(result).toContainKey('key');
      expect(result).toContainValue('value');
    });

    test('stringify', async () => {
      const result = await Parser.stringify('ini', { key: 'value' });

      expect(result).toBeString();
      expect(result).toContain('key=');
      expect(result).toContain('value');
    });
  });
});
