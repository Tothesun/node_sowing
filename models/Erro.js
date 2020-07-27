import mongoose from "mongoose";

//创建错误模式对象
const errorschema = mongoose.Schema({
    //错误名称
    error_title:{type:String,required:true},
    //错误消息
    error_message:{type:String,required:true},
    //错误堆栈
    error_stack:{type:String,required:true},
    //错误发生时间
    error_time:{type:Date, default : Date.now()},
})

const Error = mongoose.model('Error',errorschema);
export default Error;