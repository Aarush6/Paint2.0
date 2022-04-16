var mouseEvent="empty"

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

width=2;
color="black";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    radius=document.getElementById("radius").value;
 width=document.getElementById("width_of_line").value;
 color=document.getElementById("color").value;

mouseEvent="mousedown";
console.log("down");
}

canvas.addEventListener("mouseup", my_mouseup);


function my_mouseup(e){
    radius=document.getElementById("radius").value;
 width=document.getElementById("width_of_line").value;
 color=document.getElementById("color").value;

mouseEvent="mouseup";
console.log("up");
}

canvas.addEventListener("mouseleave", my_mouseleave);


function my_mouseleave(e){
    radius=document.getElementById("radius").value;
 width=document.getElementById("width_of_line").value;
 color=document.getElementById("color").value;

mouseEvent="mouseleave";
console.log("leave");
}

canvas.addEventListener("mousemove", my_mousemove);


function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        console.log(radius);
        console.log(color);
        console.log(width);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2* Math.PI);
        ctx.stroke();

    }
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


