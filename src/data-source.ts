import "reflect-metadata";
import { DataSource } from "typeorm";
import { Details } from "./entity/Details";
import { User } from "./entity/user";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "tester",
  password: "tester",
  database: "testdb",
  synchronize: true,
  //   logging: false,
  entities: [Details],
  migrations: [],
  subscribers: [],
});

const AppDataSource2 = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "tester",
  password: "tester",
  database: "testdb",
  synchronize: true,
  //   logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export { AppDataSource, AppDataSource2 };
