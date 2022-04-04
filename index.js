// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var note = localStorage.getItem('notes')
if (note) {
notesEl.textContent = note
textarea.value = note
}

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
var name = document.name.split('; ')
var nameCookie = cookies.find(function(cookie) {
  return cookie.startsWith('name')
})
if (nameCookie) {
  nameEl.textContent = nameCookie.split('=')[1]
}
  nameSpan.onblur = function() {
    document.cookie = "name=" + nameSpan.textcontent
  }

  notesEl.textContent = textarea.value
  localStorage.setItem('notes', textarea.value)
  textarea.onblur = function() {
    document.
  }
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  Storage.clear()

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp
