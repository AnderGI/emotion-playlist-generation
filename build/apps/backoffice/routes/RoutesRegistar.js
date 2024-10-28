import { glob } from 'glob';
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class RoutesRegistar {
    constructor(router) {
        this.router = router;
    }
    registerRoutes() {
        const routes = glob.sync(__dirname + "/**/*.route.ts");
        routes.map(route => this.registerRoute(route));
    }
    async registerRoute(routePath) {
        try {
            const moduleUrl = pathToFileURL(path.resolve(routePath)).href;
            const module = await import(moduleUrl);
            if (typeof module.register === "function") {
                module.register(this.router);
            }
            else {
                console.error(`El módulo en ${routePath} no tiene una función 'register'`);
            }
        }
        catch (error) {
            console.error(`Error al importar el módulo en ${routePath}:`, error);
        }
    }
}
