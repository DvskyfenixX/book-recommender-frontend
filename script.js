function buscar() {
  const libro = document.getElementById("libro").value;
  fetch("https://<TU_BACKEND>.onrender.com/recomendar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ libro })
  })
  .then(res => res.json())
  .then(data => {
    let html = "<h2>Recomendaciones</h2>";
    data.recomendaciones.forEach(r => {
      html += `<p><b>${[...r.consequents].join(", ")}</b> — Confianza: ${r.confidence.toFixed(2)}</p>`;
    });
    document.getElementById("resultados").innerHTML = html;
    document.getElementById("grafo").src = "data:image/png;base64," + data.grafo;
  });
}
