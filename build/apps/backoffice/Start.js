import { BackofficeBackendApp } from "./BackofficeBackendApp.js";
try {
    await (new BackofficeBackendApp()).start();
}
catch {
    process.exit(1);
}
