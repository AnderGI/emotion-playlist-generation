import {Router} from "express";
import { glob } from 'glob';
import * as path from "node:path"

export class RoutesRegistar {
  constructor (private router:Router){}

  public registerRoutes():void{
    const routes:string[] = glob.sync(path.join(__dirname, "/**/*.route.ts"));
    routes.map(route => this.registerRoute(route));
  }

  private registerRoute(route:string){  
    import(route)
    .then(module => module.register(route))
    ;
  }
}