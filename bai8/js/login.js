// kiểm tra login => chuyển trang login
const pathname = location.pathname
// HOME------------------------------
if (pathname.includes("index.html")||
pathname.charAt(pathname.length - 1)== "/"){
    // kiểm tra nếu chx login => chuyển trang login
    if (!localStorage.getItem("currentUser")){
        location.href = "./html/login.html"
    }
}
// kiểm tra trang login

// kiểm tra trang đăng kí

// lưu dữ liệu cho đăng kí

//  bat su kiem cho button dang nhap

//  bat su kien cho button dang ki