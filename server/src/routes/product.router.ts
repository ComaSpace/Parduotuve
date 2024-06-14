import express from 'express';
import { ProductsController } from '../controllers/products.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const productsRouter=express.Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/:id", ProductsController.getProduct);
productsRouter.post("/", ProductsController.insert);
productsRouter.put("/", ProductsController.update);
productsRouter.delete("/:id", ProductsController.delete);

export {productsRouter};