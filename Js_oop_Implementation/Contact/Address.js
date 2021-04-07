
const _id=Symbol("id")
const _roadno=Symbol('road')
const _city=Symbol('city')
const _region=Symbol("region")
const _country=Symbol("Country")
const _postalCode=Symbol("postal Code")

class Address{
 constructor(id,road,city,region,country,postalcode){
   this[_id]=id || null
   this[_roadno]=road || null
   this[_city]=city || null
   this[_region]=region || null
   this[_country]=country || null
   this[_postalCode]=postalcode || null
 }
 get AddressID(){
     return this[_id]
 }
 get road(){
     return this[_roadno]
 }
 get city(){
     return this[_city]
 }
 get country(){
     return this[_country]
 }
 get postalCode(){
     return this[_postalCode]
 }

 set road(value){
    this[_roadno]=value
}
set city(value){
    this[_city]=value
}
set country(value){
    this[_country]=value
}
set postalCode(value){
    this[_postalCode]=value
}
toString(){
    return `Addressid:${this[_id]}
            roadNo:${this[_roadno]}
            city:${this[_city]}
            region:${this[_region]}
            country:${this[_country]}
            postalCode:${this[_postalCode]}`.trim()
}
}

module.exports=Address