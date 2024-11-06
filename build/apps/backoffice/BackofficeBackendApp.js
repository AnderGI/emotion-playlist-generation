import { BackofficeBackendExpressServer } from "./BackofficeBackendExpressServer.js";
export class BackofficeBackendApp {
    server;
    constructor() { }
    async start() {
        const port = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
        this.server = new BackofficeBackendExpressServer(port);
        try {
            await this.server.init();
            this.server.listen();
        }
        catch (error) {
            console.error('Error during server initialization:', error);
        }
        return this.server.getApp();
    }
    stop() {
        if (this.server) {
            this.server.stop();
        }
    }
}
