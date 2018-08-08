!function() {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            var view = this.view
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function() {
            topNavBar.classList.add("sticky")
        },
        deactive: function() {
            topNavBar.classList.remove("sticky")
        },
    }
    controller.init(view)
    
}.call()

