// 2 cách khai báo 
var firstName = "Diepp"
var lastName = new String("abc"); // tybe object

// nếu 1 trong 2 vế ko phải là number --> noi chuoi
console.log('tôi là: ${firstName} ${lastName}');
console.log(firstName + "" + lastName);

//back flash (\) chèn ký tự đặc biệt
console.log("Day la dau \n \t \\ ");

// do dai chuoi
console.log(firstName.length);

// hàm hỗ trợ
//  1. find index 
console.log(firstName.indexOf("w")); // -1
console.log(firstName.search("D")); // 0
console.log(firstName.lastIndexOf("p")); // 4

// 2. cat chuoi
// var subString = firstName.slice(0, -2); // "Die"

// 3. replace + replace all
// var replaceString = firstName.replace("D", "l");
// var replaceAllString = firstName.replaceAll("p", "w"); // way1
// var replaceAllString = firstName.replace(/p/g, "."); // way2

/*---------------------------
 
//4 uppercase + lowercase
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// 5. trim
var str = "      ABC           ";
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

// 6. split (string -> array)
var numbers = "1,2,3,4,5,6,7,8,9";
console.log(numbers.split(",")); // -> array

// 7. get a character by index
// tra ve chuoi rong "" neu index > length
console.log(firstName.charAt(15));
// tra ve undefined neu index > length
console.log(lastName[3]);

--------------------------------*/