import { DataSource } from "typeorm"
import { Client } from "./models/Client"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "",
    database: "buildee",
    synchronize: true,
    logging: true,
    entities: [Client],
    subscribers: [],
    migrations: [],
})