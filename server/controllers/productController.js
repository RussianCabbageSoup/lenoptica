const { Product, ProductInfo, Brand, Type } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, quantity, description, brandId, typeId } = req.body
            const { img } = req.files

            console.log('Полученные данные:', {
                name,
                price,
                priceType: typeof price,
                brandId,
                typeId,
                quantity,
                description
            });

            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, quantity, description, brandId, typeId, img: fileName });

            return res.json(product)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page, minPrice, maxPrice, search } = req.query

            let whereCondition = {};

            if (brandId && brandId !== 'null' && brandId !== 'undefined') {
                whereCondition.brandId = brandId;
            }

            if (typeId && typeId !== 'null' && typeId !== 'undefined') {
                whereCondition.typeId = typeId;
            }

            const hasPriceFilter = (minPrice && minPrice !== 'null' && minPrice !== 'undefined') ||
                (maxPrice && maxPrice !== 'null' && maxPrice !== 'undefined');

            if (hasPriceFilter) {
                whereCondition.price = {};
                if (minPrice && !isNaN(parseFloat(minPrice))) {
                    whereCondition.price[Op.gte] = parseFloat(minPrice);
                }
                if (maxPrice && !isNaN(parseFloat(maxPrice))) {
                    whereCondition.price[Op.lte] = parseFloat(maxPrice);
                }
            }

            if (search && search !== 'null' && search !== 'undefined' && search.trim()) {
                whereCondition = {
                    ...whereCondition,
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${search.trim()}%` } },
                        { '$type.name$': { [Op.iLike]: `%${search.trim()}%` } },
                        { '$brand.name$': { [Op.iLike]: `%${search.trim()}%` } }
                    ]
                };
            }

            const isValidLimit = limit && limit !== 'null' && limit !== 'undefined';
            let queryOptions = {
                where: whereCondition,
                include: [
                    {
                        model: Type,
                        as: 'type',
                        attributes: ['id', 'name']
                    },
                    {
                        model: Brand,
                        as: 'brand',
                        attributes: ['id', 'name']
                    }
                ],
                distinct: true,
                subQuery: false
            };

            if (isValidLimit) {
                limit = parseInt(limit) || 6;
                page = parseInt(page) || 1;
                const offset = page * limit - limit;
                queryOptions.limit = limit;
                queryOptions.offset = offset;
            }

            const products = await Product.findAndCountAll(queryOptions);
            return res.json(products);

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne(
            {
                where: { id },
                include: [{ model: ProductInfo, as: 'info' }]
            },
        )
        return res.json(product)
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, price, quantity, description, brandId, typeId } = req.body;

            const product = await Product.findByPk(id);

            if (!product) {
                return next(ApiError.notFound(`Продукт с id ${id} не найден`));
            }

            const updateData = {};
            if (name !== undefined) updateData.name = name;
            if (price !== undefined) updateData.price = price;
            if (quantity !== undefined) updateData.quantity = quantity;
            if (description !== undefined) updateData.description = description;
            if (brandId !== undefined) updateData.brandId = brandId;
            if (typeId !== undefined) updateData.typeId = typeId;

            await product.update(updateData);

            const updatedProduct = await Product.findByPk(id, {
                include: [
                    { model: Type, as: 'type', attributes: ['id', 'name'] },
                    { model: Brand, as: 'brand', attributes: ['id', 'name'] }
                ]
            });

            return res.json(updatedProduct);

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id);

            if (!product) {
                return next(ApiError.notFound(`Продукт с id ${id} не найден`));
            }

            await ProductInfo.destroy({
                where: { productId: id }
            });

            await product.destroy();

            if (product.img) {
                const fs = require('fs');
                const imagePath = path.resolve(__dirname, '..', 'static', product.img);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            return res.json({
                message: `Продукт с id ${id} успешно удален`,
                deletedProduct: product
            });

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new ProductController();