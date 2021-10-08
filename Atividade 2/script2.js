const min = document.getElementsByClassName("minuscula");
const mai = document.getElementsByClassName("maiscula");

function minhaFuncao() {
  for (let i = 0; i < min.length; i++) {
    mai[i].innerHTML = min[i].textContent.toUpperCase();
  }
}
