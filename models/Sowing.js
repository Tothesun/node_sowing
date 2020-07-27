import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/college',{useNewUrlParser:true});

mongoose.connection.on("open",()=>{
    console.log("数据库连接成功！")
})

mongoose.connection.on("error",(err)=>{
    console.log("数据库连接失败！")
})

//创建轮播图的模式对象
const sowingschema = mongoose.Schema({
    image_title:{type:String,required:true},
    image_url:{type:String,required:true},
    image_link:{type:String,required:true},
    s_time:{type:String,required:true},
    e_time:{type:String,required:true},
    l_edit:{type:Date,default:Date.now()},
    c_time:{type:Date,default:Date.now()},
})

const Sowing = mongoose.model('Sowing',sowingschema);
export default Sowing;