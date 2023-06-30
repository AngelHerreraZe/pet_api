const userRoutes = require('./user.routes');
const appointmentRoutes = require('./appointment.routes');
const petRoutes = require('./pet.routes');
const vetRoutes = require('./vet.routes');
const clinicHistoryRoutes = require('./clinicHistory.routes');
const treatmentsRoutes = require('./treatments.routes');

const ApiRoutes = (app) => {
  app.use('/api/v1/', userRoutes);
  app.use('/api/v1/', petRoutes);
  app.use('/api/v1/', appointmentRoutes);
  app.use('/api/v1/', vetRoutes);
  app.use('/api/v1/', clinicHistoryRoutes);
  app.use('/api/v1/', treatmentsRoutes);
};

module.exports = ApiRoutes;
