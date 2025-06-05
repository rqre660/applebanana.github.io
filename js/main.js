<script>
async function anonymizeText(originalText) {
  const apiKey = '你的_API_KEY_放這'; // 千萬別放在公開 GitHub 上！

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "請將接下來的文字中可能透露個人身份、地點、公司、組織名稱的詞語替換為更中性的描述，但保留語意和情感。不要省略句子，請完整輸出。"
        },
        {
          role: "user",
          content: originalText
        }
      ]
    })
  });

  const data = await response.json();
  const result = data.choices[0].message.content;
  console.log("原文：", originalText);
  console.log("去識別化後：", result);
  return result;
}

// demo：
anonymizeText("在星巴克打工的體驗真讓人不悅。");
</script>
