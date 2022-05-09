function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clear_canvas(){
    background("#fbd139");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);  
}

function gotResult(error, results){ 

    if(error){
        console.error(error);
    }
    
    console.log(results);
    document.getElementById("label").innerHTML = results[0].label;
    document.getElementById("confidence").innerHTML = Math.floor(results[0].confidence * 100) + "%";
    utterThis = new SpeechSynthesisIsUttarnce.synth(results[0].label);
    
}
