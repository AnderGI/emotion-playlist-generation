import { EventBus } from "../../contexts/shared/domain/bus/event/EventBus.js";
import { BackofficeBackendExpressServer } from "./BackofficeBackendExpressServer.js";
import express from "express";
import container from "./dependency-injection/index.js";
import { DomainEventSubscribers } from "../../contexts/shared/domain/bus/event/DomainEventSubscribers.js";

export class BackofficeBackendApp {
  private server?:BackofficeBackendExpressServer;
  constructor (){}

  public async start():Promise<express.Express>{
    const port:number = parseInt(process.env.DEV_PORT ?? '3000') ?? 3000;
    this.server = new BackofficeBackendExpressServer(port);
    try{
      await this.configureEventBus();
      await this.server.init();
      await this.server.listen();
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

  private async configureEventBus():Promise<void> {
    const eventBus:EventBus = container.get('shared.EventBus') as EventBus;
    await eventBus.addSubscribers(DomainEventSubscribers.fromContainer(container))
    return Promise.resolve();
  } 
}