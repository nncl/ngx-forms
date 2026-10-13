# NgxForms

Collection of Angular form functions, that will help you building your applications.

[![npm](https://img.shields.io/npm/v/ngx-forms-handle-errors.svg)](https://www.npmjs.com/package/ngx-forms-handle-errors)

[Demo](https://ngx-forms-handle-errors.surge.sh/).

## Getting Started

Install with npm:

```
npm i ngx-forms-handle-errors
```

### Modules

- [`updateFormErrors`](./projects/ngx-forms-handle-errors/README.md)

### Contributing

1. Build the app first with `ng build ngx-forms-handle-errors`
2. Enters the `dist` directory and make sure everything is correct

### Publishing

Publishing is automated by [`.github/workflows/publish.yml`](./.github/workflows/publish.yml): every push to `main` runs the tests, builds the library and publishes it to npm **if** the version in `projects/ngx-forms-handle-errors/package.json` isn't published yet. After a successful publish, it creates a GitHub Release (and tag) named after the version, with auto-generated release notes. To release, bump that version and merge into `main`.

To publish manually instead, **make sure that you're within `dist/ngx-forms-handle-errors` before running `npm publish`**.
