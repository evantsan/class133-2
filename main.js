img = "";
stat = "";
objects = [];
function preload()
{
    img = loadImage("dog_cat.jpg")
}
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    od = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects are being detected"
}
function modelLoaded()
{
    console.log("model has been loaded")
    stat = true;
    od.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error)
    }
    console.log(results)
    objects = results;
}
function draw()
{
    image(img,0,0,640,420);

    fill("red");
    stroke("red");
    if(stat !='')
    {
        for(var i = 0;i<objects.length;i++)
        {
        document.getElementById("status").innerHTML = "Status : Objects Detected"
        per = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+per+"%",objects[i].x+15,objects[i].y+15);
        noFill()
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}

