setTimeout(function() {
  welcome.classList.remove("active")
},2500)

let mainBlock = document.querySelectorAll(".mainBlock")
for (let i = 0; i < mainBlock.length; i++) {
  mainBlock[i].classList.add('offset')
}

setTimeout(function() {
  scrollAnimate()
}, 2501)
window.onscroll = function() {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky")
  } else {
    topNavBar.classList.remove("sticky")
  }
  scrollAnimate()
  
}

function scrollAnimate() {
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
  for(let i = 0; i < brothers.length; i++){
    brothers[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
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

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(even) {
    even.preventDefault()
    let e = even.currentTarget
    let href = e.getAttribute('href')
    let element = document.querySelector(href)
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
