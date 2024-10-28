import { Server } from "./Server.js";
export class BackofficeBackendApp {
    server;
    constructor() { }
    start() {
        const port = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
        this.server = new Server(port);
        this.server.listen();
    }
    stop() {
        if (this.server) {
            this.server.stop();
        }
    }
}
