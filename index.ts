import express from "express";
import path from "path";
import { URL, fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/", (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
