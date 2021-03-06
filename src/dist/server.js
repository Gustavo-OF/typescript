"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importar a biblioteca e os tipos dela.
//Node não entende essa nomenclatura, então é necessario instalar outras dependencias. (typescript)
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = express_1.default();
app.get("/", routes_1.CreateCourse);
app.listen(3333);
