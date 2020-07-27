import Error from "../models/Erro";

export default (error,req,res,next)=>{
    const error_log = new Error({
        //错误名称
        error_title:error.name,
        //错误消息
        error_message:error.message,
        //错误堆栈
        error_stack:error.stack
    });

    //3.保存数据
    error_log.save((err,result)=>{
        res.json({
            status:500,
            result:"服务器内部错误",
            message:error.message
        })
    })
    
}