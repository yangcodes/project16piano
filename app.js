const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach(function (key) {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");

  noteAudio.addEventListener("ended", function () {
    key.classList.remove("active");
  });
}
