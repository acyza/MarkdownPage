const content = document.getElementById("content"),
  loading = document.getElementById("loading");
window.addEventListener("loading",()=>{
  loading.style.visibility = "visable";
  content.style.visibility = "hidden";
})

window.addEventListener("loaded",()=>{
  loading.style.visibility = "hidden";
  content.style.visibility = "visable";
})
