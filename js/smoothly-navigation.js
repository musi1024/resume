!function() {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        liTags: null,
        aTags: null,
        init: function(view) {
            this.view = view
            this.initAnimate()
            this.bindEvents()
        },
        initAnimate: function() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element) {
            let top = element.offsetTop
            let currrentTop = window.scrollY
            let targetTop = top - 100
            let s = targetTop - currrentTop
            var coords = { y: currrentTop }
            var t = Math.abs((s / 100) * 300 )
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords) 
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut) 
            .onUpdate(function() { 
                window.scrollTo(0, coords.y)
            })
            .start()
        },
        bindEvents: function() {
            let liTags = document.querySelectorAll('nav.menu > ul > li')
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = (even) => {
                    even.currentTarget.classList.add("active")
                }
                liTags[i].onmouseleave = (even) => {
                    even.currentTarget.classList.remove("active")
                }
            }
            let aTags = document.querySelectorAll('nav.menu > ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (even) => {
                    even.preventDefault()
                    let e = even.currentTarget
                    let href = e.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        }
    }
    controller.init(view)
}.call()

