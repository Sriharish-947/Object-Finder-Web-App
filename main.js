Status = " ";
objects = [];
speechSynthesis = speechSynthesis.speaking;
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
   image(video, 0, 0, 600, 500);
   if(Status != " ")
   {
       objectsDetector.detect(video, gotResult);
       for(x = 0; x < objects.length; x++ )
       {
           r = random(255);
           g = random(255);
           b = random(255);
       document.getElementById("status").innerHTML = "Status : objectss Detected!";
       document.getElementById("numberDetected").innerHTML = "Number of objects detected are : " + objects.length;
       percent = floor(objects[x].confidence * 100);
       fill(r,g,b);
       //fontsize(24);
       text(objects[x].label + " " + percent + "%", objects[x].x + 15, objects[x].y + 15);
       noFill();
       stroke(r,g,b);
       rect(objects[x].x, objects[x].y, objects[x].width, objects[x].height);
       }
   }

   if(objects[x].label == value)
   {
    video.stop()
    objectDetector.detect(gotResult)
    document.getElementById("status").innerHTML = "Mentioned Object Found";
    utterThis = SpeechSynthesisUtterance("mentioned object found");
    speechSynthesis.speak(utterThis);
   }
   else
   {
    document.getElementById("status").innerHTML = "Mentioned Object Has Not Been Found"
   }
}

function start()
{
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value = document.getElementById("objectName").value;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded()
{
    console.log("cocossd squadron-458 has launced and is awaiting your command gold leader.");
    Status = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}