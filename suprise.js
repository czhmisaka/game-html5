let suprise = function(){
    this.times = 0;
    this.getRes = function(){
        if(this.times===9){
            console.log('中奖')
        }
        else if(Math.random(1)>0.9){
            console.log('中奖')
        }else{
            this.times++;
            console.log('再来一次吧')
        }
    };
}