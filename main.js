Status = " ";

function setup()
{
    canvas.createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
   image(video, 0, 0, 600, 500);
}

function start()
{
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value = document.getElementById("objectName").value;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("cocossd squadron-458 has launced and is awaiting your command gold leader.");
    Status = true;
}