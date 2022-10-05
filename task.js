const div = Array.from(document.querySelectorAll('.dropdown__value'))
const li = Array.from(document.querySelectorAll('.dropdown__item'))

function add() {
    this.nextElementSibling.classList.add('dropdown__list_active')
}

function remove() {
    this.closest('.dropdown__list').classList.remove('dropdown__list_active')
    this.closest('.dropdown__list').previousElementSibling.textContent = this.textContent
    return false
}

div.forEach((el) => {
    el.addEventListener('click', add)
})

li.forEach((el) => {
    el.onclick = remove
})
