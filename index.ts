import express from "express";
import path from "path";
import fileDirName from "./app/utils/dfn";

const { __dirname } = fileDirName(import.meta);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
