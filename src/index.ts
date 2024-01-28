    import express from 'express'
    import cors from 'cors'
    import cookieParser from 'cookie-parser'
    import compression from 'compression'

    require('dotenv').config()

    const app = express()
    const port: number = 8080

    app.use(cors({ credentials: true }))
    app.use(compression())
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.listen(port, () => { console.log(`Server is running on port ${port}`) })