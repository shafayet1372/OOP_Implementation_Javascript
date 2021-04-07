

const{Person,Guardian,UniPerson,Student,Employee,Teacher,Stuff,Contact,Address,}=require("./Person/index")
const {Department,Subject,Exam}=require("./Others/index")


const guardian=new Guardian(1,"abdur rajjaq",500000,"finance manager")
guardian.blood="B+";
const contact =new Contact(1,"Abdur777@gmail.com",01715066689);
contact.address=new Address(1,"Block-C","Dhaka","Dhaka","Bangladesh",1230);
guardian.contact=contact

const student=new Student(1,"shafayet Hossain",1372,guardian);

student.blood="AB+"
student.fee=700000;
student.contact=new Contact(
    2,"shafayetHossain777@gmail.com",01861591932,
    new Address(1,"Block-C","Dhaka","Dhaka","Bangladesh",1230)
)

student.addExam=new Exam(1,"Math",33,
  new Subject(131,"Math",3)
)
student.addExam=new Exam(2,"Physics",33,
  new Subject(121,"Physics",4)
)
student.addExam=new Exam(3,"English",33,
  new Subject(141,"English",4)
)

const t=new Teacher(1,"karim Uddin",12345,30000,"math");
t.blood="B-"
t.contact=new Contact(3,"karimUddin65@gmail.com",01623823341,
new Address(3,"Block-D","Rajshahi","rajshahi","Bangladesh",3245)
)
student.department=new Department(1,"CSE",t);

student.department.subject=new Subject(121,"MATH",3)
student.department.subject=new Subject(131,"Physic",3)
student.department.subject=new Subject(141,"English",3)
console.log(student)