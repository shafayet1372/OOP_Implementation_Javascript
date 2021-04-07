const Person=require('./Person')
const _profession=Symbol("profession")
const _income=Symbol("income")

class Gurdian extends Person{

   constructor(id,name,income,profession){
       super(id,name)
       this[_profession]=profession
       this[_income]=income
   }
 
  get profession(){

    return this[_profession]
  }
  get income(){
      return this[_income]
  }
  
  set profession(value){
      this[_profession]=value
  }
  
  set income(value){
      this[_income]=value
  }

  toString(){
     
      return `${super.toString()},Profession:${this[_profession]} ,income:${this[_income]}`
  }
}



module.exports=Gurdian