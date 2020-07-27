import querystring from "querystring";
//处理post请求
export default (req,res,next)=>{

    //1.如果是get请求，则不要处理
    if(req.method.toLowerCase() === 'get'){
        return next();
    }
    
    //2.如果是普通的表单提交，需要处理 application/x-www-form-urlencoded
    //如果有图片，音频视频之类的文件，则不要处理 multipart/form-data
    if(req.headers['content-type'].startsWith('multipart/form-data')){
        return next();
    }

    //3.数据流的拼接
    let data = '';
    req.on('data',(chunk)=>{
        data += chunk;
    })
    req.on('end',()=>{
        req.body = querystring.parse(data);
        next();
    })

}