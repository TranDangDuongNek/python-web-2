// khỏi tạo---------------------------------------
var arr = [1,2,6,"a",function () {}, {}, null , undefined  ];
var arr2 = new Array([1, 2, 5, 7, 9, null, undefined]);
    var array = [1, 2, 3, 4, 5];
    console.log(typeof arr2); // object
    console.log(array.length); // 5
    
    // Truy xuất phần tử theo index
    console.log(arr2[4]); // 9
    console.log(arr[4]);// lấy phân tử theo index

// Tạo một bản sao của mảng arr2 bằng toán tử spread
var clone_arr = [...arr2];

clone_arr.push(10);
console.table(clone);
console.table(arr2);

//  tostring------------------------------------------
console.log(arr.toString());

// join---------------------------------------
var arr1 =[1,2,3];
console.log("join", arr1.join(" - "));

// pop -------------------------------------
// return lai list sau khi da xoa tu
cpnsole.log(arr2.pop()); // xoá phân tử cuối cùng
[].pop();//undefined

// shift ,unshift------------------------------------------
console.log(arr.shift());
console.log([].shift());//undefined

// unshift: thêm phần tử đầu tiên trong mang + return do dai moi
console.log(Arr.unshift(123));
// Xóa và thêm phần tử vào vị trí index 1 của mảng subArr
var subArr = arr.splice(1, 2); // xóa 2 phần tử từ index 1
console.log(subArr);

// Thêm phần tử vào vị trí index 1 của mảng subArr
subArr.splice(1, 0, 6); 
console.log(subArr1);

// thay the vi tri thu 1 thanh 6
var subArr2 = arr.splice(1, 1, 6);
console.log(subArr2);

// slicing ----------------------------------------------------
// cat 2 phan tu tinh tu vi tri thu 2 tu sau ra truoc
// return mang moi
const b = a.slice(-2, 2);
console.log(b);
