import express from "express";
import Sowing from "./../models/Sowing";
const router = express.Router();

/******************************** 接口API ***************************/

//往数据库中插入一条新纪录
router.post("/sowing/api/add",(req,res,next)=>{

    //1.获取数据
    const body = req.body;
    
    //2.创建数据
    const sowing = new Sowing({
        image_title:body.image_title,
        image_url:body.image_url,
        image_link:body.image_link,
        s_time:body.s_time,
        e_time:body.e_time
    });

    //3.保存数据
    sowing.save((err,result)=>{
        if(err){
            console.log("保存数据出错！")
            next(err);
        }
        res.json({
            status:200,
            result:"添加轮播图数据成功！"
        })
    })
})

//获取所有的轮播图列表
router.get("/sowing/api/list",(req,res,next)=>{
    Sowing.find({},"_id image_title image_url image_link s_time e_time",(error,docs)=>{
        if(error){
            return next(error);
        }
        res.json({
            status:200,
            result:docs
        })
    })
})

// 获取一条轮播图
// /sowing/api/single/:sowingId 模糊匹配
// /sowing/api/single/1111    /sowing/api/single/222 这些都可以，但是这种不行：/sowing/api/single/222/34，只能匹配一个
router.get("/sowing/api/single/:sowingId",(req,res,next)=>{
    Sowing.findById(req.params.sowingId,"_id image_title image_url image_link s_time e_time",(error,docs)=>{
        if(error){
            return next(error);
        }
        res.json({
            status:200,
            result:docs
        })
    })
})

//根据一条id修改轮播图
router.post("",()=>{
    
})

/******************************** 页面路由 ***************************/

//加载轮播图列表
router.get("/back/s_list",(req,res,next)=>{
    res.render('back/sowing_list.html');
})

//加载添加轮播图列表
router.get("/back/s_add",(req,res,next)=>{
    res.render('back/sowing_add.html');
})

export default router;