import express from 'express'
import { authController } from '../controlers/auth.controler.js';

export const authRouter = new express.Router();
authRouter.post('/messages', authController.send);
authRouter.post('/login', authController.register);
