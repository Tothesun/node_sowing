import express from "express";
const router = express.Router();

/**************** 首页重定向 *******************/
router.get("/", (req,res)=>{
    res.redirect("/web");
})

/**************** 后端路由配置 *******************/
router.get("/back", (req,res)=>{
    res.render("back/index.html");
})

/**************** 前端路由配置 *******************/
router.get("/web", (req,res)=>{
    res.render("web/index.html");
})

router.get("/web/res", (req,res)=>{
    res.render("web/resources.html");
})

router.get("/web/res_c", (req,res)=>{
    res.render("web/resources_content.html");
})

export default router;