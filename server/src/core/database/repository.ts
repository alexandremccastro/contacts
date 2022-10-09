import {session as neo4jSession, Session} from "neo4j-driver";
import { driver } from './driver'
import { NEO4J_DBS } from "@core/helper/constants";

export class Repository {
  protected session: Session

  constructor() {
    this.session = driver.session({
      defaultAccessMode: neo4jSession.WRITE,
      database: NEO4J_DBS
    })
  }
}
