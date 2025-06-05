async function anonymizeText(originalText) {
  const endpoint = "https://openai-anonymizer-api.vercel.app/api/anonymize";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: originalText })
    });

    const data = await response.json();
    document.getElementById("result").innerText = data.result || "(無結果)";
  } catch (error) {
    document.getElementById("result").innerText = "處理失敗，請稍後再試。";
    console.error("匿名化錯誤：", error);
  }
}

document.getElementById("submit").addEventListener("click", () => {
  const inputText = document.getElementById("input").value.trim();
  if (inputText.length === 0) {
    alert("請先輸入一段話。");
    return;
  }
  document.getElementById("result").innerText = "處理中，請稍候...";
  anonymizeText(inputText);
});

