import express from "express";
import {handler} from "./build/handler.js";

const app = express();
app.listen(8004);
