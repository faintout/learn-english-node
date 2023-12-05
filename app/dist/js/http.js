export default (url,type = 'get',data)=>{
    return new Promise((res,rej)=>{
        $.ajax({
            url,
            type,
            data,
            success: function(data) {
               if(data.code===200){
                res(data?.data||[])
               }else{
                   rej(data?.msg)
                   layer.msg('接口调用错误！', {icon: 2}); 
               }
            },
            error:function (error) {
                rej(error)
                layer.msg('接口调用失败！', {icon: 2}); 
            }
        })
    })
}