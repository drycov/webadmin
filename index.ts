import bodyParser from "body-parser";
import express, { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import morgan from "morgan"
import path from "path";
import { URL, fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

const logErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    next(err);
};


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
};

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found') as any;
    console.error(err.stack);
    err.status = 404;
    res.locals.title = err.status; // Используем res.locals для передачи переменных в шаблон
    next(err);
  };
  
  app.use(errorHandler);
  app.use(notFoundHandler);
  app.use(logErrors);