import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/users.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes

app.use('/api/v1/users/', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
