import { configDotenv } from "dotenv";
import express, {Router, Request, Response}  from "express";
configDotenv()
const app: express.Express = express();
const port:number = parseInt(process?.env?.DEV_PORT ?? "3000");

const router = Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  res.json({"message": "It works"})
})


app.use(router)
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})