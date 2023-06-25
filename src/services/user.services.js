const { Op } = require('sequelize');
const db = require('./../database/models/index');

class UserServices {
  static async create(newUser) {
    try {
      const userCreated = await db.Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updatedInfo) {
    try {
      const updatedUser = await db.Users.update(updatedInfo, {
        where: { id },
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(name) {
    try {
      const user = await db.Users.findOne({
        where: {
          [Op.or]: [{ username: name }, { email: name }],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserInfo(id) {
    try {
      const user = await db.Users.findOne({
        where: { id },
        attributes: {
          exclude: [
            'password',
            'password_change_at',
            'role',
            'status',
            'createdAt',
            'updatedAt',
          ],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updatedInfo) {
    try {
      const user = await db.Users.update(updatedInfo, {
        where: { id },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updatePassword(id, updatedPassword) {
    try {
      const updatedUser = await db.Users.update(
        {
          password: updatedPassword,
          password_change_at: Date.now(),
        },
        {
          where: { id },
        }
      );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await db.Users.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updatePhoto(id, imageUrl){
    try {
      const result = await db.Users.update({
        profile_img_url: imageUrl
      },{
        where: {
          id
        }
      });
      return result
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
