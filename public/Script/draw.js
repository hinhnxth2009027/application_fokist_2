document.addEventListener('DOMContentLoaded',function (){
    var canvas = document.getElementById("draw");
    var select = document.querySelectorAll('.seclect_color')
    for (var b = 0 ; b < select.length ; b++){
        select[b].onmouseover = function (){
            document.getElementById("hex").value=`${this.id}`
            document.querySelector('.seclect_color.active').classList.remove('active')
            this.classList.add('active')
        }
    }
    var ctx = canvas.getContext("2d");
    resize();
// resize canvas when window is resized
    function resize() {
        ctx.canvas.width = 1900;
        ctx.canvas.height = 750;
    }
// initialize position as 0,0
    var pos = { x: 0, y: 0 };
// new position from mouse events
    function setPosition(e) {
        pos.x = e.clientX;
        pos.y = e.clientY;
    }
    function draw(e) {
        if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
        var color = document.getElementById("hex").value;
        ctx.beginPath(); // begin the drawing path
        var select_size = document.querySelectorAll('.size')
        for (var a = 0 ; a< select_size.length ; a++){
            select_size[a].onmouseover = function (){
                document.querySelector('#size').value=`${this.id}`
                document.querySelector('.size.active').classList.remove('active')
                this.classList.add('active')
            }
        }
        var size = document.querySelector('#size')
        ctx.lineWidth = size.value; // width of line
        ctx.lineCap = "round"; // rounded end cap
        ctx.strokeStyle = color; // hex color of line
        ctx.moveTo(pos.x, pos.y); // from position
        setPosition(e);
        ctx.lineTo(pos.x, pos.y); // to position
        ctx.stroke(); // draw it!
    }
// add window event listener to trigger when window is resized
//     window.addEventListener("resize", resize);
// add event listeners to trigger on different mouse events
    document.addEventListener("mousedown", setPosition);
    document.addEventListener("mouseenter", setPosition);
    document.addEventListener("mousemove", draw);




})