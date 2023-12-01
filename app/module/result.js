class Result{
    constructor(data,msg, code = 200){
        this.msg = msg 
        this.code = code 
        this.data = data 
    }
}
module.exports = Result