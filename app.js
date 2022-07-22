var count=0;
const btn = document.getElementById('butt');
buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    alert("Item added successfully");
count++;

btn.innerHTML =  `<a href="#" style="Text-decoration:none;">
   <i class="fas fa-shopping-cart"></i> My Cart-<span style="color:rgb(300, 51, 0); font-size: 16pxS;">(`+count+`)</span>
 </a>`
    });

}
