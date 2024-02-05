import { DataSource } from "typeorm"
import { Client } from "./models/Client"
import { Product } from "./models/products/Product"
import { Comment } from "./models/Comment"
import {  ProductEntry } from "./models/products/ProductEntry"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "buildee",
    synchronize: true,
    logging: true,
    entities: [Client, Product,  ProductEntry, Comment],
    subscribers: [],
    migrations: [],
})