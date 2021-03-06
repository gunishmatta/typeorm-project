import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "",
      database: "postgres",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

main();
