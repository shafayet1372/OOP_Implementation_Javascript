
const _departmentId=Symbol("departmenID")
const _departmentName=Symbol("departmentName")
const _subject=Symbol("subject")
const _dean=Symbol("dean")

class Department{
    static _teacher=[]
constructor(id,name,dean){
   this[_departmentId]=id;
   this[_departmentName]=name;
   this[_subject]=[]
   this[_dean]=dean || null
   
   
   
   


}
get departmentId(){
    return this[_departmentId]
}
get departmentName(){
    return this[_departmentName]
}
get subject (){
    return this[_subject]
}

get dean(){
    return this[_dean]
}

get teacher(){
    return _teacher
}
set departmentName(value){
    this[_departmentName]=value

}
set subject(value){
    this[_subject].push(value)
}

set dean(value){
    this[_dean]=value;
}

static set addteacher(value){
    Department._teacher.push(value)
}
toString(){

    return `
      DepartmentID:${this[_departmentId]}
      DepartmentName:${this[_departmentName]}
      Subject       :${this[_subject]}
      Dean:${this[_dean]}
      Teacher:${Department._teacher}
    
    
    `
}
}

module.exports=Department