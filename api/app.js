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
app.use("/api/users", usersRoutes)
app.use("/api/providers", providersRoutes)
app.use("/api/stands", standsRoutes)
app.use("/api/events", eventsRoutes)


// app.post("/login", ...)
// app.post("/logout", ...)

// npm start
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})