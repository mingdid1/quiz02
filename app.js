const express = require("express");
const app = express();

//body-parser 설정
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//session 설정
const session = require ("express-session");
const sessionConfig = require("./config/cookie_session/cookie_session_config");
app.use(session(sessionConfig.sessionConfig));

//cookie 설정
const cookieParser = require("cookie-parser");
app.use(cookieParser())


const router= require("./src/routers/router")(app);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", router);

//app.get("/", (req, res)=> {res.send("연결")});

app.listen(3000, () => {console.log("3000 서버 연결")});