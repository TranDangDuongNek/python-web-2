// Tạo mảng số nguyên
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Biến lưu tổng số chẵn và lẻ
let sumEven = 0;
let sumOdd = 0;

// Biến đếm số lớn hơn ngưỡng
let countGreater = 0;
let threshold = 5;

// Duyệt qua mảng
for (let i = 0; i < numbers.length; i++) {
  // Kiểm tra số chẵn/lẻ
  if (numbers[i] % 2 === 0) {
    sumEven += numbers[i];
  } else {
    sumOdd += numbers[i];
  }

  // Kiểm tra số lớn hơn ngưỡng
  if (numbers[i] > threshold) {
    countGreater++;
  }
}

// Hiển thị kết quả trên trang web
document.getElementById("sum-even").textContent = sumEven;
document.getElementById("sum-odd").textContent = sumOdd;
document.getElementById("count-greater").textContent = countGreater;

// phần này dùng AI làm nha cô=) chứngoi2mo2 ko ra đc XD
