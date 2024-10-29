import { ExpressServer } from "./Server.js";


export class BackofficeBackendApp {
  private server?:ExpressServer;
  constructor (){}

  public start():void{
    const port:number = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
    this.server = new ExpressServer(port);
    this.server.listen();
  }

  public stop():void{
    if(this.server){
      this.server.stop();
    }
  }
}