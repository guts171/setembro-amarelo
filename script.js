const mensagens = [
  "Você é mais forte do que imagina 💛",
  "Nunca se esqueça: sua vida importa 🌻",
  "Você não está sozinho, estamos juntos 🤝",
  "Acredite: dias melhores virão ☀️",
  "Sempre existe esperança 🌈",
  ];

document.getElementByid("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Match.random() * mensagens.length)];
  document.getElentByid("mensagem").innerText = aleatoria;
});
