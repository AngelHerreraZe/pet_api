const db = require('./../database/models/index');

class appointmentServices {
  static async create(vet_id, pet_id, newAppointment) {
    try {
      const { date, reason, status } = newAppointment;
      const result = await db.Appointment.create({
        date,
        vet_id,
        pet_id,
        reason,
        status,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async modify(id, modifiedInfo) {
    try {
      const result = await db.Appointment.update(modifiedInfo, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllAppointmentsVet(vet_id) {
    try {
      const result = await db.Appointment.findAll({
        where: { vet_id },
        attributes:{
          exclude: ["createdAt", "updatedAt"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = appointmentServices;
