const { Op } = require('sequelize');
const db = require('./../database/models/index')


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
            const updatedUser = await Users.update(updatedInfo, {
                where: { id }
            });
            return updatedUser
        } catch (error) {
            throw error;
        }
    }

    static async getUser(name) {
        try {
            const user = await db.Users.findOne({
                where: { 
                    [Op.or] :  [{username: name}, {email: name}]
                 }
            });
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;