import * as schema from '@/db/schema'
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { db } from "@/db"
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true,
        schema,
    }),
    user: {
        modelName: "usersTable",
    },
    session: {
        modelName: "sesstionTable",
    },
    verification: {
        modelName: "verificationTable",
    },
    emailAndPassword: {
        enabled: true
    }
});