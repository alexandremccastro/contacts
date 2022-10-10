import "dotenv/config";

export const APP_PORT = process.env.APP_PORT || 3000;
export const NEO4J_URI = process.env.NEO4J_URI || "";
export const NEO4J_DBS = process.env.NEO4J_DBS || "";
export const NEO4J_USER = process.env.NEO4J_USER || "";
export const NEO4J_PASSWD = process.env.NEO4J_PASSWD || "";
export const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
