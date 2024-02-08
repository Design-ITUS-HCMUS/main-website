# ReadMe

## Folder structure

```bash
/.storybook                         # Storybook configuration
/.yarn                              # Yarn version manager
/public                             # Static files
/cypress                            # e2e test folder
/src/
├── /app                            # Next's app routers definition
├── /libs/
│   ├── /ui                         # Styles and components
│   │   ├── /components             # Code for <Component>.tsx
│   │   └── /themes                 # Available themes
│   └── colors.ts                   # Constant color codes
└── /stories                        # Stories for <Component> which doesn't have
    └── <Component>.stories.ts/tsx  # corresponding tsx file
.env                                # Environment variables
.gitattributes                      # eol setup for every files in project, dont touch
.gitignore                          # Git ignore files, dont touch
.prettierignore                     # Prettier ignore files
.prettierrc                         # Prettier rules configured, dont touch
cypress.config.ts                   # Config settings for Cypress (E2E only)
next.config.mjs                     # Default Nextjs config
package.json                        # Packages and package manager
README.md                           # Instructions on setting up the environment
tsconfig.json                       # Config settings for Typescript
yarn.lock                           # yarn lockfile
```

## NVM-windows

- Next require Node ≥ 18.17.0, so install NVM to manage them.
  ### Install [here](https://github.com/coreybutler/nvm-windows/releases)
  **⭐⭐ Uninstall any pre-existing Node installations!! ⭐⭐**
  > _Recommend - it’s hard to setup nvm-windows with current ongoing Node on the manchine_
  > Delete the existing npm install location (e.g. `%AppData%\npm`) to prevent global module conflicts.
  ```bash
  nvm install latest
  nvm use latest
  ```
- Install yarn
  ```bash
  corepack enable
  npm i -g yarn
  ```
- Install project packages
  ```bash
  yarn set version 4.0.2
  yarn install --immutable  # equal to --frozen-lockfile
  ```

## CLI to open tools

```bash
# Dev server Nextjs
yarn dev

# Storybook
yarn storybook

# Prettier
yarn format

# Cypress
yarn cypress:open
```
