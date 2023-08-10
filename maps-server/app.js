require("dotenv").config()

require("./db")

const express = require("express")
const app = express()

require("./config")(app)

app.locals.appTitle = `Restaurants app!`

const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const mapRoutes = require("./routes/maps.routes")
app.use("/mapas", mapRoutes)

const restaurantRoutes = require("./routes/restaurants.routes")
app.use("/restaurantes", restaurantRoutes)

const apiRoutes = require("./routes/api.routes")
app.use("/api", apiRoutes)

require("./error-handling")(app)

module.exports = app