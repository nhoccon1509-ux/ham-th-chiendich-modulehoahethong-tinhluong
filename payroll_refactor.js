/**
 * HỆ THỐNG TÍNH LƯƠNG TECHCORP (LEGACY CODE)
 * Lỗi: Vi phạm SRP nghiêm trọng, phụ thuộc biến toàn cục, không có giá trị trả về.
 */

// Biến toàn cục (Bad practice)
let globalBaseSalary = 15000000;
let globalPerformanceScore = 1.2;

//Tính thưởng
function calculateBonus() {
    let bonus = globalBaseSalary * (globalPerformanceScore - 1);
    return bonus;
}

//Tính thuế
function calculateTax () {
    let bonus = calculateBonus();
    let totalIncome = globalBaseSalary + bonus;
    let tax = 0;
    if (totalIncome > 10000000) {
        tax = totalIncome * 0.1;
    
    }
    return tax;
}

//Định dạng tiền
function formatCurrency(netSalary) {
    return netSalary.toLocaleString("vi-VN") + " VND";
}

//Lương thực nhận
function calculateNetSalary() {
    let bonus = calculateBonus();
    let totalIncome = globalBaseSalary + bonus;
    let tax = calculateTax();
    let netSalary = totalIncome - tax;

    // 4. Logic hiển thị (Định dạng tiền tệ và in ra màn hình)
    let formatedSalary = formatCurrency(netSalary);
    console.log("Lương thực nhận của nhân viên là: " + formatedSalary);
    return netSalary;
}

// Hàm điều phối
function processSalary(baseSalary , performanceScore) {
    globalBaseSalary = baseSalary;
    globalPerformanceScore = performanceScore;
    return calculateNetSalary();

}

// Nếu muốn tính lương cho nhân viên khác, phải thay đổi biến toàn cục!
// Chạy thử
// =====================

console.log("=== Nhân viên 1 ===");
processSalary(15000000, 1.2);

console.log("\n=== Nhân viên 2 ===");
processSalary(8000000, 1.1);

console.log("\n=== Nhân viên 3 ===");
processSalary(25000000, 1.5);