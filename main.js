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

portfolio1.onclick = function() {
  portfolioBar.className = 'bar state-1'
}

portfolio2.onclick = function() {
  portfolioBar.className = 'bar state-2'
}

portfolio3.onclick = function() {
  portfolioBar.className = 'bar state-3'
}
