const { Op } = require('sequelize');
const db = require('./../database/models/index');

class petsServices {
  static async create(user_id, newPet) {
    try {
      const {
        id,
        name,
        birthdate,
        genre,
        specie,
        race,
        weight,
        height,
        petimg_url,
        status,
      } = newPet;
      const result = await db.Pets.create({
        id,
        name,
        birthdate,
        genre,
        specie,
        race,
        weight,
        height,
        user_id,
        petimg_url,
        status,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserPets(user_id) {
    try {
      const pets = await db.Pets.findAll({
        where: { user_id },
        attributes: {
          exclude: ['user_id', 'createdAt', 'updatedAt'],
        },
      });
      return pets;
    } catch (error) {
      throw error;
    }
  }

  static async getOnePet(id, userId) {
    try {
      const pet = await db.Pets.findAll({
        where: {
          [Op.and]: [{ id }, { user_id: userId }],
        },
      });
      return pet;
    } catch (error) {
      throw error;
    }
  }

  static async updateInfo(id, updatedInfo) {
    try {
      const result = await db.Pets.update(updatedInfo, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await db.Pets.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = petsServices;
