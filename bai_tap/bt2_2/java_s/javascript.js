// In ra hình tam giác
const triangleContainer = document.getElementById('triangle');
const triangleSvg = `
<svg width="100" height="100">
  <polygon points="50,10 90,90 10,90" fill="none" stroke="black" stroke-width="3" />
</svg>
`;
triangleContainer.innerHTML = triangleSvg;

// Hiển thị chuỗi đối xứng
const palindromeContainer = document.getElementById('palindrome');
const input = 'abc';
const output = 'abcba';
palindromeContainer.innerHTML = `
<p>Input: ${input}</p>
<p>Output: ${output}</p>
`;
