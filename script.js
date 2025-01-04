//variables

const games = document.querySelectorAll(".game");
const boxes = document.querySelectorAll(".box");
const turnCounter = document.querySelector(".turn");

let turn = "x";
let place = "all";
let last = null;

const game = {
    a1: document.querySelector(".game-a1"),
    a2: document.querySelector(".game-a2"),
    a3: document.querySelector(".game-a3"),
    b1: document.querySelector(".game-b1"),
    b2: document.querySelector(".game-b2"),
    b3: document.querySelector(".game-b3"),
    c1: document.querySelector(".game-c1"),
    c2: document.querySelector(".game-c2"),
    c3: document.querySelector(".game-c3")
}

const gameBox = {
    a1: document.querySelectorAll(".game-a1-box"),
    a2: document.querySelectorAll(".game-a2-box"),
    a3: document.querySelectorAll(".game-a3-box"),
    b1: document.querySelectorAll(".game-b1-box"),
    b2: document.querySelectorAll(".game-b2-box"),
    b3: document.querySelectorAll(".game-b3-box"),
    c1: document.querySelectorAll(".game-c1-box"),
    c2: document.querySelectorAll(".game-c2-box"),
    c3: document.querySelectorAll(".game-c3-box")
}

const box = {
    gamea1: 
        {boxa1: document.querySelector(".game-a1-box-a1"),
        boxa2: document.querySelector(".game-a1-box-a2"),
        boxa3: document.querySelector(".game-a1-box-a3"),
        boxb1: document.querySelector(".game-a1-box-b1"),
        boxb2: document.querySelector(".game-a1-box-b2"),
        boxb3: document.querySelector(".game-a1-box-b3"),
        boxc1: document.querySelector(".game-a1-box-c1"),
        boxc2: document.querySelector(".game-a1-box-c2"),
        boxc3: document.querySelector(".game-a1-box-c3")},
    gamea2:
        {boxa1: document.querySelector(".game-a2-box-a1"),
        boxa2: document.querySelector(".game-a2-box-a2"),
        boxa3: document.querySelector(".game-a2-box-a3"),
        boxb1: document.querySelector(".game-a2-box-b1"),
        boxb2: document.querySelector(".game-a2-box-b2"),
        boxb3: document.querySelector(".game-a2-box-b3"),
        boxc1: document.querySelector(".game-a2-box-c1"),
        boxc2: document.querySelector(".game-a2-box-c2"),
        boxc3: document.querySelector(".game-a2-box-c3")},
    gamea3: 
        {boxa1: document.querySelector(".game-a3-box-a1"),
        boxa2: document.querySelector(".game-a3-box-a2"),
        boxa3: document.querySelector(".game-a3-box-a3"),
        boxb1: document.querySelector(".game-a3-box-b1"),
        boxb2: document.querySelector(".game-a3-box-b2"),
        boxb3: document.querySelector(".game-a3-box-b3"),
        boxc1: document.querySelector(".game-a3-box-c1"),
        boxc2: document.querySelector(".game-a3-box-c2"),
        boxc3: document.querySelector(".game-a3-box-c3")},
    gameb1: 
        {boxa1: document.querySelector(".game-b1-box-a1"),
        boxa2: document.querySelector(".game-b1-box-a2"),
        boxa3: document.querySelector(".game-b1-box-a3"),
        boxb1: document.querySelector(".game-b1-box-b1"),
        boxb2: document.querySelector(".game-b1-box-b2"),
        boxb3: document.querySelector(".game-b1-box-b3"),
        boxc1: document.querySelector(".game-b1-box-c1"),
        boxc2: document.querySelector(".game-b1-box-c2"),
        boxc3: document.querySelector(".game-b1-box-c3")},
    gameb2: 
        {boxa1: document.querySelector(".game-b2-box-a1"),
        boxa2: document.querySelector(".game-b2-box-a2"),
        boxa3: document.querySelector(".game-b2-box-a3"),
        boxb1: document.querySelector(".game-b2-box-b1"),
        boxb2: document.querySelector(".game-b2-box-b2"),
        boxb3: document.querySelector(".game-b2-box-b3"),
        boxc1: document.querySelector(".game-b2-box-c1"),
        boxc2: document.querySelector(".game-b2-box-c2"),
        boxc3: document.querySelector(".game-b2-box-c3")},
    gameb3: 
        {boxa1: document.querySelector(".game-b3-box-a1"),
        boxa2: document.querySelector(".game-b3-box-a2"),
        boxa3: document.querySelector(".game-b3-box-a3"),
        boxb1: document.querySelector(".game-b3-box-b1"),
        boxb2: document.querySelector(".game-b3-box-b2"),
        boxb3: document.querySelector(".game-b3-box-b3"),
        boxc1: document.querySelector(".game-b3-box-c1"),
        boxc2: document.querySelector(".game-b3-box-c2"),
        boxc3: document.querySelector(".game-b3-box-c3")},
    gamec1: 
        {boxa1: document.querySelector(".game-c1-box-a1"),
        boxa2: document.querySelector(".game-c1-box-a2"),
        boxa3: document.querySelector(".game-c1-box-a3"),
        boxb1: document.querySelector(".game-c1-box-b1"),
        boxb2: document.querySelector(".game-c1-box-b2"),
        boxb3: document.querySelector(".game-c1-box-b3"),
        boxc1: document.querySelector(".game-c1-box-c1"),
        boxc2: document.querySelector(".game-c1-box-c2"),
        boxc3: document.querySelector(".game-c1-box-c3")},
    gamec2: 
        {boxa1: document.querySelector(".game-c2-box-a1"),
        boxa2: document.querySelector(".game-c2-box-a2"),
        boxa3: document.querySelector(".game-c2-box-a3"),
        boxb1: document.querySelector(".game-c2-box-b1"),
        boxb2: document.querySelector(".game-c2-box-b2"),
        boxb3: document.querySelector(".game-c2-box-b3"),
        boxc1: document.querySelector(".game-c2-box-c1"),
        boxc2: document.querySelector(".game-c2-box-c2"),
        boxc3: document.querySelector(".game-c2-box-c3")},
    gamec3: 
        {boxa1: document.querySelector(".game-c3-box-a1"),
        boxa2: document.querySelector(".game-c3-box-a2"),
        boxa3: document.querySelector(".game-c3-box-a3"),
        boxb1: document.querySelector(".game-c3-box-b1"),
        boxb2: document.querySelector(".game-c3-box-b2"),
        boxb3: document.querySelector(".game-c3-box-b3"),
        boxc1: document.querySelector(".game-c3-box-c1"),
        boxc2: document.querySelector(".game-c3-box-c2"),
        boxc3: document.querySelector(".game-c3-box-c3")},
}

let winner = {
    a1: "none",
    a2: "none",
    a3: "none",
    b1: "none",
    b2: "none",
    b3: "none",
    c1: "none",
    c2: "none",
    c3: "none"
}

const index = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

//next

let next = function() {
    games.forEach(e => {
        e.style.border = "solid var(--border) 5px";
        e.style.cursor = "not-allowed";
    })

    boxes.forEach(e => {
        e.style.color = "var(--pieces)";
    })
    
    if (last != null) {
        last.style.color = "var(--hl)";
    }

    checkWinners();

    if (place == "all") {
        games.forEach(e => {
            e.style.border = "solid var(--hl) 5px";
            e.style.cursor = "pointer";
        })
    } else if (winner[place] == "none") {
        reset(place);
    } else if (winner[place] != "none" || winner[place] == "draw") {
        AllExc();
    }

    if (turn == "x") {
        turnCounter.innerHTML = "X's turn"
    } else if (turn == "o") {
        turnCounter.innerHTML = "O's turn"
    }
}

let AllExc = function() {
    if (winner.a1 == "none") {
        reset("a1");
    }
    if (winner.a2 == "none") {
        reset("a2");
    }
    if (winner.a3 == "none") {
        reset("a3");
    }
    if (winner.b1 == "none") {
        reset("b1");
    }
    if (winner.b2 == "none") {
        reset("b2");
    }
    if (winner.b3 == "none") {
        reset("b3");
    }
    if (winner.c1 == "none") {
        reset("c1");
    }
    if (winner.c2 == "none") {
        reset("c2");
    }
    if (winner.c3 == "none") {
        reset("c3");
    }

    place = "all";
}

let reset = function(a) {
    game[a].style.border = "solid var(--hl) 5px";
    game[a].style.cursor = "pointer";
    gameBox[a].forEach(e => {
        if (e.innerHTML != "") {
            e.style.cursor = "not-allowed";
        }
    })
}


//listeners

let gameKey;
let boxKey;

for (let i = 0; i < 9; i++) {
    gameKey = index[i];
    
    for (let j = 0; j < 9; j++) {
        boxKey = index[j];

        box[`game${gameKey}`][`box${boxKey}`].addEventListener("click", (function(gameKey, boxKey) {
            return function() {
                if ((place == gameKey || place == "all") && winner[gameKey] == "none" && box[`game${gameKey}`][`box${boxKey}`].innerHTML == "") {
                    if (turn == "x") {
                        box[`game${gameKey}`][`box${boxKey}`].innerHTML = "X";
                        turn = "o";
                    } else if (turn == "o") {
                        box[`game${gameKey}`][`box${boxKey}`].innerHTML = "O";
                        turn = "x";
                    }
                    box[`game${gameKey}`][`box${boxKey}`].style.cursor = "not-allowed";
                    last = box[`game${gameKey}`][`box${boxKey}`];
                    place = boxKey;
                    next();
                }
            }
        })(gameKey, boxKey))
    }
}


//game winners

const stripes = {
    gamea1:
        {ha1a3: document.querySelector(".stripe-a1-a1a3"),
        hb1b3: document.querySelector(".stripe-a1-b1b3"),
        hc1c3: document.querySelector(".stripe-a1-c1c3"),
        va1c1: document.querySelector(".stripe-a1-a1c1"),
        va2c2: document.querySelector(".stripe-a1-a2c2"),
        va3c3: document.querySelector(".stripe-a1-a3c3"),
        da1c3: document.querySelector(".stripe-a1-a1c3"),
        da3c1: document.querySelector(".stripe-a1-a3c1")},
    gamea2:
        {ha1a3: document.querySelector(".stripe-a2-a1a3"),
        hb1b3: document.querySelector(".stripe-a2-b1b3"),
        hc1c3: document.querySelector(".stripe-a2-c1c3"),
        va1c1: document.querySelector(".stripe-a2-a1c1"),
        va2c2: document.querySelector(".stripe-a2-a2c2"),
        va3c3: document.querySelector(".stripe-a2-a3c3"),
        da1c3: document.querySelector(".stripe-a2-a1c3"),
        da3c1: document.querySelector(".stripe-a2-a3c1")},
    gamea3: 
        {ha1a3: document.querySelector(".stripe-a3-a1a3"),
        hb1b3: document.querySelector(".stripe-a3-b1b3"),
        hc1c3: document.querySelector(".stripe-a3-c1c3"),
        va1c1: document.querySelector(".stripe-a3-a1c1"),
        va2c2: document.querySelector(".stripe-a3-a2c2"),
        va3c3: document.querySelector(".stripe-a3-a3c3"),
        da1c3: document.querySelector(".stripe-a3-a1c3"),
        da3c1: document.querySelector(".stripe-a3-a3c1")},
    gameb1: 
        {ha1a3: document.querySelector(".stripe-b1-a1a3"),
        hb1b3: document.querySelector(".stripe-b1-b1b3"),
        hc1c3: document.querySelector(".stripe-b1-c1c3"),
        va1c1: document.querySelector(".stripe-b1-a1c1"),
        va2c2: document.querySelector(".stripe-b1-a2c2"),
        va3c3: document.querySelector(".stripe-b1-a3c3"),
        da1c3: document.querySelector(".stripe-b1-a1c3"),
        da3c1: document.querySelector(".stripe-b1-a3c1")},
    gameb2: 
        {ha1a3: document.querySelector(".stripe-b2-a1a3"),
        hb1b3: document.querySelector(".stripe-b2-b1b3"),
        hc1c3: document.querySelector(".stripe-b2-c1c3"),
        va1c1: document.querySelector(".stripe-b2-a1c1"),
        va2c2: document.querySelector(".stripe-b2-a2c2"),
        va3c3: document.querySelector(".stripe-b2-a3c3"),
        da1c3: document.querySelector(".stripe-b2-a1c3"),
        da3c1: document.querySelector(".stripe-b2-a3c1")},
    gameb3: 
        {ha1a3: document.querySelector(".stripe-b3-a1a3"),
        hb1b3: document.querySelector(".stripe-b3-b1b3"),
        hc1c3: document.querySelector(".stripe-b3-c1c3"),
        va1c1: document.querySelector(".stripe-b3-a1c1"),
        va2c2: document.querySelector(".stripe-b3-a2c2"),
        va3c3: document.querySelector(".stripe-b3-a3c3"),
        da1c3: document.querySelector(".stripe-b3-a1c3"),
        da3c1: document.querySelector(".stripe-b3-a3c1")},
    gamec1: 
        {ha1a3: document.querySelector(".stripe-c1-a1a3"),
        hb1b3: document.querySelector(".stripe-c1-b1b3"),
        hc1c3: document.querySelector(".stripe-c1-c1c3"),
        va1c1: document.querySelector(".stripe-c1-a1c1"),
        va2c2: document.querySelector(".stripe-c1-a2c2"),
        va3c3: document.querySelector(".stripe-c1-a3c3"),
        da1c3: document.querySelector(".stripe-c1-a1c3"),
        da3c1: document.querySelector(".stripe-c1-a3c1")},
    gamec2: 
        {ha1a3: document.querySelector(".stripe-c2-a1a3"),
        hb1b3: document.querySelector(".stripe-c2-b1b3"),
        hc1c3: document.querySelector(".stripe-c2-c1c3"),
        va1c1: document.querySelector(".stripe-c2-a1c1"),
        va2c2: document.querySelector(".stripe-c2-a2c2"),
        va3c3: document.querySelector(".stripe-c2-a3c3"),
        da1c3: document.querySelector(".stripe-c2-a1c3"),
        da3c1: document.querySelector(".stripe-c2-a3c1")},
    gamec3: 
        {ha1a3: document.querySelector(".stripe-c3-a1a3"),
        hb1b3: document.querySelector(".stripe-c3-b1b3"),
        hc1c3: document.querySelector(".stripe-c3-c1c3"),
        va1c1: document.querySelector(".stripe-c3-a1c1"),
        va2c2: document.querySelector(".stripe-c3-a2c2"),
        va3c3: document.querySelector(".stripe-c3-a3c3"),
        da1c3: document.querySelector(".stripe-c3-a1c3"),
        da3c1: document.querySelector(".stripe-c3-a3c1")}
}

const cover = {
    a1: document.querySelector(".cover-a1"),
    a2: document.querySelector(".cover-a2"),
    a3: document.querySelector(".cover-a3"),
    b1: document.querySelector(".cover-b1"),
    b2: document.querySelector(".cover-b2"),
    b3: document.querySelector(".cover-b3"),
    c1: document.querySelector(".cover-c1"),
    c2: document.querySelector(".cover-c2"),
    c3: document.querySelector(".cover-c3")
}

const stripesEnd = {
    ha1a3: document.querySelector(".stripe-a1a3-end"),
    hb1b3: document.querySelector(".stripe-b1b3-end"),
    hc1c3: document.querySelector(".stripe-c1c3-end"),
    va1c1: document.querySelector(".stripe-a1c1-end"),
    va2c2: document.querySelector(".stripe-a2c2-end"),
    va3c3: document.querySelector(".stripe-a3c3-end"),
    da1c3: document.querySelector(".stripe-a1c3-end"),
    da3c1: document.querySelector(".stripe-a3c1-end")
}

let checkWinnersTarget;

let checkWinners = function() {
    for (let i = 0; i < 9; i++) {
        checkWinnersTarget = index[i];

        (function(checkWinnersTarget) {
            //ha1a3
            if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxa2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxa3.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].ha1a3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].ha1a3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].ha1a3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxa2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxa3.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].ha1a3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].ha1a3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].ha1a3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //hb1b3
            if (box[`game${checkWinnersTarget}`].boxb1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb3.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].hb1b3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].hb1b3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].hb1b3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxb1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb3.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].hb1b3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].hb1b3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].hb1b3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //hc1c3
            if (box[`game${checkWinnersTarget}`].boxc1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].hc1c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].hc1c3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].hc1c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxc1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].hc1c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].hc1c3.style.width = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].hc1c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //va1c1
            if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc1.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].va1c1.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va1c1.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va1c1.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc1.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].va1c1.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va1c1.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va1c1.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //va2c2
            if (box[`game${checkWinnersTarget}`].boxa2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc2.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].va2c2.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va2c2.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va2c2.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc2.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].va2c2.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va2c2.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va2c2.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //va3c3
            if (box[`game${checkWinnersTarget}`].boxa3.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb3.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].va3c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va3c3.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va3c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa3.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb3.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].va3c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].va3c3.style.height = "300px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].va3c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //da1c3
            if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].da1c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].da1c3.style.width = "400px";
                stripes[`game${checkWinnersTarget}`].da1c3.style.top = "155px";
                stripes[`game${checkWinnersTarget}`].da1c3.style.left = "-25px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].da1c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa1.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc3.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].da1c3.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].da1c3.style.width = "400px";
                stripes[`game${checkWinnersTarget}`].da1c3.style.top = "155px";
                stripes[`game${checkWinnersTarget}`].da1c3.style.left = "-25px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].da1c3.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
            //da3c1
            if (box[`game${checkWinnersTarget}`].boxa3.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "X" && box[`game${checkWinnersTarget}`].boxc1.innerHTML == "X") {
                stripes[`game${checkWinnersTarget}`].da3c1.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].da3c1.style.width = "400px";
                stripes[`game${checkWinnersTarget}`].da3c1.style.top = "150px";
                stripes[`game${checkWinnersTarget}`].da3c1.style.left = "-25px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "X";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].da3c1.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "x";
            } else if (box[`game${checkWinnersTarget}`].boxa3.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxb2.innerHTML == "O" && box[`game${checkWinnersTarget}`].boxc1.innerHTML == "O") {
                stripes[`game${checkWinnersTarget}`].da3c1.style.visibility = "visible";
                stripes[`game${checkWinnersTarget}`].da3c1.style.width = "400px";
                stripes[`game${checkWinnersTarget}`].da3c1.style.top = "150px";
                stripes[`game${checkWinnersTarget}`].da3c1.style.left = "-25px";
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "O";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                    stripes[`game${checkWinnersTarget}`].da3c1.style.opacity = 0.5;
                }, 500)
                winner[checkWinnersTarget] = "o";
            }
        })(checkWinnersTarget)
    }

    for (let i = 0; i < 9; i++) {
        checkWinnersTarget = index[i];

        (function(checkWinnersTarget) {
            //draw
            if (box[`game${checkWinnersTarget}`].boxa1.innerHTML != "" && box[`game${checkWinnersTarget}`].boxa2.innerHTML != "" && box[`game${checkWinnersTarget}`].boxa3.innerHTML != "" && box[`game${checkWinnersTarget}`].boxb1.innerHTML != "" && box[`game${checkWinnersTarget}`].boxb2.innerHTML != "" && box[`game${checkWinnersTarget}`].boxb3.innerHTML != "" && box[`game${checkWinnersTarget}`].boxc1.innerHTML != "" && box[`game${checkWinnersTarget}`].boxc2.innerHTML != "" && box[`game${checkWinnersTarget}`].boxc3.innerHTML != "" && winner[checkWinnersTarget] == "none") {
                setTimeout(() => {
                    cover[checkWinnersTarget].innerHTML = "DRAW";
                    cover[checkWinnersTarget].style.fontSize = "100px";
                    cover[checkWinnersTarget].style.color = "#fff";
                    cover[checkWinnersTarget].style.visibility = "visible";
                    cover[checkWinnersTarget].style.opacity = 1;
                    gameBox[checkWinnersTarget].forEach(e => {
                        e.style.opacity = 0.5;
                    })
                }, 500)
                winner[checkWinnersTarget] = "draw";
            }
        })(checkWinnersTarget)
    }

    // match winner

    //ha1a3
    if (winner.a1 == "x" && winner.a2 == "x" && winner.a3 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.ha1a3.style.visibility = "visible";
            stripesEnd.ha1a3.style.width = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a1 == "o" && winner.a2 == "o" && winner.a3 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.ha1a3.style.visibility = "visible";
            stripesEnd.ha1a3.style.width = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //hb1b3
    if (winner.b1 == "x" && winner.b2 == "x" && winner.b3 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.hb1b3.style.visibility = "visible";
            stripesEnd.hb1b3.style.width = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.b1 == "o" && winner.b2 == "o" && winner.b3 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.hb1b3.style.visibility = "visible";
            stripesEnd.hb1b3.style.width = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //hc1c3
    if (winner.c1 == "x" && winner.c2 == "x" && winner.c3 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.hc1c3.style.visibility = "visible";
            stripesEnd.hc1c3.style.width = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.c1 == "o" && winner.c2 == "o" && winner.c3 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.hc1c3.style.visibility = "visible";
            stripesEnd.hc1c3.style.width = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //va1c1
    if (winner.a1 == "x" && winner.b1 == "x" && winner.c1 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va1c1.style.visibility = "visible";
            stripesEnd.va1c1.style.height = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a1 == "o" && winner.b1 == "o" && winner.c1 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va1c1.style.visibility = "visible";
            stripesEnd.va1c1.style.height = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //va2c2
    if (winner.a2 == "x" && winner.b2 == "x" && winner.c2 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va2c2.style.visibility = "visible";
            stripesEnd.va2c2.style.height = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a2 == "o" && winner.b2 == "o" && winner.c2 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va2c2.style.visibility = "visible";
            stripesEnd.va2c2.style.height = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //va3c3
    if (winner.a3 == "x" && winner.b3 == "x" && winner.c3 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va3c3.style.visibility = "visible";
            stripesEnd.va3c3.style.height = "1000px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a3 == "o" && winner.b3 == "o" && winner.c3 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.va3c3.style.visibility = "visible";
            stripesEnd.va3c3.style.height = "1000px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //da1c3
    if (winner.a1 == "x" && winner.b2 == "x" && winner.c3 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.da1c3.style.visibility = "visible";
            stripesEnd.da1c3.style.width = "1400px";
            stripesEnd.da1c3.style.top = "490px";
            stripesEnd.da1c3.style.left = "-175px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a1 == "o" && winner.b2 == "o" && winner.c3 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.da1c3.style.visibility = "visible";
            stripesEnd.da1c3.style.width = "1400px";
            stripesEnd.da1c3.style.top = "490px";
            stripesEnd.da1c3.style.left = "-175px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }
    //da3c1
    if (winner.a3 == "x" && winner.b2 == "x" && winner.c1 == "x") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.da3c1.style.visibility = "visible";
            stripesEnd.da3c1.style.width = "1400px";
            stripesEnd.da3c1.style.top = "480px";
            stripesEnd.da3c1.style.left = "-170px";
            setTimeout(() => {
                matchWin("X");
            }, 500)
        }, 1000)
    } else if (winner.a3 == "o" && winner.b2 == "o" && winner.c1 == "o") {
        ann.style.visibility = "visible";
        setTimeout(() => {
            stripesEnd.da3c1.style.visibility = "visible";
            stripesEnd.da3c1.style.width = "1400px";
            stripesEnd.da3c1.style.top = "480px";
            stripesEnd.da3c1.style.left = "-170px";
            setTimeout(() => {
                matchWin("O");
            }, 500)
        }, 1000)
    }

    //draw
    if (winner.a1 != "none" && winner.a2 != "none" && winner.a3 != "none" && winner.b1 != "none" && winner.b2 != "none" && winner.b3 != "none" && winner.c1 != "none" && winner.c2 != "none" && winner.c3 != "none") {
        matchDraw();
    }
}


// rules & endgame

const btnRules = document.querySelector(".btn-rules");
const boxRules = document.querySelector(".box-rules");
const backRules = document.querySelector(".back-rules");
const ann = document.querySelector(".ann");
const main = document.querySelector("main");

btnRules.addEventListener("click", () => {
    turnCounter.style.opacity = 0.5;
    main.style.opacity = 0.5;
    btnRules.style.opacity = 0.5;
    ann.style.visibility = "visible";
    boxRules.style.visibility = "visible";
    boxRules.style.opacity = 1;
})

backRules.addEventListener("click", () => {
    turnCounter.style.opacity = 1;
    main.style.opacity = 1;
    btnRules.style.opacity = 1;
    ann.style.visibility = "hidden";
    boxRules.style.opacity = 0;
    boxRules.style.visibility = "hidden";
})

let matchDraw = function() {
    let winnerAr = Object.values(winner);
    let countWinsX;
    let countWinsO;
    
    for (let i = 0; i < 9; i++) {
        if (winnerAr[i] == "x") {
            countWinsX++;
        } else if (winner[i] == "o") {
            countWinsO++;
        }
    }

    if (countWinsX > countWinsO) {
        matchWin("x");
    } else if (countWinsX < countWinsO) {
        matchWin("o");
    } else if (countWinsO == countWinsX) {
        matchWin("Nobody");
    } 
}

let matchWin = function(a) {
    turnCounter.style.opacity = 0.5;
    main.style.opacity = 0.5;
    btnRules.style.opacity = 0.5;
    ann.innerHTML = `${a} wins!`;
    ann.style.visibility = "visible";
}

//run
next();