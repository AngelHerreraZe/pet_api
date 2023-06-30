const db = require('./../database/models/index');

class vetServices {
  static async create(name, specialty, status, user_id) {
    try {
      const result = await db.Vet.create({
        name,
        specialty,
        status,
        user_id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updatedInfo) {
    try {
      const result = await db.Vet.update(updatedInfo, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getVetId(user_id) {
    try {
      const result = await db.Vet.findOne({
        where: { user_id },
      });
      return result.id;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = vetServices;
