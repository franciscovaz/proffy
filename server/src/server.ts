import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
// Para entender o json no request.body
app.use(express.json());

// Corpo (Request body): request.body
// Route Params: /users/:id - request.params
// Query Params: /users?page=3&sort=name  - request.query

app.use(routes);

app.listen(3331);
