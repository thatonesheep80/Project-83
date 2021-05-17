var mouse_event = "empty";

var last_x , last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY- canvas.offsetTop;

    if (mouse_event == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_x , last_y);
        ctx.lineTo(current_x , current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}


    width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 700;

    if ( width < 992 )
    {
        document.getElementById('myCanvas').width = new_width;
        document.getElementById('myCanvas').height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_line").value;

        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        
        last_x = current_position_of_touch_x; 
        last_y = current_position_of_touch_y;
    }
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}