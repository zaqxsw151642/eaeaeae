// ประวัติการออกรางวัล (เก็บไว้ในอาร์เรย์)
let history = [];

// ฟังก์ชั่นสุ่มหมายเลขรางวัล
function generatePrize(digits) {
    let max = Math.pow(10, digits); // ขอบเขตสูงสุดของตัวเลขตามจำนวนหลัก
    let prize = Math.floor(Math.random() * max); // สุ่มตัวเลข
    return prize.toString().padStart(digits, '0'); // ให้ตัวเลขมีหลักที่ต้องการ
}

// ฟังก์ชั่นสุ่มรางวัลทั้งหมด
function drawPrize() {
    let prize2 = generatePrize(2); // รางวัล 2 ตัว
    let prize3 = generatePrize(3); // รางวัล 3 ตัว
    let prize4 = generatePrize(4); // รางวัล 4 ตัว

    // แสดงผลรางวัลทั้งหมด
    console.log("รางวัล 2 ตัว: " + prize2);
    console.log("รางวัล 3 ตัว: " + prize3);
    console.log("รางวัล 4 ตัว: " + prize4);

    // บันทึกประวัติการออกรางวัล
    history.push(`รางวัล 2 ตัว: ${prize2}, รางวัล 3 ตัว: ${prize3}, รางวัล 4 ตัว: ${prize4}`);

    // แสดงประวัติการออกรางวัล
    updateHistory();
}

// ฟังก์ชั่นอัพเดตประวัติ
function updateHistory() {
    console.log("\n--- ประวัติการออกรางวัล ---");
    history.forEach((item, index) => {
        console.log(`${index + 1}: ${item}`);
    });
}

// ฟังก์ชั่นแสดงประวัติ
function showHistory() {
    if (history.length === 0) {
        console.log("ยังไม่มีการออกรางวัล!");
    } else {
        console.log("\n--- ประวัติการออกรางวัล ---");
        history.forEach((item, index) => {
            console.log(`${index + 1}: ${item}`);
        });
    }
}

// การทดสอบ
drawPrize();  // เรียกใช้การสุ่มรางวัล
showHistory();  // แสดงประวัติการออกรางวัล
