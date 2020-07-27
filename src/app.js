import express from "express";
import config from "./config";
import nunjucks from "nunjucks";
import bodyParser from "./../middle_wares/body_parser";
import error_log from "./../middle_wares/error_log"


import indexRouter from "./../route/index";
import sowingRouter from "./../route/sowing"

let app = express();

//配置公共资源路径
app.use(express.static(config.publicPath));

//配置中间件(配置模板引擎能够作用到中间件)
nunjucks.configure(config.viewPath,{
    autoscape:true,
    express:app,
})

//配置数据处理的中间件
app.use(bodyParser);

//引入路由
app.use(indexRouter);
app.use(sowingRouter);

app.use((req,res)=>{
    res.render("404.html");
})


//5.挂载error中间件
app.use(error_log);


app.listen(3000,()=>{
    console.log("服务器已经启动")
})