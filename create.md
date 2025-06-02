npx create-next-app@15.3.2 next-agenda

#### Criando Agendamento NextJS
#### visto 1:10h
```
https://alunos.fullstackclub.com.br/area/produto/item/5472977
```
#### Passo a passo Drizzle
> * 1. Banco Drizzle
    ```
    npm i drizzle-orm@0.43.1 pg
    ```

    ```
    npm i -D drizzle-kit @types/pg
    ```

    ```
    https://orm.drizzle.team/docs/get-started-postgresql
    ```
#### Passo a passo Shadcn

``` instalando
npx shadcn@2.5.0 init
```

``` button
npx shadcn@2.5.0 add button
```

* criar .env
    ```
    DATABASE_URL="postgresql://next-agenda-db_owner:npg_mGxRzq8Di3Wp@ep-misty-glitter-acpjcrji-pooler.sa-east-1.aws.neon.tech/next-agenda-db?sslmode=require"
    ```

* src/db/index.ts
```
import "dotenv/config";

// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!);
```

* drizzle.config.ts
```
import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/shema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})
```

* Rodar o migrate
```
npm i dotenv   
npx drizzle-kit push
npx drizzle-kit studio
```

> * 2. ShadCN

* Link
```
https://alunos.fullstackclub.com.br/area/produto/item/5472977
```
#### Entidades
> * User,
> * Clinic,
> * Doctor,
> * Patient,
> * Appointments,