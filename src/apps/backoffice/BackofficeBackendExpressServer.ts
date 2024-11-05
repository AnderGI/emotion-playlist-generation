import express, {Router} from "express";
import * as http from "http";
import { RoutesRegistar } from "./routes/RoutesRegistar.js";

export class BackofficeBackendExpressServer {
  private app:express.Express;
  private router:Router;
  private server?:http.Server;
  constructor(private readonly port:number){
    this.app = express();
    this.router = Router();
    this.app.use(this.router);
  }

  public async init(): Promise<void> {
    await new RoutesRegistar(this.router).registerRoutes();
    console.log('Express server init')
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

  public getApp():express.Express{
    return this.app;
  }
}