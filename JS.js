
function drawLotto() {
    // 1. 初始化 1-49 號池[cite: 1]
    let pool = Array.from({ length: 49 }, (_, i) => i + 1);

    // 2. Fisher-Yates 洗牌演算法[cite: 1]
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // 3. 挑選前 6 碼排序（正獎）與第 7 碼（特別號）[cite: 1]
    const winningNumbers = pool.slice(0, 6).sort((a, b) => a - b);
    const specialNumber = pool[6];

    // 4. 渲染結果
    const area = document.getElementById('display-area');
    area.innerHTML = '';

    winningNumbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.innerText = num.toString().padStart(2, '0');
        area.appendChild(ball);
    });

    const sBall = document.createElement('div');
    sBall.className = 'ball special';
    sBall.innerText = specialNumber.toString().padStart(2, '0');
    area.appendChild(sBall);
}