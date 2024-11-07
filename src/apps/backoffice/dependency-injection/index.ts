import { ContainerBuilder, JsonFileLoader } from 'node-dependency-injection';
import path from 'path';
import { fileURLToPath } from "url";

// Define __dirname en un entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// contenedor de dependencias
const container = new ContainerBuilder();
const loader = new JsonFileLoader(container);
const env = process.env.NODE_ENV || 'dev';

loader.load(`${__dirname}/application_${env}.json`);

export default container;