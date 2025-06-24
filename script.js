function buscar() {
  const libro = document.getElementById("libro").value;
  fetch("https://book-recommender-backend.onrender.com/recomendar", {
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
  });
}
