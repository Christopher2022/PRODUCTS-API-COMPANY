import {Router} from 'express'
const router= Router()

import * as productsCtrl from '../controllers/products.controller'


router.post('/', productsCtrl.createProduct)
router.get('/', productsCtrl.getProduct)
router.get('/:productId', productsCtrl.getProductById)
router.get('/:productId', productsCtrl.updateProductById)
router.get('/:productId', productsCtrl.deleteProductById)

export default router;