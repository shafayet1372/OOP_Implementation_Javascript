
const _examId=Symbol("exam Id");
const _examName=Symbol("exam Name")
const _passMark=Symbol("pass mark")
const _subject=Symbol("subject")

class Exam{

    constructor(id,name,mark,subject){
        this[_examId]=id
        this[_examName]=name;
        this[_passMark]=mark
        this[_subject]=subject
    }

    get examID(){
        return this[_examId]
    }
    get examName(){
        return  this[_examName]
    }
    get passMark(){
        return this[_passMark]
    }
    get subject(){
        return this[_subject]
    }

    set examName(value){
        this[_examName]=value
    }
    set passMark(value){
        this[_passMark]=value
    }
    set subject(value){
        this[_subject]=value
    }

    toString(){
        return `ExamId:${this[_examId]}
                passMark:${this[_examName]}
                subject:${this[_subject]}`
    }
}

module.exports=Exam