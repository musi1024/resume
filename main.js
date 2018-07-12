setTimeout(function() {
  welcome.classList.remove("active")
},1500)

window.onscroll = function() {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky")
  } else {
    topNavBar.classList.remove("sticky")
  }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(even) {
    even.currentTarget.classList.add("active")
  }
  liTags[i].onmouseleave = function(even) {
    even.currentTarget.classList.remove("active")
  }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(even) {
    even.preventDefault()
    let e = even.currentTarget
    let href = e.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop
    window.scrollTo(0, top - 100)
  }
}


portfolio1.onclick = function() {
  portfolioBar.className = 'bar state-1'
}

portfolio2.onclick = function() {
  portfolioBar.className = 'bar state-2'
}

portfolio3.onclick = function() {
  portfolioBar.className = 'bar state-3'
}
