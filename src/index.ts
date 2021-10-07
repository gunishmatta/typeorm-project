import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
const main = async () => {
  try {
    await createConnection();
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

main();
