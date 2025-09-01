const historyData = [];
document.getElementById("cards-container").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) {
    return;
  }
  //   History Data
  const title = card.children[0].children[1].innerText;
  const number = card.children[0].children[3].innerText;
  const para = card.children[0].children[2].innerText;
  const currentTime = new Date().toLocaleTimeString();

  //   Heart count
  const heartText = document.getElementById("counter").innerText;
  let counter = parseInt(heartText);
  //   control heart button click
  if (e.target.closest(".heart")) {
    document.getElementById("counter").innerText = counter + 1;
  }

  //   Copy count
  const copyCounterText = document.getElementById("copy-counter").innerText;
  let copyCounter = parseInt(copyCounterText);
  if (e.target.closest(".btn-copy")) {
    alert(`Number Copy Completed: ${number}`);
    document.getElementById("copy-counter").innerText = copyCounter + 1;
    navigator.clipboard.writeText(number);
  }

  // Number
  const coinText = document.getElementById("coin-counter").innerText;
  let currentBalance = parseInt(coinText);
  if (e.target.closest(".phone-call")) {
    if (currentBalance < 20) {
      alert("❌ You do not have sufficient balance to call. Make Recharge");
      return;
    }
    alert(`📞 calling ${para} ${number}...`);
    currentBalance -= 20;
    document.getElementById("coin-counter").innerText = currentBalance;
    const history = {
      title: title,
      number: number,
      time: currentTime,
    };
    historyData.push(history);

    // Array data rendering
    if (historyData.length) {
      const historyContainer = document.getElementById("history-container");
      const div = document.createElement("div");
      div.className =
        "history p-1 bg-slate-300 flex justify-between items-center rounded my-2";
      div.innerHTML = `
              <div class="text w-1/2">
                <h2 class="text-sm font-bold">${title}</h2>
                <h3>${number}</h3>
              </div>
              <p class="text-sm font-bold"><span>${currentTime}</span></p>
          `;
      historyContainer.appendChild(div);
    }
  }
});

document.getElementById("clear").addEventListener("click", () => {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
});
