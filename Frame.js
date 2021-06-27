function preload(){
    var synth = window.speechSynthesis;
    speak_data4 = "Thanks for Visiting Mustache Filter! data Loaded!";
    var utterThis = new SpeechSynthesisUtterance(speak_data4);
    synth.speak(utterThis);
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
}

function draw(){

}

function takesnapshot(){
    save("mustache-Filter.png");
}

