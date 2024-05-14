import express, { Request, Response } from "express";
import cors from "cors";
import { todoItems } from "./repositories/TodoItems";

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send("hello");
});

app.get("/list", (req, res) => {
  res.send(todoItems);
});

app.post("/add", (req, res) => {
  console.log(req.body);
  // todoItems
  res.send('Ok');
});

const PORT = 8000;
console.log('Listening to port: ', PORT);

app.listen(PORT);