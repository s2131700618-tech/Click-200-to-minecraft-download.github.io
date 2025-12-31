const number = document.getElementById('number');
const btn = document.getElementById('myBtn'); 
var x = 0;
setInterval(() => {
  number.textContent = x;
  if(x >= 200) {
    window.location.href = "https://mcpelife.com/minecraft-pe-1-21-124/download/1/";
    x = 0;
  }
}, 20);
btn.addEventListener('click', () => {
  x = x + 1;
})
