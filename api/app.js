// Node modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Swagger Documentation
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Local modules
const { sequelize } = require("./database/models/index");
const usersRoutes = require("./routers/users.router");
const providersRoutes = require("./routers/providers.router");
const standsRoutes = require("./routers/stands.router");
const eventsRoutes = require("./routers/events.router");

// Configure Environment Variables
dotenv.config();

// Database Connection and Synchronization
sequelize.sync({ alter: true })
    .then(() => console.log("All models were synchronized successfully."))
    .catch(err => console.error("Models synchronization failed:", err));

// Express Application Setup
const app = express();
app.use(express.json()); // for parsing application/json
app.use(cors()); // enable CORS

// Swagger Setup
const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: "EZCON",
            description: "API documentation",
            contact: { name: "Groupe 6" },
            servers: ["http://localhost:3000/"],
        },
    },
    apis: ["app.js", "./routers/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/providers", providersRoutes);
app.use("/api/stands", standsRoutes);
app.use("/api/events", eventsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
