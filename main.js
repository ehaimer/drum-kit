function endEvent() {
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")

keys.forEach((element) => {
  element.addEventListener("transitionend", endEvent)
  element.addEventListener("click", playAudio)
})

window.addEventListener("keydown", playAudio)

function playAudio(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || this.getAttribute("data-key")}"]`
  )

  const key = document.querySelector(
    `.key[data-key="${e.keyCode || this.getAttribute("data-key")}"]`
  )
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add("playing")
}
