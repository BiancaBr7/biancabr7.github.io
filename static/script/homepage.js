petal()
function changeBackground(number){
    const back = document.getElementById("effect");
    clearEffects(back);
    back.hidden = true;
    const clickPanel = document.getElementById('click');
    clearEffects(clickPanel)
    clickPanel.hidden = true;
    const container = document.getElementById("container")
    const backgroundImages = ['spring','summer','autumn','winter','sqr','cat','firework','paw']
    const buttoncolors = ['olive','cadetblue','#523928','steelblue','coral','orange','tomato','#1d1b23']
    const imageId = `url('static/images/backgrounds/${backgroundImages[number]}.jpg')`;
    const buttonContainer = document.getElementById('more-button')

    buttonContainer.style.backgroundColor = buttoncolors[number];

    container.style.backgroundImage = imageId;

    if (number == 0){
        petal()
    }
    else if (number == 1){
        bird()
    }
    else if (number == 2){
        leaf()
    }
    else if (number == 3){
        snow()
    }
    else if (number == 4){
        nut()
    }
    else if (number == 5){
        cat()
    }
    else if (number == 7){
        paw()
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
    console.log("runned")
    const back = document.getElementById("effect");
    back.hidden = false;
    const div = document.createElement('div');
    div.classList.add('bird');
    back.appendChild(div);
}

function leaf(){
    console.log("runned")
    const back = document.getElementById("effect");
    back.hidden = false;
    const count = 60;
    for (var i = 0; i<count; i++){
        leftLeaf = Math.floor(Math.random()*100);
        topLeaf = Math.floor(Math.random()*50);
        widthLeaf = Math.floor(Math.random()*50);
        timeLeaf = Math.floor(Math.random()*7+5);
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
        console.log('rotate('+rotationLeaf+'deg)');
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
        const div = document.createElement('div');
        div.classList.add('paw');
        clonedBack.appendChild(div);

        div.style.left = x + 'px';
        div.style.top = y + 'px';
        console.log("runned")
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
