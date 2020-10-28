let bBoy;
let bGirl;
let bSpring;
let bSummer;
let bFall;
let bWinter;

let sSkin;

let cpHair;
let cpBackpack;

let inputInitial;
let bEnter;

let h = 15;

let hair = 0;

let springTransparency = 0;
let summerTransparency = 255;
let fallTransparency = 0;
let winterTransparency = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    angleMode(DEGREES);
    
    bBoy = createButton('BOY');
    bGirl = createButton('GIRL');
    bSpring = createButton('SPRING');
    bSummer = createButton('SUMMER');
    bFall = createButton('FALL');
    bWinter = createButton('WINTER');

    bBoy.mousePressed(boy);
    bGirl.mousePressed(girl);
    bSpring.mousePressed(spring);
    bSummer.mousePressed(summer);
    bFall.mousePressed(fall);
    bWinter.mousePressed(winter);
    
    bBoy.class('buttons');
    bGirl.class('buttons');
    bSpring.class('buttons');
    bSummer.class('buttons');
    bFall.class('buttons');
    bWinter.class('buttons');
    
    colorMode(HSB);
    sSkin = createSlider(30,100,94,10);
    
    //cpSkin = createColorPicker();
    cpHair = createColorPicker('rgb(65,50,40)');
    cpBackpack = createColorPicker('rgb(255,200,0)');
        
    //inputting initial
    inputInitial = createInput();

    bEnter = createButton('ENTER');
    bEnter.mousePressed(initial);
    styleEnterButton();
    
    instruction = createElement('h3', 'YOUR INITIAL?');
    instruction.style('color', 'white');
    instruction.style('fontFamily', 'Roboto Mono');
    instruction.style('fontSize', '10px');
    
    initial = createElement('h3', ' ');
    initial.style('fontFamily', 'Roboto Mono');
    initial.style('fontSize', '10px');
    
    repositionAll();
}

function boy() { 
    hair = 0;
}

function girl() {
    hair = 30;
}

function spring() {
    springTransparency = 255;
    summerTransparency = 0;
    fallTransparency = 0;
    winterTransparency = 0;
}

function summer() {
    springTransparency = 0;
    summerTransparency = 255;
    fallTransparency = 0;
    winterTransparency = 0;
}

function fall() {
    springTransparency = 0;
    summerTransparency = 0;
    fallTransparency = 255;
    winterTransparency = 0;
}

function winter() {
    springTransparency = 0;
    summerTransparency = 0;
    fallTransparency = 0;
    winterTransparency = 255;
}

function initial() {
    const i = inputInitial.value();
    initial.html(i);
}

function draw() {
    background(255);
    
    drawCharacter();
    drawCustom();
}

function drawCharacter() {
    x = width/4
    y = height/2
    
    colorMode(RGB);
    rectMode(CENTER);
    noStroke();
    fill(25,20,15);
    rect(x, y, width/2, height);
    
    //top hair
    fill(cpHair.color(), 0.3);
    rect(x, y-27.5, 105, 50, 30, 30, 0, 0);
    rect(x+37.5, y-5+hair/2, 30, 60+hair, 10, 0, 15, 0);

    //face
    push();
    colorMode(HSB);
    fill(30, 33, sSkin.value());
    rect(x, y+20, 100, 60, 0, 0, 25, 25);
    pop();
    
    //eyes
    fill(0);
    circle(x+40, y+17.5, 6.5);
    circle(x-7.5, y+17.5, 6.5);
    
    //bottom hair
    fill(cpHair.color());
    rect(x-10, y-15, 25, 40, 0, 0, 0, 15);
    rect(x+15, y-15, 25, 40, 0, 0, 0, 15);
    rect(x+40, y-15, 25, 40, 0, 15, 0, 15);
    rect(x-37.5, y-5+hair/2, 30, 60+hair, 10, 0, 15, 0);

    //spring cap
    push();
        strokeWeight(5);
        stroke(255,200,0, springTransparency);
        line(x-55, y-5, x+55, y-5);
        line(x-52.5, y-15, x+52.5, y-15);
        line(x-47.5, y-50, x+47.5, y-50);
        line(x-47.5, y-50, x-52.5, y-15);
        line(x+47.5, y-50, x+52.5, y-15);
        line(x-52.5, y-15, x-55, y-5);
        line(x+52.5, y-15, x+55, y-5);
        strokeWeight(2.5);
        stroke(0, springTransparency);
        line(x-52.5, y-15, x+52.5, y-15);
    pop();
    fill(255,200,0, springTransparency);
    rect(x, y-32.5, 100, 32.5);
    rect(x, y-10, 110, 7.5);
    
    //summer hat
    fill(255,0,0, summerTransparency);
    rect(x, y-27.5, 110, 55, 30, 30, 0, 5);
    rect(x+55, y-7.5, 22.5, 15, 7.5, 7.5, 7.5, 0);
    
    //fall hat
    fill(165,110,75, fallTransparency);
    rect(x, y-10, 120, 20, 5, 5, 5, 5);
    rect(x, y-35, 110, 40, 15, 15, 0, 0);
    fill(0, fallTransparency);
    rect(x, y-21.25, 110, 2.5);
    
    //winter hat
    fill(120,180,230, winterTransparency);
    rect(x, y-10, 115, 20, 5, 5, 5, 5);
    arc(x, y-17.5, 110, 110, 180, 0);
    fill(255, winterTransparency);
    circle(x-25, y-70, 20);
    rect(x, y-21.25, 110, 2.5);
    
    //ear
    push();
    colorMode(HSB);
    fill(30, 33, sSkin.value());
    ellipse(x-27.5, y+25, 15, 16.5);
    pop();
    
    //feet
    push();
        colorMode(HSB);
        strokeWeight(17.5);
        stroke(30, 33, sSkin.value());
        line(x-17.5, y+110, x-17.5, y+130);
        line(x+17.5, y+110, x+17.5, y+130);
    pop();
    
    //backpack
    fill(cpBackpack.color());
    rect(x-40, y+85, 25, 50, 7.5, 7.5, 7.5, 7.5);
    
    //spring outfit
    fill(165,110,75, springTransparency);
    rect(x-15, y+110, 35, 30, 0, 0, 5, 5); //pants
    rect(x+20, y+110, 35, 30, 0, 0, 5, 5);
    fill(40,200,100, springTransparency);
    rect(x+2.5, y+82.5, 75, 65, 20, 20, 0, 0); //shirt
    push();
        strokeWeight(2.5);
        stroke(25,185,85, springTransparency);
        line(x+10, y+52.5, x+10, y+112.5);
        strokeWeight(5);
        point(x+15, y+65);
        point(x+15, y+80);
        point(x+15, y+95);
    pop();
    
    //summer outfit
    fill(255, summerTransparency);
    rect(x+2.5, y+75, 70, 50, 20, 20, 0, 0); //shirt
    fill(255,0,0, summerTransparency);
    rect(x-15, y+110, 35, 30, 0, 0, 5, 5); //pants
    rect(x+20, y+110, 35, 30, 0, 0, 5, 5);
    
    //fall outfit
    fill(255, fallTransparency);
    rect(x+2.5, y+75, 70, 50, 20, 20, 0, 0); //shirt
    fill(120,180,230, fallTransparency);
    rect(x-15, y+112.5, 35, 35, 0, 0, 5, 5); //pants
    rect(x+20, y+112.5, 35, 35, 0, 0, 5, 5);
    fill(165,110,75, fallTransparency);
    rect(x-17.5, y+75, 35, 50, 30, 0, 0, 0); //outerwear
    rect(x+27.5, y+75, 25, 50, 0, 30, 0, 0);
    
    //winter outfit
    fill(255, winterTransparency);
    rect(x+2.5, y+75, 70, 50, 20, 20, 0, 0); //shirt
    fill(120,180,230, winterTransparency);
    rect(x-15, y+112.5, 35, 35, 0, 0, 5, 5); //pants
    rect(x+20, y+112.5, 35, 35, 0, 0, 5, 5);
    fill(255,0,0, winterTransparency);
    rect(x-17.5, y+85, 35, 70, 30, 0, 0, 0); //outerwear
    rect(x+27.5, y+85, 25, 70, 0, 30, 0, 0);
    fill(120,180,230, winterTransparency);
    rect(x+5, y+55, 65, 15, 7.5, 7.5, 7.5, 7.5); //scarf
    rect(x+20, y+75, 20, 35, 0, 0, 5, 5);
    
    //hand
    push();
        colorMode(HSB);
        strokeWeight(17.5);
        stroke(30, 33, sSkin.value());
        line(x-20, y+65, x-15, y+105);
    pop();
    
    //spring sleeve
    push();
        strokeWeight(20);
        stroke(25,185,85, springTransparency);
        line(x-20, y+65, x-16.25, y+95);
        strokeWeight(10);
        line(x-22.5, y+101, x-9, y+100);
    pop();
    
    //fall sleeve
    push();
        strokeWeight(20);
        stroke(145,90,55, fallTransparency);
        line(x-20, y+65, x-16.25, y+95);
        strokeWeight(10);
        line(x-22.5, y+101, x-9, y+100);
    pop();
    
    //winter sleeve
    push();
        strokeWeight(20);
        stroke(225,0,0, winterTransparency);
        line(x-20, y+65, x-16.25, y+95);
        strokeWeight(10);
        line(x-22.5, y+101, x-9, y+100);
    pop();
    
    //spring shoes
    fill(255,200,0, springTransparency);
    rect(x-12.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    rect(x+22.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    rect(x-17.5, y+130, 20, 7.5);
    rect(x+17.5, y+130, 20, 7.5);
    fill(165,110,75, springTransparency);
    rect(x-12.5, y+145, 30, 2.5);
    rect(x+22.5, y+145, 30, 2.5);
    
    //summer shoes
    fill(255,200,0, summerTransparency);
    rect(x-12.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    rect(x+22.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    fill(255, summerTransparency);
    rect(x-12.5, y+145, 30, 2.5);
    rect(x+22.5, y+145, 30, 2.5);
    
    //fall shoes
    fill(165,110,75, fallTransparency);
    rect(x-12.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    rect(x+22.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    fill(255, fallTransparency);
    rect(x-12.5, y+145, 30, 2.5);
    rect(x+22.5, y+145, 30, 2.5);
    
    //winter shoes
    fill(255,200,0, winterTransparency);
    rect(x-12.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    rect(x+22.5, y+137.5, 30, 15, 0, 7.5, 0, 0);
    fill(255, winterTransparency);
    rect(x-12.5, y+145, 30, 2.5); //left
    rect(x-22.5, y+147.5, 2, 2.5);
    rect(x-7.5, y+147.5, 2, 2.5);
    rect(x-1, y+147.5, 2, 2.5);
    rect(x-13.5, y+148.5, 32.5, 1);
    rect(x+22.5, y+145, 30, 2.5); //right
    rect(x+12.5, y+147.5, 2, 2.5);
    rect(x+27.5, y+147.5, 2, 2.5);
    rect(x+34, y+147.5, 2, 2.5);
    rect(x+21.5, y+148.5, 32.5, 1);
    
    //rocket effect
    push();
        strokeWeight(2.5);
        stroke(255,0,0, random(25,175));
        line(x-45, y+120, x-50-random(0,5), y+140+random(0,5));
        line(x-40, y+125, x-37.5-random(0,5), y+150+random(0,5));
    pop(); 
}

function drawCustom() {
    noStroke();
    fill(65,50,40);
    rect(width/4*3, height/2, width/2, height);
    
    rectMode(CORNER);
    fill(0,0,0,50);
    rect(width/2, 0, width/2, height/h);
    rect(width/2, height/h*3, width/2, height/h);
    rect(width/2, height/h*6, width/2, height/h);
    rect(width/2, height/h*9, width/2, height/h);
    rect(width/2, height/h*12, width/2, height/h);
    
    //text
    fill(255);
    textSize(10);
    textFont('Roboto Mono');
    textAlign(CENTER, CENTER);
    text('GENDER', width/4*3, height/h/2);
    text('SEASONAL OUTFIT', width/4*3, height/h/2*7);
    text('SKIN COLOR', width/4*3, height/h/2*13);
    text('HAIR COLOR', width/4*3, height/h/2*19);
    text('BACKPACK COLOR', width/4*3, height/h/2*25);
    
    textSize(8);
    text('DARK', width/8*5, height/h/2*16-5);
    text('LIGHT', width/8*7, height/h/2*16-5);
}

function styleEnterButton(){
    bEnter.style('backgroundColor', '#413228');
    bEnter.style('color', 'white');
    bEnter.style('border', 'none');
    bEnter.style('fontSize', '8px');
    bEnter.style('fontFamily', 'Roboto Mono');
}

function repositionAll() {
    bBoy.position(width/4*2, height/h);
    bGirl.position(width/4*3, height/h);  
    bBoy.size(width/4, height/h*2);
    bGirl.size(width/4, height/h*2);
    
    bSpring.position(width/8*4, height/h*4);
    bSummer.position(width/8*5, height/h*4);
    bFall.position(width/8*6, height/h*4);
    bWinter.position(width/8*7, height/h*4);
    bSpring.size(width/8, height/h*2);
    bSummer.size(width/8, height/h*2);
    bFall.size(width/8, height/h*2);
    bWinter.size(width/8, height/h*2);
    
    cpHair.position(width/2+width/8, height/h*11);
    cpHair.size(width/4, 12);

    cpBackpack.position(width/2+width/8, height/h*14);
    cpBackpack.size(width/4, 12);
    
    sSkin.position(width/2+width/8, height/h*8);
    sSkin.size(width/4, 12);
    
    inputInitial.position(width/4-50, height/6+25);
    inputInitial.size(50,15);
    
    bEnter.position(inputInitial.x+inputInitial.width, height/6+25);
    bEnter.size(50,21);
    
    instruction.position(width/4-35, height/6);
    
    initial.position(width/4-50, height/2+85);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    repositionAll();
}