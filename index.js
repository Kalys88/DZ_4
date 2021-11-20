// #1
document.querySelectorAll('button').forEach((btn) => {
    btn.onclick = (e) => {
        if (btn.textContent === '+') {
            document.querySelector("#result").innerText++
        } else if (btn.textContent === '-') {
            document.querySelector("#result").innerText--
        } else if (btn.textContent === 'reset') {
            document.querySelector("#result").innerText = 0
        }
    }
})


// #2
const btnMinus = document.querySelector("#minus")
const btnPlus = document.querySelector("#plus")
const btnReset = document.querySelector("#reset")
btnMinus.addEventListener("click", function () {
    count--
    span.innerText = count

})

btnPlus.addEventListener("click", function () {
    count++
    span.innerText = count
})

btnReset.addEventListener("click", function () {
    count = 0
    span.innerText = count
})

