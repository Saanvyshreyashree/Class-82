var mouseEvent="empty";
var last_x;
var last_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width=1;

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        ctx.moveTo(last_x,last_y);
        console.log("x="+last_x);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();
    }

    last_x=current_mouse_x;
    last_y+current_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}