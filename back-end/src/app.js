import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

//Carregar as variaveis do ambiente do arquivo .env
import dotenv from 'dotenv'
dotenv.config()

import indexRouter from "./routes/index.js";
//import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
//app.use("/users", usersRouter);

/*********************************************
 * Rotas da API
 *********************************************/

import carRoute from './routes/car.js'
app.use('/cars', carRoute)

import userRoute from './routes/user.js'
app.use('/users', userRoute)

import customerRoute from './routes/customer.js'
app.use('/customers', customerRoute)

export default app;
