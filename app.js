if(process.env.NODE_ENV != "production"){
require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const port=process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.render("fits/index.ejs");
});

app.get("/login", (req, res)=>{
    res.render("fits/login");
});

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});