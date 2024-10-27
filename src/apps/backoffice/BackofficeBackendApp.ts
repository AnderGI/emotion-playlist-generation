import { Server } from "./server.js";
export class BackofficeBackendApp {
  private server?:Server;
  constructor (){}

  public start():void{
    const port:number = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
    this.server = new Server(port);
    this.server.listen();
  }

  public stop():void{
    if(this.server){
      this.server.stop();
    }
  }
}