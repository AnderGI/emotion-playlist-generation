import express, { Router } from "express";
import { RoutesRegistar } from "./routes/RoutesRegistar.js";
export class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.router = Router();
        this.app.use(this.router);
        (new RoutesRegistar(this.router)).registerRoutes();
    }
    listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`);
        });
    }
    stop() {
        if (this.server) {
            this.server.close((err) => {
                if (err) {
                    console.log(`Error stoping the server try CTRL+C`);
                }
            });
        }
    }
}
