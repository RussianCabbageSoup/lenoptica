const { Product, ProductInfo } = require('../models/models');
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

    async getAll(req, res) {
        try {
            let { brandId, typeId, limit, page, minPrice, maxPrice } = req.query

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

            const isValidLimit = limit && limit !== 'null' && limit !== 'undefined';
            let queryOptions = { where: whereCondition };

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
}

module.exports = new ProductController();