
let processing=require('./datas/processing.json')
const getRank=([name,importance,time,success])=>{
    //0==time,1==importance,2==succes
 
    //get User MBTI and input MBTI in mbti
    const mbti='ENTJ'
    console.log(processing[mbti])
    for(let value of processing[mbti][0]){
        if (value==0){time*=2}
        if (value==1){importance*=2}
        if (value==2){success*=2}
        }
        for(let value of processing[mbti][1]){
            if (value==0){time*=1.5}
            if (value==1){importance*=1.5}
            if (value==2){success*=1.5}
            }
            // for(let value of processing[mbti][2]){
            //     if (value==0){time*=2}
            //     if (value==1){importance*=2}
            //     if (value==2){success*=2}
            //     }
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
    console.log(list[biggest_index][0])
    return biggest_index





}


console.log(Retrun1stList([['계획 이름',5,3,3],['계획 이름',3,3,5],['계획 이름',3,5,3],['계획 이름',3,3,3]]))























    
















