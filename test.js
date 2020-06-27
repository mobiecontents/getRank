
let processing=require('./processing.json')
function getRank(mbti,importance,time,success){
    //0==time,1==importance,2==succes
    
    for(let value of processing[mbti]['0']['1']){
        if (value==0){time*=4}
        if (value==1){importance*=4}
        if (value==2){success*=4}
        }
        for(let value of processing[mbti]['1']['2']){
            if (value==0){time*=2}
            if (value==1){importance*=2}
            if (value==2){success*=2}
            }
    console.log(importance+time+success)
    

}
let mbti='ISTJ'
getRank(mbti,2,3,4)
getRank(mbti,4,4,2)






































