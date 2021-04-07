const _subjectID=Symbol('id')
const _subject=Symbol('subject name')
const _credit=Symbol("credit")


class Subject{

constructor(id,name,credit){
    this[_subjectID]=id
    this[_subject]=name
    this[_credit]=credit
}
get subjectid(){
    return this[_subjectID]
}
get subject(){
    return this[_subjectName]
}
get credit(){
    return this[_credit]
}

set subject(value){
    this[_subject].push(value);
}

set credit(value){
    this[_credit]=value;
}

toString(){

    return `subjectID:${this[_subjectID]}
    SubjectName:${this[_subject]}
    credit:${this[_credit]}`
}
}

module.exports=Subject