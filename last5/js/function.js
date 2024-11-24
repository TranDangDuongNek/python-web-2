// ------khai báo function------

// Cách 1 : function có tên
// hàm sung a,b => a + b
// 
function tong (a,b){

    return a + b;
}
// gọi lại (hiêu theo ý đặt giá trị cho a,b)
console.log (tong(2,5));

// cách 2: function ko tên
const sum_2 = function(a,b){
    return a+b;
};
console.log(sum_2(1,2));

// hàm hello (hàm ko tên/ ẩn danh)

const hello =function(name){
console.log("hello"+name)
    // return a+b
}
// ko có retutn -> in ra giá trị: undefined
hello("hello","dũng")

// lưu giá trị key:value
// nếu value khác kiểu dữ liệu string
// => không hiển thị đc
localStorage.setItem("name",{});

// mở dev tool --> application tab -> local storage
//  -> mở mục -> domain (url) trang hiện tại -> kiểm tra
// lấy giá trị (value) dữ liệu thông qua key

console.log(localStorage.getItem("name"));