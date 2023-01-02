// ----------------------While------------------------
console.log("Xin chào Cybersoft", 1);
console.log("Xin chào Cybersoft", 2);
console.log("Xin chào Cybersoft", 3);
console.log("Xin chào Cybersoft", 4);
console.log("Xin chào Cybersoft", 5);
//While

// Khởi tạo biến điều kiện
let i = 1;
// Đưa biến điều kiện vào câu lệnh điều kiện
while (i <= 5) {
    // Hành động
    console.log("Xin chào Cybersoft", i);

    // Thay đổi biến điều kiện (tăng giá trị của biến i)
    i++;

}
//------------------ví dụ 1-----------------------------

// Tạo function và gán cho onclick của element
// Hàm này sẽ tự động đc gọi khi user click vào element
document.getElementById('vd1-submit').onclick = function () {
    let number = +document.getElementById('vd1-number').value;
    // B2: chia n cho 2 cho đến khi n <= 1, và in giá trị ra giao diện
    let output = document.getElementById('vd1-output');
    let count = 1;

    while (number > 1) {
        number = Math.floor(number / 2);
        output.innerHTML += "count: " + count + " - num: " + number + "<br/>";
        count++;
    }

    output.classList.add("d-block");
}

// Nhập và 1 số bất kỳ, tính tổng các ký số của số đó
// VD: 1234 
document.getElementById('sum').onclick = function () {
    let number2 = +document.getElementById('number2').value;
    let sum = 0;

    while (number2 > 0) {
        sum += number2 % 10;
        number2 = Math.floor(number2 / 10);
    }
    document.getElementById('showSum').innerHTML = sum;
}

//---------------------Do...while---------------------------------
// Điểm khác biệt so với while là do while, chắc chắn sẽ đc chạy ít nhất 1 lần
let a = 1
do {
    console.log("Do...while - Giá trị của a", a);
} while (a > 5);


// VD2:
document.getElementById('vd2-submit').onclick = function () {
    let number2 = +document.getElementById('vd2-number').value;
    let sum = 0;
    let i = 1;

    while (i <= number2) {
        sum += i;
        i++;
    }
    let output = document.getElementById("vd2-output");
    output.classList.add("d-block");
    output.innerHTML = sum;
}

// -------------Vòng lặp FOR---------------------------------
// Gom các khai báo, khởi tạo biến điều kiện, biểu thức điều kiện và thay đổi giá trị của biến điều kiện vào 1 chỗ
for (let j = 1; j <= 5; j++) {
    console.log("Xin chào FOR FOR FOR", j);
}

// VD: Tính tổng các số chẳn từ 1 đến n
function baiTapFor(n) {
    let sum = 0;
    // khi for còn thực hiện là khi số nhập vào nhỏ hơn n //
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log("Tổng các số chẳn từ 1-10", baiTapFor(10));
console.log("Tổng các số chẳn từ 1-100", baiTapFor(100));

// VD: Kiểm tra số n có phải là số nguyên tố hay ko
// SNT là số tự nhiên > 1, chỉ chia hết cho 1 và chính nó
function baitap3(n) {
    if (n < 2) {
        return false;
    }

    // Kiểm tra nếu n === 2 => Nó là SNT
    if (n === 2) {
        return true;
    }

    // Kiểm tra nếu n là số chẵn => ko phải SNT
    if (n % 2 === 0) {
        return false;
    }

    // Ta mặc định ban đầu là SNT
    let result = true;

    // Chứng minh n ko phải là SNT để thay đổi result thành false
    // Kiểm tra từ 2 đến n-1, xem có số nào mà n chia hết hay ko
    // for (let i = 2; i < n; i++) {
    //     if (n % i === 0) {
    //         result = false;
    //     }
    // }

    // Tối ưu hơn: Kiểm tra các số lẻ từ 3 đến căn bậc 2 của n, xem có số nào mà n chia hết hay ko
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            result = false;
        }
    }

    return result;
}
console.log("Đây là số nguyên tố", baitap3(2));