import { BackofficeBackendApp } from "./BackofficeBackendApp.js";

try{
  (new BackofficeBackendApp()).start()
} catch(err) {
  console.log(err)
  process.exit(1)
}
