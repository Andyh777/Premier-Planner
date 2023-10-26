window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    
    let painting = false;

    function startPos() {
        painting = true;
        draw(line);
    }

    function endPos() {
        painting = false;
        context.beginPath();
    }
    
    var theInput = document.getElementById("favcolor");

    theInput.addEventListener("input", function(){
        context.strokeStyle = theInput.value;
    }, false);

    canvas.addEventListener("mousedown", startPos);
    canvas.addEventListener("mouseup", endPos);
    canvas.addEventListener("mousemove", draw);

    function draw(line) {
        if(!painting) return;
        var context = canvas.getContext('2d');
        var scroll=canvas.getBoundingClientRect();
        context.lineWidth = 3;
        context.lineCap = "round";
        context.lineTo(line.clientX-scroll.left, line.clientY-scroll.top);
        context.stroke();
        context.beginPath();
        context.moveTo(line.clientX-scroll.left, line.clientY-scroll.top);
    }
});
