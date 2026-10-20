let studentScore = [
    {
        name : 'Andi',
        score :80,

        infoStudent: function(){
            return(
                "Name :" + this.name +"\n"+
                "Score :" + this.score
            )    
        }
    },    
    {
        name : 'Rudi',
        score : 80,

        infoStudent: function(){
            return(
                "Name :" + this.name +"\n"+
                "Score :" + this.score 
            )
        }
    },
    {
        name : 'Dira',
        score : 100,

        infoStudent: function(){
            return(
                "Name :" + this.name +"\n"+
                "Score :" + this.score 
            )
        }
    },
] 

if (
    studentScore[0].score > studentScore[1].score &&
    studentScore[0].score > studentScore[2].score
) {
    console.log(studentScore[0].infoStudent());

} else if (
    studentScore[1].score > studentScore[0].score &&
    studentScore[1].score > studentScore[2].score
) {
    console.log(studentScore[1].infoStudent());

} else if (
    studentScore[2].score > studentScore[0].score &&
    studentScore[2].score > studentScore[1].score
) {
    console.log(studentScore[2].infoStudent());

} else {
    console.log("Score yang tinggi adalah");
}