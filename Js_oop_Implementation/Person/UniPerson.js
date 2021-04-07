const Person=require('./Person')

const _department=Symbol('department')
const _account=Symbol("account")

class UniPerson extends Person{

constructor(id,name){
    super(id,name)
    this[_account]=null;
    this[_department]=null;
}


get account(){
    return this[_account]
}
get department(){
    return this[_department]
}
set account(value){
    this[_account]=value;
}

set department(value){
    this[_department]=(value)
}


toString(){
    
    return `${super.toString()},department : ${this[_department]} account:${this[_account]}`
}
}


module.exports=UniPerson