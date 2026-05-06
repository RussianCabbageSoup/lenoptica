const { Product, ProductInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

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
        let { brandId, typeId, limit, page } = req.query
        
        let products;
        
        if (!limit || limit === 'null' || limit === 'undefined') {
            if (!brandId && !typeId) {
                products = await Product.findAndCountAll();
            }
            if (brandId && !typeId) {
                products = await Product.findAndCountAll({ where: { brandId } });
            }
            if (!brandId && typeId) {
                products = await Product.findAndCountAll({ where: { typeId } });
            }
            if (brandId && typeId) {
                products = await Product.findAndCountAll({ where: { brandId, typeId } });
            }
        } else {
            limit = parseInt(limit) || 9;
            page = parseInt(page) || 1;
            let offset = page * limit - limit;
            
            if (!brandId && !typeId) {
                products = await Product.findAndCountAll({ limit, offset });
            }
            if (brandId && !typeId) {
                products = await Product.findAndCountAll({ where: { brandId }, limit, offset });
            }
            if (!brandId && typeId) {
                products = await Product.findAndCountAll({ where: { typeId }, limit, offset });
            }
            if (brandId && typeId) {
                products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset });
            }
        }
        
        return res.json(products);
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