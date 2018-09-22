!function() { 
    navLineAnimate()

    window.addEventListener('scroll', function() {
        navLineAnimate()
    })

    function navLineAnimate() {
        let mainBlock = document.querySelectorAll(".mainBlock")
        let minIndex = 0
        for (let i = 0; i < mainBlock.length; i++) {
            if (Math.abs(mainBlock[i].offsetTop - window.scrollY) < Math.abs(mainBlock[minIndex].offsetTop -window.scrollY)) {
                minIndex = i
            }
        }
        let id = mainBlock[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothers = li.parentNode.children
        for(let i = 0; i < brothers.length; i++) {
            brothers[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()

