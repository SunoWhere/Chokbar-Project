const express = require("express")
const dotenv = require("dotenv")
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const usersRoutes = require("./routes/users.router")
const providersRoutes = require("./routes/providers.router")
const standsRoutes = require("./routes/stands.router")
const eventsRoutes = require("./routes/events.router")
dotenv.config()

const port = process.env.PORT
const app = express()


const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "EZCON",
            description: "API documentation",
            contact: {
                name: "Groupe 6",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["app.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json())
app.use("/users", usersRoutes)
app.use("/providers", providersRoutes)
app.use("/stands", standsRoutes)
app.use("/events", eventsRoutes)


// npm start
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})