let colors = ["gray", "lightblue", "tomato", "lightpurple"];
let color = 0;
document.getElementById("spin-color").addEventListener('click',function(){
    document.body.style.backgroundColor = colors[color];
    color = (color+1) % colors.length;
})