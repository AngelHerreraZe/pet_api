const userRoutes = require('./user.routes')
const appointmentRoutes = require('./appointment.routes');

const ApiRoutes = (app) => {
    app.use("/api/v1/", userRoutes);
    app.use("api/v1/", appointmentRoutes)
}

module.exports = ApiRoutes;