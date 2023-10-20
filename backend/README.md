# ts-graphql-template


This is a template for a TypeScript project using GraphQL and Apollo Server.

## Getting started

To start the project localy run:

```npm install```

```npm run dev```

To set the the database with some data run:

create an .env file in the root of the project and add the following:

```DATABASE_URL="mongodb+srv://admin:<password>@<hostname>/prisma?retryWrites=true&w=majority"
```

```npx run migrate```

```npm run update:db```

To start prisma studio and populate data run:

```npx prisma studio```
