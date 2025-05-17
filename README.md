<p align="center">
  <img src="https://github.com/Charter-VTT/.github/blob/7f14a77afba7ab274d24de2a38e2cabd33cccc5a/logo-dark.png#gh-dark-mode-only" alt="Charter VTT Logo Dark">
  <img src="https://github.com/Charter-VTT/.github/blob/7f14a77afba7ab274d24de2a38e2cabd33cccc5a/logo.png#gh-light-mode-only" alt="Charter VTT Logo Light">
</p>

<p align="center">
  <a href="https://github.com/Charter-VTT/js-parser/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Charter-VTT/js-parser" alt="License">
  </a>
  <img src="https://img.shields.io/badge/code%20style-biome-44cc11" alt="Code Style: Biome">
</p>

# Charter VTT JS Parser

A JavaScript/TypeScript library for parsing various configuration file formats such as JSON, JSON5, JSONC, YAML, and TOML.

## Features

- Parse multiple configuration file formats (JSON, JSON5, JSONC, YAML, TOML)
- TypeScript support for type safety
- Bun for fast installs and testing
- Ready for API documentation generation (TypeDoc)
- Example test setup included

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Charter-VTT/js-parser.git
cd js-parser
```

Install dependencies:

```bash
bun install
```

## Usage

Import and use the parser in your project:

```typescript
import Parser from "@charter/parser";

const yamlContent = `
name: Charter VTT
version: 1.0.0
`;

const parsed = await Parser.parse('yaml', yamlContent);
console.log(parsed);
// Output: { name: 'Charter VTT', version: '1.0.0' }
```

## Scripts

- `bun test` — Run tests
- `bun run build` — Build the package
- `bun run docs:api` — Generate API documentation (see below)

## API Documentation

Generate API docs using [TypeDoc](https://typedoc.org/):

```bash
bun run docs:api
```

The generated documentation will be available in the `docs/` directory.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

This project is licensed under the MIT License.
