const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fileUpload = require('express-fileupload');

const usersRoutes = require("./routes/users.router")
const providersRoutes = require("./routes/providers.router")
const standsRoutes = require("./routes/stands.router")
const eventsRoutes = require("./routes/events.router")
const locationsRoutes = require("./routes/locations.router")
const imagesRoutes = require("./routes/images.router")
const productsRoutes = require("./routes/products.router")
const ticketsRoutes = require("./routes/tickets.router")
const statsRoutes = require("./routes/stats.router")
const infosRoutes = require("./routes/infos.router")
dotenv.config()

const port = process.env.PORT
const app = express()
app.use(fileUpload());

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


app.use(cors({
    origine: true
}));
app.use(express.json())
app.use("/api/users", usersRoutes)
app.use("/api/providers", providersRoutes)
app.use("/api/stands", standsRoutes)
app.use("/api/events", eventsRoutes)
app.use("/api/locations", locationsRoutes)
app.use("/api/images", imagesRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/tickets", ticketsRoutes)
app.use("/api/stats", statsRoutes)
app.use("/api/infos", infosRoutes)

// npm start
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
