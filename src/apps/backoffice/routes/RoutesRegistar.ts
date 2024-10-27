import { Router } from "express";
import { glob } from 'glob';
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "url";

// Define __dirname en un entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class RoutesRegistar {
  constructor(private router: Router) {}

  public registerRoutes(): void {
    //console.log(path.join(__dirname, "/**/*.route.ts"));
    const routes: string[] = glob.sync(__dirname + "/**/*.route.ts");
   // console.log(routes);

    // Mapea cada ruta y la registra
    routes.map(route => this.registerRoute(route));
  }

  private async registerRoute(routePath: string): Promise<void> {
    try {
      // Convierte la ruta del archivo a una URL con `file://`
      const moduleUrl = pathToFileURL(path.resolve(routePath)).href;

      // Importa el módulo de la ruta de manera dinámica
      const module = await import(moduleUrl);

      // Verifica que el módulo tenga una función `register`
      if (typeof module.register === "function") {
        module.register(this.router);
      } else {
        console.error(`El módulo en ${routePath} no tiene una función 'register'`);
      }
    } catch (error) {
      console.error(`Error al importar el módulo en ${routePath}:`, error);
    }
  }
}
