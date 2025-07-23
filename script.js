let purchases = [], spinHist = [];

function buyNumber(e) {
  e.preventDefault();
  const num = buyNum.value.trim();
  const amt = parseInt(buyAmt.value);

  if (!/^\d{2,4}$/.test(num) || amt <= 0) {
    alert("กรุณากรอกเลข 2-4 หลัก และจำนวนเงินให้ถูกต้อง");
    return;
  }

  purchases.push({ number: num, amount: amt });
  renderPurchases();
  buyNum.value = "";
  buyAmt.value = "";
}

function renderPurchases() {
  purchaseList.innerHTML = "";
  purchases.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `เลข ${p.number} - ${p.amount} บาท`;
    purchaseList.appendChild(li);
  });
}

function spin() {
  const results = {};
  const digits = [2, 3, 4];
  let completed = 0;

  digits.forEach(dig => {
    let ele = document.getElementById("box" + dig);
    let count = 20;
    let interval = setInterval(() => {
      let random = Math.floor(Math.random() * Math.pow(10, dig)).toString().padStart(dig, '0');
      ele.textContent = random;
      if (--count <= 0) {
        clearInterval(interval);
        results[dig] = random;
        completed++;
        if (completed === digits.length) {
          saveSpin(results);
          checkWinning(results);
        }
      }
    }, 80);
  });
}

function checkWinning(results) {
  let matched = [];

  purchases.forEach(p => {
    const len = p.number.length;
    if (results[len] === p.number) {
      matched.push(`🎉 ถูก ${len} ตัว: ${p.number} ได้ ${p.amount * 100} บาท`);
    }
  });

  const msg = matched.length
    ? `✅ คุณถูกรางวัล!\n${matched.join('\n')}`
    : "❌ ไม่ถูกรางวัล ลองใหม่อีกครั้ง!";
  document.getElementById("resultMsg").textContent = msg;
}

function saveSpin(results) {
  const resultText = `2 ตัว: ${results[2]}, 3 ตัว: ${results[3]}, 4 ตัว: ${results[4]}`;
  spinHist.push(resultText);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  spinHist.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function showHistory() {
  home.style.display = "none";
  history.style.display = "block";
}

function backToHome() {
  home.style.display = "block";
  history.style.display = "none";
}
function resetAll() {
  // ล้างรายการที่ซื้อ
  purchases = [];
  renderPurchases();

  // ล้างผลรางวัล
  document.getElementById("box2").textContent = "--";
  document.getElementById("box3").textContent = "---";
  document.getElementById("box4").textContent = "----";

  // ล้างข้อความผลลัพธ์
  document.getElementById("resultMsg").textContent = "";

  // ล้างประวัติ (หากต้องการด้วย)
  spinHist = [];
  renderHistory();
}
