# Minimal E-Commerce

Full stack e-commerce webapp, with minimal amount of code. Built with Next.js 14, Tailwind, Prisma & Stripe

> Minimalist is not a trend, it's a culture

## Dev Logs

- When running `npx prisma init --datasource-provider sqlite`, prisma adds `schema.prisma` file to my project which it uses to configure SQLite as my database. But it also adds `DATABASE_URL="file:./dev.db"` in my `.env`. If I'm using PostgreSQL or MySQL, it will be the url of my database client. Eg: `localhost:3306`. So I was confused... Where was `./dev.db`? I didn't see it in my root folder. I thought prisma will add it for me. Turns out after I defined my schemas and run `npx prisma migrate dev --name init`, prisma will generate the migration and `./dev.db`. It's my first time using SQLite. Didn't know that prisma can just instantiate it like that. Usually I need to install the db first, then create an instance in GUI such as Pgadmin, Mysql Workbench, Mongodb Atlas, etc. Database setup have gotten easier these days lol.

- On my laptop, previously I used [nvm-windows](https://github.com/coreybutler/nvm-windows) to easily switch my Node.js versions. Unfortunately, [Corepack was removed from Node](https://www.youtube.com/watch?v=I7qMwaxNNOc) due to security reasons. Currently I uses [fnm](https://github.com/Schniz/fnm). One thing that I liked about fnm was that we can configure automatic version switching. Everytime I open a project folder, fnm will automatically change the node verison based on the version declared in `.node-version` or `.nvmrc` file.
