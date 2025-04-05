const pri = (a)=>{
    c=0
    for(let i = 1;i<=a;i++){
        if(a%i==0){
            c++
        }
    }
    if(c==2){
        console.log(a+" is Prime.")
    }
}
module.exports = pri