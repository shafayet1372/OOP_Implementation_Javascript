const Employee=require('./Employee')
const _subject=Symbol('subject')


class Teacher extends Employee{

    constructor(id,name,employeeId,salary,subject){
        super(id,name,employeeId,salary)
        this[_subject]=subject
    }

    get subject(){
        return this[_subject]
    }
    set subject (value){
        this[_subject]=value
    }
  

    toString(){
   
       return `${super.toString()},subject:${this[_subject]}`
    }
}
module.exports=Teacher