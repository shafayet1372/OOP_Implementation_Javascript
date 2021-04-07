const  UniPerson=require("./UniPerson")

const _studentID=Symbol('id')
const _guardian=Symbol("guardian")
const _exam=Symbol("Exam")
const _fee=Symbol("fee")
class Student extends UniPerson{

constructor(id,name,studentId,guardian){
    super(id,name)
    this[_studentID]=studentId
     this[_guardian]=guardian
     this[_exam]=[]
     this[_fee]=null
}

get StudentId(){
    return this[_studentID];
}

get guardian(){
    this[_guardian]
}
get exam(){
    return this[_exam]
}
get fee(){
    return this[_fee]
}
 set addExam(value){
     this[_exam].push(value)
 }
 set fee(value){
     this[_fee]=value;
 }

 toString(){
     
    return `${super.toString()},StudentId:${this[_studentID]},Guardian :${this[_guardian]},
    Exam:${this[_exam]}`
  
 }
}

module.exports=Student