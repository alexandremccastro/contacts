import ne4j, { Driver, auth } from "neo4j-driver";
import { NEO4J_URI, NEO4J_USER, NEO4J_PASSWD } from "@core/helper/constants";

export const driver: Driver = ne4j.driver(
  NEO4J_URI,
  auth.basic(NEO4J_USER, NEO4J_PASSWD)
);
