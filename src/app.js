import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routers from './app/routers'; //chama o index por n estar especificado
import middlwares from './app/middlewares';
import './database'

class App {
  constructor() {
    this.server = express();
    this.config();
    this.middlwares();
    this.routers();
  }

  config() {
    this.server.use(express.json());
    this.server.use(express.urlencoded( { extended: false }));
    this.server.use(cors());

    dotenv.config({
      path: "./../.env",
    });
  }

  middlwares() {
    this.server.use(middlwares);  
  }

  routers() {
    this.server.use(routers);
  }
}

export default new App().server;