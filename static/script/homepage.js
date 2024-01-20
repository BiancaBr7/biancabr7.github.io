snow()
var animationFrame;
var isAnimationOn = false;
canvas = document.getElementById("canvas");
canvas.hidden = true;
var messageBoxClosed = false;

function changeBackground(number){
    if (number != 6 && isAnimationOn) {
        stopFireworks();
    }
    const back = document.getElementById("effect");
    clearEffects(back);
    back.hidden = true;
    const clickPanel = document.getElementById('click');
    clearEffects(clickPanel)
    clickPanel.hidden = true;
    var screenWidth = window.innerWidth;
    const container = document.getElementById("container")
    var backgroundImages = ['spring','summer','autumn','winter','sqr','cat','firework','paw']
    if (screenWidth < 768){
        var backgroundImages = ['spring','summer','autumn','winter','sqr_mobile','cat_mobile','firework','paw']
    }
    const buttoncolors = ['olive','cadetblue','#523928','steelblue','coral','orange','tomato','#1d1b23']
    const imageId = `url('static/images/backgrounds/${backgroundImages[number]}.jpg')`;
    const buttonContainer = document.getElementById('more-button')

    buttonContainer.style.backgroundColor = buttoncolors[number];

    container.style.backgroundImage = imageId;

    if (number == 0){
        closeMessageBox();
        petal();
    }
    else if (number == 1){
        closeMessageBox();
        bird();
    }
    else if (number == 2){
        closeMessageBox();
        leaf();
    }
    else if (number == 3){
        closeMessageBox();
        snow();
    }
    else if (number == 4){
        displayMessage();
        nut();
    }
    else if (number == 5){
        displayMessage();
        cat();
    }
    else if (number == 6){
        closeMessageBox();
        onLoad();
    }
    else if (number == 7){
        displayMessage();
        paw();
    }
}

function clearEffects(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function snow(){
    const back = document.getElementById("effect");
    back.hidden = false;
    const count = 50;
    for (var i = 0; i<count; i++){
        leftSnow = Math.floor(Math.random()*95);
        topSnow = Math.floor(Math.random()*40);
        widthSnow = Math.floor(Math.random()*50);
        timeSnow = Math.floor(Math.random()*5+5);
        blurSnow = Math.floor(Math.random()*3);
        const div = document.createElement('div');
        div.classList.add('snow');
        div.style.left = leftSnow+'%';
        div.style.top = topSnow+'vh';
        div.style.width = widthSnow+'px';
        div.style.height = widthSnow+'px';
        div.style.animationDuration = timeSnow+'s';
        div.style.filter = 'blur('+blurSnow+'px)';
        back.appendChild(div);
    }
}

function petal(){
    const back = document.getElementById("effect");
    back.hidden = false;
    const count = 4;
    for (var i = 0; i<count; i++){
        leftPetal = Math.floor(i%4*20+Math.random()*10-5);
        topPetal = Math.floor(Math.random()*30);
        timePetal = Math.floor(Math.random()*10+5);
        blurPetal = Math.floor(Math.random()*3);
        const div = document.createElement('div');
        div.classList.add('petal');
        div.style.left = leftPetal+'%';
        div.style.top = topPetal+'vh';
        div.style.animationDuration = timePetal+'s';
        div.style.filter = 'blur('+blurPetal+'px)';
        back.appendChild(div);
    }
}

function bird(){
    const back = document.getElementById("effect");
    back.hidden = false;
    const div = document.createElement('div');
    div.classList.add('bird');
    back.appendChild(div);
}

function leaf(){
    const back = document.getElementById("effect");
    back.hidden = false;
    const count = 40;
    for (var i = 0; i<count; i++){
        leftLeaf = Math.floor(Math.random()*100);
        topLeaf = Math.floor(Math.random()*50);
        widthLeaf = Math.floor(Math.random()*50);
        timeLeaf = Math.floor(Math.random()*5+5);
        blurLeaf = Math.floor(Math.random()*3);
        rotationLeaf = Math.floor(Math.random()*180);
        const div = document.createElement('div');
        div.classList.add('leaf');
        div.style.left = leftLeaf+'%';
        div.style.top = topLeaf+'vh';
        div.style.width = widthLeaf+'px';
        div.style.height = widthLeaf+'px';
        div.style.animationDuration = timeLeaf+'s';
        div.style.filter = 'blur('+blurLeaf+'px)';
        div.style.transform = 'rotate('+rotationLeaf+'deg)';
        back.appendChild(div);
    }
}

function cat() {
    const back = document.getElementById("click");
    back.hidden = false;
    const clonedBack = back.cloneNode(true);
    back.parentNode.replaceChild(clonedBack, back);

    clonedBack.addEventListener('click', catEventListener);

    function catEventListener(event) {
        createSnoringZ(event.clientX, event.clientY);
    }

    function createSnoringZ(x, y) {
        closeMessageBox()
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                const div = document.createElement('div');
                div.classList.add('snoring');
                div.textContent = "Z";
                clonedBack.appendChild(div);

                div.style.left = x + 'px';
                div.style.top = y + 'px';
            }, i * 200); 
        }
    }
}

function paw() {
    const back = document.getElementById("click");
    back.hidden = false;

    const clonedBack = back.cloneNode(true);
    back.parentNode.replaceChild(clonedBack, back);

    clonedBack.addEventListener('click', pawEventListener);

    function pawEventListener(event) {
        createSnoringZ(event.clientX, event.clientY);
    }

    function createSnoringZ(x, y) {
        closeMessageBox()
        const div = document.createElement('div');
        div.classList.add('paw');
        clonedBack.appendChild(div);

        div.style.left = x + 'px';
        div.style.top = y + 'px';
    }
}

function nut() {
    const back = document.getElementById("click");
    back.hidden = false;
    const clonedBack = back.cloneNode(true);
    back.parentNode.replaceChild(clonedBack, back);

    clonedBack.addEventListener('click', catEventListener);

    function catEventListener(event) {
        createSnoringZ(event.clientX, event.clientY);
    }

    function createSnoringZ(x, y) {
        closeMessageBox()
        const l_of_emj = ["🥜","🌰","🍂","🍃","🥔","🌿","🍁"]
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                const div = document.createElement('div');
                div.classList.add('nut');
                var emoji = l_of_emj[Math.floor(Math.random()*7)]
                div.textContent = emoji;
                clonedBack.appendChild(div);

                div.style.left = x + 'px';
                div.style.top = y + 'px';
            }, i * 200); 
        }
    }
}

function startFireworks() {
    console.log("runned");
    isAnimationOn = true;
    canvas = document.getElementById("canvas");
    canvas.hidden = false;
}

function stopFireworks() {
    isAnimationOn = false;
    canvas = document.getElementById("canvas");
    canvas.hidden = true;
    cancelAnimationFrame(animationFrame);
}
window.addEventListener("resize", resizeCanvas, false);

window.requestAnimationFrame =
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

var canvas, ctx, w, h, particles = [], probability = 0.04,
    xPoint, yPoint;

function onLoad() {
    if (!isAnimationOn){
        startFireworks();
    }
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeCanvas();

    window.requestAnimationFrame(updateWorld);
}

function resizeCanvas() {
    if (!!canvas) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
}

function updateWorld() {
    if (isAnimationOn) {
        update();
        paint();
        animationFrame = window.requestAnimationFrame(updateWorld);
    }
}

function update() {
    if (particles.length < 500 && Math.random() < probability) {
        createFirework();
    }
    var alive = [];
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].move()) {
            alive.push(particles[i]);
        }
    }
    particles = alive;
}

function paint() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
    }
}

function createFirework() {
    xPoint = Math.random() * (w - 200) + 100;
    yPoint = Math.random() * (h - 200) + 100;
    var nFire = Math.random() * 50 + 100;
    var c = "rgb(" + (~~(Math.random() * 200 + 55)) + ","
        + (~~(Math.random() * 200 + 55)) + "," + (~~(Math.random() * 200 + 55)) + ")";
    for (var i = 0; i < nFire; i++) {
        var particle = new Particle();
        particle.color = c;
        var vy = Math.sqrt(25 - particle.vx * particle.vx);
        if (Math.abs(particle.vy) > vy) {
            particle.vy = particle.vy > 0 ? vy : -vy;
        }
        particles.push(particle);
    }
}

function Particle() {
    this.w = this.h = Math.random() * 1 + 1;

    this.x = xPoint - this.w / 2;
    this.y = yPoint - this.h / 2;

    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;

    this.alpha = Math.random() * .5 + .5;

    this.color;
}

Particle.prototype = {
    gravity: 0.08,
    move: function () {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.alpha -= 0.01;
        if (this.x <= -this.w || this.x >= screen.width ||
            this.y >= screen.height ||
            this.alpha <= 0) {
            return false;
        }
        return true;
    },
    draw: function (c) {
        c.save();
        c.beginPath();

        c.translate(this.x + this.w / 2, this.y + this.h / 2);
        c.arc(0, 0, this.w, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = this.alpha;

        c.closePath();
        c.fill();
        c.restore();
    }
}

var musicHidden = false;
const musicContainer = document.getElementById("music")
const musicButton = document.getElementById("musicButton")
const spotifyEmbedWindow = document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow;
function toggleMusic(){
    if (musicHidden){
        musicHidden = false;
        musicContainer.style.display = "block";
        musicButton.textContent = "⏸️";
        spotifyEmbedWindow.postMessage({command: 'resume'}, '*');
    }
    else{
        musicHidden = true;
        musicContainer.style.display = "none";
        musicButton.textContent = "🎵";
        spotifyEmbedWindow.postMessage({command: 'pause'}, '*');
    }
}


const messageBox = document.getElementById("messageBox")
const messageContainer = document.getElementById("messageContainer")
const messageGraphic = document.getElementById("messageGraphic")
function closeMessageBox() {
    if (messageBoxClosed){
        return;
    }
    else{
        console.log("messageBoxClosed")
        messageContainer.style.opacity = '0';
        setTimeout(function () {
            messageContainer.style.display = 'none';
        }, 1000);
        messageBoxClosed = true;
    }
    console.log(messageBoxClosed)
}

function displayMessage(){
    var screenWidth = window.innerWidth;
    console.log("display"+messageBoxClosed)
    if (messageBoxClosed){
        messageContainer.style.display = 'block';
        messageContainer.style.opacity = '100';
        messageBox.textContent = "Click for Surprise!";
        messageGraphic.style.backgroundImage = "url('static/images/MessageClick.png')";
        messageGraphic.style.top = "0";
        messageGraphic.style.backgroundSize = "cover";
        messageGraphic.style.position = "relative";
        if (screenWidth >= 768){
            messageContainer.style.bottom = "30%";
        }
        messageBox.style.paddingTop = "15px";
        messageBox.style.marginTop = "10px";
        messageContainer.style.pointerEvents = "none";
        messageBoxClosed = false;
    }
    else{
        console.log("opened");
        messageBox.textContent = "Click for Surprise!";
        messageGraphic.style.backgroundImage = "url('static/images/MessageClick.png')";
        messageGraphic.style.top = "0";
        messageGraphic.style.backgroundSize = "cover";
        messageGraphic.style.position = "relative";
        if (screenWidth >= 768){
            messageContainer.style.bottom = "30%";
        }
        messageBox.style.paddingTop = "15px";
        messageBox.style.marginTop = "10px";
        messageContainer.style.pointerEvents = "none";
    }
    
}