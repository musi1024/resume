!function() {
    // 添加 offset(初始下移)
    let mainBlock = document.querySelectorAll(".mainBlock")
    for (let i = 0; i < mainBlock.length; i++) {
        mainBlock[i].classList.add('offset')
    }

    // 初次打开页面是，板块上移
    setTimeout(function() {
        scrollAnimateAndRemoveOffset()
        window.scrollTo(0,0)
    },1400)


    // 滚动时，板块上移
    window.addEventListener('scroll', function() {
        scrollAnimateAndRemoveOffset()
    })

    // 方法
    function scrollAnimateAndRemoveOffset() {
        let mainBlock = document.querySelectorAll(".mainBlock")
        let minIndex = 0
        for (let i = 0; i < mainBlock.length; i++) {
            if (Math.abs(mainBlock[i].offsetTop - window.scrollY) < Math.abs(mainBlock[minIndex].offsetTop -window.scrollY)) {
                minIndex = i
            }
        }
        mainBlock[minIndex].classList.remove('offset')
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

