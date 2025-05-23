const parts = ["aWd", "vcm", "Rld", "g=="];
const secretCode = atob(parts.join(""));

devInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (devInput.value.trim().toLowerCase() === secretCode) {
      alert(`Produto secreto: ${target.nome}`);
    } else {
      alert("Código incorreto!");
    }
    devInput.value = "";
    devContent.classList.remove("show");
  }
});
