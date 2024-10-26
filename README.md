# Minimal E-Commerce

Full stack e-commerce webapp, with minimal amount of code. Built with Next.js 14, Tailwind, Prisma & Stripe

> Minimalist is not a trend, it is a lifestyle

## Dev Logs

- When running `npx prisma init --datasource-provider sqlite`, prisma adds `schema.prisma` file to my project which it uses to configure SQLite as my database. But it also adds `DATABASE_URL="file:./dev.db"` in my `.env`. If I'm using PostgreSQL or MySQL, it will be the url of my database client. Eg: `localhost:3306`. So I was confused... Where was `./dev.db`? I didn't see it in my root folder. I thought prisma will add it for me. Turns out after I defined my schemas and run `npx prisma migrate dev --name init`, prisma will generate the migration and `./dev.db`. It's my first time using SQLite. Didn't know that prisma can just instantiate it like that. Usually I need to install the db first, then create an instance in GUI such as Pgadmin, Mysql Workbench, Mongodb Atlas, etc. Database setup have gotten easier these days lol.

- On my laptop, previously I used [nvm-windows](https://github.com/coreybutler/nvm-windows) to easily switch my Node.js versions. Unfortunately, [Corepack was removed from Node](https://www.youtube.com/watch?v=I7qMwaxNNOc) due to security reasons. Currently I uses [fnm](https://github.com/Schniz/fnm). One thing that I liked about fnm was that we can configure automatic version switching. Everytime I open a project folder, fnm will automatically change the node verison based on the version declared in `.node-version` or `.nvmrc` file.

- > `PrismaClient` description: _Type-safe database client for TypeScript & Node.js_.\
Also `PrismaClient` data type: `any`.

  - Updating `prisma` and `@prisma/client` to the latest version fixed the issue tho.

- The product card skeleton looks sooo goooooood 🤤

- Wait, I can press `Windows` + `.`, then selecting a GIF to put in here? That's soooo coooooool ![drool](./docs/drool.png).
  - The GIF not playing tho. Windows turned the GIF into an image, and put the image at the root of the repo. Pretty interesting.