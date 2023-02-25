function verificarPedido() {
  const img1 = Number(document.getElementById("img1").value);
  const img2 = Number(document.getElementById("img2").value);
  const img3 = Number(document.getElementById("img3").value);
  const cantidad = img1 + img2 + img3;

  const resultado = document.getElementById("resultado");
  resultado.textContent = `Tienes ${cantidad} stickers.`;

  if (cantidad > 10) {
    resultado.textContent = "Tienes demasiados stickers.";
  }
}