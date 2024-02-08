# Portfolio

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)

Built with React, Next.js, TailwindCSS, & Typescript.

## Getting Started

1. Install [NVM](https://github.com/nvm-sh/nvm) & [PNPM](https://pnpm.io/installation).
1. Run `nvm use` _(I also recommend [NVM Deeper Shell Integration](https://github.com/nvm-sh/nvm#zsh))_.

## Setup Local Environment 💻

- Default environment variables are all committed inside `.env`. In addition create a `.env.local` following the template in `.env.local.example` _(requires a `RESEND_API_TOKEN` for newsletter support)_.

## Develop ⌨️

From your terminal:

```sh
pnpm i && pnpm db:push
```

Then run the following to start the app in development mode, rebuilding when files change.

```sh
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) and take a look around.

## Testing 🧪

```sh
pnpm test:unit
pnpm test:e2e:run
```

## Database

The data layer for this project is powered By [Drizzle](https://orm.drizzle.team/) & [Turso](https://docs.turso.tech).
Locally things are kept relatively simple with just a `sqlite.db` file as the database.

### Generate & run migrations

Drizzle manages this projects migrations by generating SQL files via the following command:

```sh
pnpm db:gen:migrations
```

The comand above will run via husky pre-push hooks to ensure all necessary migrations files are up to date on every push. This is necessary in order for preview deployments to work in PRs.

For local dev and prototyping DB changes, see the section down below that references `pnpm db:push`, as its far more lightweight.

**A note on CI/CD**: On the vercel side, before both `preview` or `production` environments will build, `pnpm db:migrate` will run to
ensure turso has the changes necessary for a given change.

```sh
pnpm db:gen:migrations && db:migrate
```

## Using the DB Locally

> 💡 Everything below is most useful for quick local prototyping & E2E testing

### Prototyping DB Changes

To auto-apply database changes from the drizzle schema to the local SQLITE database; run the following:

```sh
pnpm db:push
```

### Drizzle Studio

Don't feel like installing a full database client like TablePlus or DataGrip? Use Drizzle Studio:

```sh
pnpm db:studio
```

## CI/CD 🚀

### Continous Integration

Powered by some basic build, lint, and testing tools on Github Actions. Deployed using Vercel.

## Resources

- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/flex-basis) & [ShadCDN](https://ui.shadcn.com)
- [Playwright](https://playwright.dev/) & [Vitest](https://vitest.dev/)
- [Drizzle](https://orm.drizzle.team/) & [Turso](https://docs.turso.tech)
