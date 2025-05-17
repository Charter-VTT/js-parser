export function helloWorld(name: string): string {
  return `Hello, ${name} via Bun!`;
}

// eslint-disable-next-line no-console -- Template Code
console.info(helloWorld('User'));
