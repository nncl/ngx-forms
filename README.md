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

Publishing is fully automated by [`.github/workflows/publish.yml`](./.github/workflows/publish.yml). **Don't bump versions manually.** On every push to `main`, the pipeline computes the next version from the [Conventional Commits](https://www.conventionalcommits.org/) since the last git tag:

| Commit | Release |
| :--- | :--- |
| `feat!:` / `BREAKING CHANGE:` in the body | major |
| `feat:` | minor |
| `fix:` / `perf:` | patch |
| `docs`, `ci`, `test`, `build`, `chore`, `refactor`... | none |

When there's something to release, it runs the tests, builds the library with the new version, publishes it to npm and creates a GitHub Release (and tag) with auto-generated release notes. Git tags are the source of truth for the version; the `version` in the repository's `package.json` files isn't updated.

To force a release, run the workflow manually (**Actions → Publish to npm → Run workflow**) and pick `patch`, `minor` or `major`.

To publish manually instead, **make sure that you're within `dist/ngx-forms-handle-errors` before running `npm publish`**.
