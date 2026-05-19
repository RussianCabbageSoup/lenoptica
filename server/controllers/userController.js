const { User, Basket } = require("../models/models");
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const generateJWT = (id, name, email, role) => {
    return jwt.sign(
        { id, name, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { name, email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный адрес электронной почты или пароль'))
        }
        if (!name) {
            return next(ApiError.badRequest('Имя не может быть пустым'))
        }
        const candidate = await User.findOne({
            where: { email }
        })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashPassword, role })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJWT(user.id, user.name, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({
            where: { email }
        })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJWT(user.id, user.name, user.email, user.role)

        return res.json({ token })
    }

    async chechAuth(req, res, next) {
        const token = generateJWT(req.user.id, req.user.name, req.user.email, req.user.role)
        return res.json({ token })
    }

    async getAll(req, res, next) {
        try {
            let { search } = req.query;

            let whereCondition = {};

            if (search && search.trim()) {
                whereCondition = {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${search}%` } },
                        { role: { [Op.iLike]: `%${search}%` } }
                    ]
                };
            }

            const users = await User.findAndCountAll({
                where: whereCondition,
            });

            return res.json(users);

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id);

            if (!user) {
                return next(ApiError.notFound(`user с id ${id} не найден`));
            }

            await user.destroy();

            return res.json({
                message: `user с id ${id} успешно удален`,
                deletedUser: user
            });

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, email, newPassword, currentPassword } = req.body;

            const user = await User.findByPk(id);

            if (!user) {
                return next(ApiError.notFound(`Пользователь с id ${id} не найден`));
            }

            if (newPassword) {
                const isPasswordValid = bcrypt.compareSync(currentPassword, user.password);
                if (!isPasswordValid) {
                    return next(ApiError.badRequest('Неверный текущий пароль'));
                }

                user.password = await bcrypt.hash(newPassword, 10);
            }

            if (email && email !== user.email) {
                const existingUser = await User.findOne({
                    where: {
                        email,
                        id: { [Op.ne]: id } 
                    }
                });

                if (existingUser) {
                    return next(ApiError.badRequest('Пользователь с таким email уже существует'));
                }
                user.email = email;
            }

            if (name) {
                user.name = name;
            }

            await user.save();

            const token = generateJWT(user.id, user.name, user.email, user.role);

            const userResponse = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                updatedAt: user.updatedAt
            };

            return res.json({
                message: 'Данные пользователя успешно обновлены',
                user: userResponse,
                token
            });

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new UserController()