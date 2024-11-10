// khai báo----------------------------------------------
var myObj = {
    "full name": "Diệp Âu",
    age : 25,
};

// Obj constructor (xây dựng đối tượng - hàm tạo)-------------------
// định nghĩa đối tượng

// decaration function
var User_A = function(){};

// expression function
function User(firstName, lastName, ava){
    this.firstName = firstName;
    this.lastName = lastName;
    this.ava = ava

    this.getName = function (){
        return this.firstName + " " + this.lastName;
    };
}

// tạo đối tượng
var me = new User ("Diệp", "Âu","....");
console.table(me);
console.log(me.constructor ===  User);
// obj thường
const student = { name: "abc" , age : 12};
console.table(student);
console.log(student,constructor)
console.log(student.__proto__)

/*
-nếu đối tượng tạo từ OBJ constructor # OBJ thường
khi in đối tượng sẽ có thể phân __proto__  =>
mở ra : constructor

*/

// thêm thuộc tính---------------------------------
me.class = null
console.table(me)
console.log(me.__proto__)

// OBJ prototype---------------------------------------
// thêm 1 thuộc tính
// ko nhận đc giá trị truyền vào từ constructor
User.prototype.email= "sikibidi@gmail.com";
User.prototype.getEmal = function(){
    return this.email
};

const other = new User("abc","abc","...")
console.table(other)

// read, update-----------------------------
me.firstName = "AbC";
me["lastName"]= "XYZ"
console.table(me);

console.log(me["abc"]);// tndefined
console.log(me.abc);//undefined

// delete-----------------------------------------
delete me["class"]
delete me.ava
console.table(me)
