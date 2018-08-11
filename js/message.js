!function() {
    var view = document.querySelector('section.message')

    var model = {
        init: function() {
            var APP_ID = 'KvjA6BnYIuJReqnVQDC2bHSI-gzGzoHsz'
            var APP_KEY = 'OTnqsXdSJhsyMbIMCxQfILoY'
            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch: function() {
            let query = new AV.Query('Message')
            return query.find()
        },
        save: function(name, content) {
            var Message = AV.Object.extend('Message')
            var message = new Message()
            return message.save({
                'name': name,
                'content': content,
            })
        }
    }

    var controller = {
        view: null,
        model: null,
        init: function(view) {
            this.view = view
            this.model = model
            this.model.init()

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function() {
            this.model.fetch().then(
                (message) => {
                    let array = message.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                         this.messageList.appendChild(li)
                    })
                }
            )
        },
        bindEvents: function() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function() {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            console.log(myForm.querySelector('input[name=content]').value)
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(
                function(object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                })            
        }

    }
    controller.init(view, model)
}.call()



