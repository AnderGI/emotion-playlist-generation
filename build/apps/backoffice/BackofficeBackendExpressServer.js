import express, { Router } from "express";
import { RoutesRegistar } from "./routes/RoutesRegistar.js";
export class BackofficeBackendExpressServer {
    port;
    app;
    router;
    server;
    constructor(port) {
        this.port = port;
        this.app = express();
        this.router = Router();
        this.app.use(this.router);
    }
    async init() {
        await new RoutesRegistar(this.router).registerRoutes();
        console.log('Express server init');
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
    getApp() {
        return this.app;
    }
}
