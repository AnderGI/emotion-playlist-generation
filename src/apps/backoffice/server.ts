import express, {Router} from "express";
import * as http from "http";
import { RoutesRegistar } from "./routes/RoutesRegistar.js";

export class ExpressServer {
  private app:express.Express;
  private router:Router;
  private server?:http.Server;
  constructor(private readonly port:number){
    this.app = express();
    this.router = Router();
    this.app.use(this.router);
    (new RoutesRegistar(this.router)).registerRoutes()
  }

  public listen():void {
    this.server =  this.app.listen(this.port, () => {
      console.log(`Server listening at http://localhost:${this.port}`);
    })
  }

  public stop():void {
    if(this.server) {
      this.server.close((err) => {
        if(err){
          console.log(`Error stoping the server try CTRL+C`)
        }
      })
    }
  }

}