let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['C/C++ 開發人員', "計算機圖形學家", "獨立遊戲開發者", "AI陪伴系統開發者"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
})