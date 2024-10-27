var _a, _b;
import { configDotenv } from "dotenv";
import express, { Router } from "express";
configDotenv();
const app = express();
const port = parseInt((_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DEV_PORT) !== null && _b !== void 0 ? _b : "3000");
const router = Router();
router.get("/healthcheck", (req, res) => {
    res.json({ "message": "It works" });
});
app.use(router);
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
