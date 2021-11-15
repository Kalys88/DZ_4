const btnMinus = document.querySelector("#minus")
const btnPlus = document.querySelector("#plus")
const result = document.querySelector("#result")

btnMinus.addEventListener("click", function () {
 result.innerText = parseInt(result.innerText, 10) - 1
})

btnPlus.addEventListener("click", function () {
 result.innerText = parseInt(result.innerText, 10) + 1
})