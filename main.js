
let processing=require('./processing.json')
const getRank=([name,importance,time,success])=>{
    //0==time,1==importance,2==succes
 
    //get User MBTI and input MBTI in mbti
    const mbti='ENFP'

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

    return importance+time+success
}

const Retrun1stList=(list)=>{
    let biggest_index=0
    let big_score=0
    for(let i in list){

        let score=getRank(list[i])
        if(big_score<score){
            biggest_index=i
            big_score=score
        }
    }
    return biggest_index

}


console.log(Retrun1stList([['계획 이름',4,4,2],['계획 이름',4,3,2],['계획 이름',2,4,2],['계획 이름',4,5,5]]))







































