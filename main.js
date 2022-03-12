song_burst="";
song_turbo="";

function preload() {
    song_turbo= loadSound("turbo");
    song_burst= loadSound("burst")
}
function setup() {
    canvas= createCanvas(600, 500);
    canvas.position(650, 300);

    video= createCapture(VIDEO); 
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}