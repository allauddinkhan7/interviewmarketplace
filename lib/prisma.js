import { Pool } from 'pg';
import { PrismaClient } from './generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
const gloalForPrisma = globalThis;

function createPrismaClient() {
    const pool = new Pool({connectionString: process.env.DATABASE_URL});
    const adaptor  = new PrismaPg(pool);
    return new PrismaClient({ adapter: adaptor });
}



export const db = gloalForPrisma.primsa ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') gloalForPrisma.primsa = db;
