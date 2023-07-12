import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, 'client', 'dist')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'), function (err) {
            if (err) {
                res.status(500).send(err)
            }
        });
    })
}

app.listen(8080, () => {
    console.log("Server started at port 8080");
});