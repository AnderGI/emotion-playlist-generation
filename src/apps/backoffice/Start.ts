import { BackofficeBackendApp } from "./BackofficeBackendApp.js";

try{
  (new BackofficeBackendApp()).start()
} catch {
  process.exit(1)
}
