<p align="center">
  <img src="https://github.com/Charter-VTT/.github/blob/7f14a77afba7ab274d24de2a38e2cabd33cccc5a/logo-dark.png#gh-dark-mode-only" alt="Charter VTT Logo Dark">
  <img src="https://github.com/Charter-VTT/.github/blob/7f14a77afba7ab274d24de2a38e2cabd33cccc5a/logo.png#gh-light-mode-only" alt="Charter VTT Logo Light">
</p>

<p align="center">
  <a href="https://github.com/Charter-VTT/js-package/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Charter-VTT/js-package" alt="License">
  </a>
  <img src="https://img.shields.io/badge/code%20style-biome-44cc11" alt="Code Style: Biome">
</p>

# Charter VTT JS Package Template

A template repository for Charter VTT JavaScript/TypeScript packages.

## Features

- TypeScript support
- Bun for fast installs and testing
- Ready for API documentation generation (TypeDoc)
- Example test setup

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Charter-VTT/js-package.git
cd js-package
```

Install dependencies:

```bash
bun install
```

## Usage

Import and use the package in your project:

```typescript
import { helloWorld } from "js-package";

console.log(helloWorld("Jane"));
// Output: Hello, Jane via Bun!
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
