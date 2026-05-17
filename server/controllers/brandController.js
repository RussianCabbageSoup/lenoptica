const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class BrandController {
    async create(req, res) {
        const { name } = req.body
        const brand = await Brand.create({ name })
        return res.json(brand);
    }

    async getAll(req, res) {
        try {
            let { search } = req.query;
            let whereCondition = {};

            if (search && search.trim()) {
                whereCondition = {
                    name: { [Op.iLike]: `%${search}%` }
                };
            }

            const brands = await Brand.findAndCountAll({
                where: whereCondition,
            });

            return res.json(brands);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const brand = await Brand.findByPk(id);

            if (!brand) {
                return next(ApiError.notFound(`Бренд с id ${id} не найден`));
            }

            await brand.destroy();

            return res.json({
                message: `Бренд с id ${id} успешно удален`,
                deletedBrand: brand
            });

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const brand = await Brand.findByPk(id);

            if (!brand) {
                return next(ApiError.notFound(`brand с id ${id} не найден`));
            }

            const updateData = {};
            if (name !== undefined) updateData.name = name;

            await brand.update(updateData);

            const updatedProduct = await Brand.findByPk(id);

            return res.json(updatedProduct);

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new BrandController();