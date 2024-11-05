import { BackofficeBackendExpressServer } from "./BackofficeBackendExpressServer.js";
import express from "express";

export class BackofficeBackendApp {
  private server?:BackofficeBackendExpressServer;
  constructor (){}

  public async start():Promise<express.Express>{
    const port:number = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
    this.server = new BackofficeBackendExpressServer(port);
    try{
      await this.server.init();
      this.server.listen();
    }catch(error){
      console.error('Error during server initialization:', error);
    }
    
    return this.server.getApp();
  }

  public stop():void{
    if(this.server){
      this.server.stop();
    }
  }
}