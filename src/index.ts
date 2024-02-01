import express from 'express'
import cors from'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import "reflect-metadata"
import { AppDataSource } from "./data-source"

require('dotenv').config()

const app = express()
const port: number = 8080

app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => { console.log(`Server is running on port ${port}`) })
    })
    .catch((err) => console.log(err))