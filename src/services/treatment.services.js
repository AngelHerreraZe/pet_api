const db = require('./../database/models/index');

class treatmentServices {
  static async createTreatment(treatmentInformation) {
    try {
      const result = await db.Treatment.create(treatmentInformation);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateTreatment(updatedInfo, id) {
    try {
      const result = await db.Treatment.update(updatedInfo, {
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getInfo(clinic_history_id) {
    try {
      const result = await db.Treatment.findAll({
        where: { clinic_history_id },
        attributes: {
          exclude: [ 'createdAt', 'updatedAt', 'clinic_history_id'],
        },
        include: [
          {
            model: db.ClinicHistory,
            attributes: {
              exclude: [
                'id',
                'date',
                'createdAt',
                'updatedAt',
                'pet_id',
                'vet_id',
              ],
            },
            include: [
              {
                model: db.Pets,
                attributes: {
                  exclude: ['date', 'createdAt', 'updatedAt', 'user_id'],
                },
              },
              {
                model: db.Vet,
                attributes: {
                  exclude: ['date', 'createdAt', 'updatedAt', 'user_id'],
                },
              },
            ],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = treatmentServices;
