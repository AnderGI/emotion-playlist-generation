import { configDotenv } from "dotenv";
import express, { Router } from "express";
configDotenv();
const app = express();
const port = parseInt(process?.env?.DEV_PORT ?? "3000");
const router = Router();
router.get("/healthcheck", (req, res) => {
    res.json({ "message": "It works" });
});
app.use(router);
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
