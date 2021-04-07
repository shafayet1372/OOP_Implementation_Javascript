const _id=Symbol('id');
const _email=Symbol("email")
const _phone=Symbol("phone")
const _alternativePhone=Symbol("alternative Phone")
const _address=Symbol('address')


class Contact{

    constructor(id,email,phone,address){
        this[_id]=id || null
        
        this[_alternativePhone]=null
        this[_email]=email || null
        this[_phone]=phone || null
        this[_address]=address || null
    }

    get contactId(){
      return  this[_id]
    }

    get email(){
        return this[_email]
    }
    get phone(){
        return this[_phone]
    }
    get alternativePhone(){
        return this[_alternativePhone]
    }
    get address(){
        return this[_address]
    }

    set email(value){
        this[_email]=value;
    }
    set phone(value){
        this[_phone]=phone
    }
    set alternativePhone(value){
        this[_alternativePhone]=phone
    }
    set address(value){
        this[_address]=value;
    }
    toString(){
        return ` ContactId:${this[_id]}
                 email:${this[_email]}
                 phone:${this[_phone]} 
                 alternativePhone:${this[_alternativePhone]}
                 address:${this[_address]}
                `.trim()
    }
}
module.exports=Contact