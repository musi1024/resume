!function() {
    var view = View('section.message')

    var model = Model({resourceName: 'Message'})

    var controller = Controller({
        messageList: null,
        form: null,
        init: function(view) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
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
            this.model.save({'name': name, 'content': content})
                .then(function(object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.insertBefore(li, messageList.firstChild)
                    myForm.querySelector('input[name=content]').value = ''
                })
        }
    })
    controller.init(view, model) 
}.call()



