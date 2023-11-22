const express = require("express")
const dotenv = require("dotenv")

const usersRoutes = require("./routes/users.router")
const providersRoutes = require("./routes/providers.router")
const standsRoutes = require("./routes/stands.router")
const eventsRoutes = require("./routes/events.router")
dotenv.config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use("/users", usersRoutes)
app.use("/providers", providersRoutes)
app.use("/stands", standsRoutes)
app.use("/events", eventsRoutes)


// app.post("/login", ...)
// app.post("/logout", ...)

// npm start
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})