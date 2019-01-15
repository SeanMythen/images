let raymanName = document.getElementById('raymanName');
let startButton = document.getElementById('startButton');
let startFist = document.getElementById('startFist');
let startScreen = document.getElementById('startScreen');

let spinBackground = document.getElementById('spinBackground');


startButton.addEventListener('click', ChooseAGame);

function ChooseAGame() {
    clickAudio.currentTime = 0;
    clickAudio.play();
    startScreen.innerHTML = `
    <img id="spinBackground" src="FND1.png" alt="">
    <div id=chooseAGameDIV>
    <img id="chooseAGame" src="chooseAGame.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty1">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty2">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty3">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="pageTwoReturnDIV">
    <span id="smallReturnFist"><img src="rayman_fist.png" alt=""></span>
    <img id="pageTwoReturn" src="return.png" alt=""> 
    </div>
    <div class="smallStartDIV">
    <span id="smallStartFist"><img src="rayman_fist.png" alt=""></span>
    <img id="smallStart" src="small_start.png" alt=""> 
    </div>
    `;

    let chooseAGameReturn = document.getElementById('pageTwoReturn');
    chooseAGameReturn.addEventListener('click', raymanStart2);

    let smallStart = document.getElementById('smallStart');
    smallStart.addEventListener('click', slideShow);




    let empty1 = document.getElementById('empty1');
    
    empty1.addEventListener('click', createName1WithSound);

    let empty2 = document.getElementById('empty2');

    empty2.addEventListener('click', createName2WithSound);

    let empty3 = document.getElementById('empty3');

    empty3.addEventListener('click', createName3WithSound);
}


let letters = {
    0: "A_letter.png",
    1: "A_letter.png",
    2: "B_letter.png",
    3: "C_letter.png",
    4: "D_letter.png",
    5: "E_letter.png",
    6: "F_letter.png",
    7: "G_letter.png",
    8: "H_letter.png",
    9: "I_letter.png",
    10: "J_letter.png",
    11: "K_letter.png",
    12: "L_letter.png",
    13: "M_letter.png",
    14: "N_letter.png",
    15: "O_letter.png",
    16: "P_letter.png",
    17: "Q_letter.png",
    18: "R_letter.png",
    19: "S_letter.png",
    20: "T_letter.png",
    21: "U_letter.png",
    22: "V_letter.png",
    23: "W_letter.png",
    24: "X_letter.png",
    25: "Y_letter.png",
    26: "Z_letter.png",
};


let val1_1 = 1;
let val1_2 = 1;
let val1_3 = 1;

let val2_1 = 1;
let val2_2 = 1;
let val2_3 = 1;

let val3_1 = 1;
let val3_2 = 1;
let val3_3 = 1;

function createName1WithSound(){
    clickAudio.currentTime = 0;
    clickAudio.play();
    createName1();
}

function createName1() {

    empty1.addEventListener('wheel', createName1);

    empty1.innerHTML = `
    <img id="letter1_1" src="${letters[val1_1]}" alt="">
    <img id="letter1_2" src="${letters[val1_2]}" alt="">
    <img id="letter1_3" src="${letters[val1_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    let letter1_1 = document.getElementById('letter1_1');
    let letter1_2 = document.getElementById('letter1_2');
    let letter1_3 = document.getElementById('letter1_3');
    letter1_1.addEventListener('wheel', val1_1Increment);
    letter1_2.addEventListener('wheel', val1_2Increment);
    letter1_3.addEventListener('wheel', val1_3Increment);

}

function val1_1Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    
    if (Y < 0 && val1_1 != 26) {        
        val1_1++;
    }

    if ( Y < 0 && val1_1 == 26) {
        val1_1 = 1;
    }


    if (Y > 0 && val1_1 != 1) {
        val1_1--;
    }

    if ( Y > 0 && val1_1 == 1){
        val1_1 = 26;
    }




    letterAudio.currentTime = 0;
    letterAudio.play();
}

function val1_2Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val1_2 != 26) {
        val1_2++;
    }
    if (Y > 0 && val1_2 != 1) {
        val1_2--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}

function val1_3Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val1_3 != 26) {
        val1_3++;
    }
    if (Y > 0 && val1_3 != 1) {
        val1_3--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}


function createName2WithSound(){
    clickAudio.currentTime = 0;
    clickAudio.play();
    createName2();
}



function createName2() {

    empty2.addEventListener('wheel', createName2);

    empty2.innerHTML = `
    <img id="letter2_1" src="${letters[val2_1]}" alt="">
    <img id="letter2_2" src="${letters[val2_2]}" alt="">
    <img id="letter2_3" src="${letters[val2_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    let letter2_1 = document.getElementById('letter2_1');
    let letter2_2 = document.getElementById('letter2_2');
    let letter2_3 = document.getElementById('letter2_3');
    letter2_1.addEventListener('wheel', val2_1Increment);
    letter2_2.addEventListener('wheel', val2_2Increment);
    letter2_3.addEventListener('wheel', val2_3Increment);

}

function val2_1Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val2_1 != 26) {
        val2_1++;
    }
    if (Y > 0 && val2_1 != 1) {
        val2_1--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}

function val2_2Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val2_2 != 26) {
        val2_2++;
    }
    if (Y > 0 && val2_2 != 1) {
        val2_2--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}

function val2_3Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val2_3 != 26) {
        val2_3++;
    }
    if (Y > 0 && val2_3 != 1) {
        val2_3--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}


function createName3WithSound(){
    clickAudio.currentTime = 0;
    clickAudio.play();
    createName3();
}



function createName3() {

    empty3.addEventListener('wheel', createName3);

    empty3.innerHTML = `
    <img id="letter3_1" src="${letters[val3_1]}" alt="">
    <img id="letter3_2" src="${letters[val3_2]}" alt="">
    <img id="letter3_3" src="${letters[val3_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    let letter3_1 = document.getElementById('letter3_1');
    let letter3_2 = document.getElementById('letter3_2');
    let letter3_3 = document.getElementById('letter3_3');
    letter3_1.addEventListener('wheel', val3_1Increment);
    letter3_2.addEventListener('wheel', val3_2Increment);
    letter3_3.addEventListener('wheel', val3_3Increment);

}

function val3_1Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val3_1 != 26) {
        val3_1++;
    }
    if (Y > 0 && val3_1 != 1) {
        val3_1--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();    
}

function val3_2Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val3_2 != 26) {
        val3_2++;
    }
    if (Y > 0 && val3_2 != 1) {
        val3_2--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}

function val3_3Increment(e) {
    Y = e.deltaY;
    console.log(Y);
    if (Y < 0 && val3_3 != 26) {
        val3_3++;
    }
    if (Y > 0 && val3_3 != 1) {
        val3_3--;
    }
    letterAudio.currentTime = 0;
    letterAudio.play();
}

function raymanStart() {

    clickAudio.currentTime = 0;
    clickAudio.play();

    startScreen.innerHTML = `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="raymanName" src="rayman_name.png" alt="">
    <div id="startButton">
        <img id="startFist" src="rayman_fist.png" alt="">
        <img id="S1" src="S1_Letter.png" alt="">
        <img id="T2" src="T2_Letter.png" alt="">
        <img id="A3" src="A3_Letter.png" alt="">
        <img id="R4" src="R4_Letter.png" alt="">
        <img id="T5" src="T5_Letter.png" alt="">                
    </div>  
    `;
    let startButton = document.getElementById('startButton');
    startButton.addEventListener('click', ChooseAGame);

}


function raymanStart2() {

    clickAudio.currentTime = 0;
    clickAudio.play();

    startScreen.innerHTML = `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="raymanName" src="rayman_name.png" alt="">
    <div id="startButton">
        <img id="startFist" src="rayman_fist.png" alt="">
        <img id="S1" src="S1_Letter.png" alt="">
        <img id="T2" src="T2_Letter.png" alt="">
        <img id="A3" src="A3_Letter.png" alt="">
        <img id="R4" src="R4_Letter.png" alt="">
        <img id="T5" src="T5_Letter.png" alt="">                
    </div>  
    `;
    let startButton = document.getElementById('startButton');
    startButton.addEventListener('click', ChooseAGameHistory);

}


function ChooseAGameHistory() {

    clickAudio.currentTime = 0;
    clickAudio.play();

    startScreen.innerHTML = `
    <img id="spinBackground" src="FND1.png" alt="">
    <div id=chooseAGameDIV>
    <img id="chooseAGame" src="chooseAGame.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty1">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty2">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="emptyDIV" id="empty3">  
    <span id="emptyFist"><img src="rayman_fist.png" alt=""></span>
    <img class="empty" src="Empty.png" alt=""> 
    </div>
    <div class="pageTwoReturnDIV">
    <span id="smallReturnFist"><img src="rayman_fist.png" alt=""></span>
    <img id="pageTwoReturn" src="return.png" alt=""> 
    </div>
    <div class="smallStartDIV">
    <span id="smallStartFist"><img src="rayman_fist.png" alt=""></span>
    <img id="smallStart" src="small_start.png" alt=""> 
    </div>
    `;


    if (val1_1 != 1 || val1_2 != 1 || val1_3 != 1) {


        empty1.innerHTML = `
    <img id="letter1_1" src="${letters[val1_1]}" alt="">
    <img id="letter1_2" src="${letters[val1_2]}" alt="">
    <img id="letter1_3" src="${letters[val1_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    }

    if (val2_1 != 1 || val2_2 != 1 || val2_3 != 1) {

        empty2.innerHTML = `
    <img id="letter2_1" src="${letters[val2_1]}" alt="">
    <img id="letter2_2" src="${letters[val2_2]}" alt="">
    <img id="letter2_3" src="${letters[val2_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    }
    if (val3_1 != 1 || val3_2 != 1 || val3_3 != 1) {

        empty3.innerHTML = `
    <img id="letter3_1" src="${letters[val3_1]}" alt="">
    <img id="letter3_2" src="${letters[val3_2]}" alt="">
    <img id="letter3_3" src="${letters[val3_3]}" alt="">
    <img class="specs" src="specs.png" alt=""> 
    `;

    }



    let chooseAGameReturn = document.getElementById('pageTwoReturn');
    chooseAGameReturn.addEventListener('click', raymanStart2);



    empty1.addEventListener('click', createName1WithSound);
    empty1.addEventListener('wheel', createName1);


    empty2.addEventListener('click', createName2WithSound);
    empty2.addEventListener('wheel', createName2);


    empty3.addEventListener('click', createName3WithSound);
    empty3.addEventListener('wheel', createName3);
}


let song = document.getElementById('song');
let toggle = document.getElementById('audioToggle');

let letterAudio = document.getElementById('letterChangeAudio');
let clickAudio = document.getElementById('clickAudio');

function slideShow(){

    clickAudio.currentTime = 0;
    clickAudio.play();

    image1();
}

function image1(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image1" src="1.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image2, 3000);
}

function image2(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image2" src="2.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image3, 3000);
}

function image3(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image3" src="3.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image4, 3000);
}

function image4(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image4" src="4.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image5, 3000);
}

function image5(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image5" src="5.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image6, 3000);
}

function image6(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image6" src="6.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image7, 3000);
}

function image7(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image7" src="7.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image8, 3000);
}

function image8(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image8" src="8.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image9, 3000);
}

function image9(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image9" src="9.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image10, 3000);
}

function image10(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image10" src="10.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image11, 3000);
}

function image11(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image11" src="11.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image12, 3000);
}

function image12(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image12" src="12.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image13, 3000);
}

function image13(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image13" src="13.png" alt=""></img>
    </img>
    `    ;
    setTimeout(image14, 3000);
}

function image14(){
    startScreen.innerHTML =
    `
    <img id="spinBackground" src="FND1.png" alt="">
    <img id="image14" src="14.png" alt=""></img>
    </img>
    `    ;
    setTimeout(raymanStart, 3000);
}