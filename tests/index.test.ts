import { describe, expect, test } from 'bun:test';
import { helloWorld } from '../src';

test('sample test', () => {
  const msg = helloWorld('Jane');

  expect(msg).toBe('Hello, Jane via Bun!');
});
