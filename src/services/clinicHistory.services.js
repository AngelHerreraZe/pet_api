const db = require('./../database/models/index');

class clinicHistoryServices {
  static async createHS(vetId, pet_id, clinicHistory) {
    try {
      const { description, date, status } = clinicHistory;
      const clinicHistoryCreated = await db.ClinicHistory.create({
        vet_id: vetId,
        description,
        date,
        pet_id,
        status,
      });
      return clinicHistoryCreated;
    } catch (error) {
      throw error;
    }
  }

  static async updateHS(id, updatedInfo) {
    try {
      const updatedClinicHistory = await db.ClinicHistory.update(updatedInfo, {
        where: {
          id,
        },
      });
      return updatedClinicHistory;
    } catch (error) {
      throw error;
    }
  }

  static async getClinicHS(pet_id) {
    try {
      const result = await db.ClinicHistory.findAll({
        where: { pet_id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: db.Pets,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          model: db.Vet,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'user_id'],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = clinicHistoryServices;
