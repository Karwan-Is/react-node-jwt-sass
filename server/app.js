const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const movieRoutes = require('./routes/movieRoutes')
const seriesRoutes = require('./routes/seriesRoutes')
const seasonRoutes = require('./routes/seasonRoutes')
const episodeRoutes = require('./routes/episodeRoutes')
const userRoutes = require('./routes/userRoutes')
const boxOfficeRoutes = require('./routes/boxOfficeRoutes')
const slideShowsRoutes = require('./routes/slideShowsRoutes')
const { checkUser } = require('./middleware/userMiddlewares')
const keys = require('./config/keys')

const app = express()
const port = 4000

app.use(express.json())
app.use(cookieParser())

const userURI = keys.mongoose.URI
mongoose.connect(userURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, () => {
        console.log("Listening for request on port 4000...")
    }))
    .catch(e => console.log(e))

app.get('/user', checkUser)
app.use('/', userRoutes)
app.use('/', movieRoutes)
app.use('/', seriesRoutes)
app.use('/', seasonRoutes)
app.use('/', episodeRoutes)
app.use('/', boxOfficeRoutes)
app.use('/', slideShowsRoutes)

app.use((req, res) =>{
    res.status(400)
})