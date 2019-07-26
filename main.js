// javascript commands
"user strict"

//variables
let turn= "x";
let computer = true;
board = [];
rows = []; 
cols = [];
diags = [];

alpha = 'abcdefghi';

// Events

document.getElementById("a").addEventListener("click",aa);
document.getElementById("b").addEventListener("click",bb);
document.getElementById("c").addEventListener("click",cc);
document.getElementById("d").addEventListener("click",dd);
document.getElementById("e").addEventListener("click",ee);
document.getElementById("f").addEventListener("click",ff);
document.getElementById("g").addEventListener("click",gg);
document.getElementById("h").addEventListener("click",hh);
document.getElementById("i").addEventListener("click",ii);
document.getElementById("tab").addEventListener("click",check);
document.getElementById("restart").addEventListener("click",re);
document.getElementById("computer").addEventListener("click",singlePlayer);
document.getElementById("player").addEventListener("click",multiPlayer);
// functions
// functions

function getBoard(){
    board = [];
    rows = []; 
    cols = [];
    diags = [];

    for(let i=0; i < 9; i++){
        board.push(document.getElementById(alpha.charAt(i)).innerHTML);
    }
    
    // store the rows in an array
    for(let i=0; i<9; i+=3){
    rows.push([document.getElementById(alpha.charAt(i)).innerHTML, document.getElementById(alpha.charAt(i+1)).innerHTML, document.getElementById(alpha.charAt(i+2)).innerHTML])
    }
    
    // store the columns
    for(let i=0; i<3; i++){
    cols.push([document.getElementById(alpha.charAt(i)).innerHTML, document.getElementById(alpha.charAt(i+3)).innerHTML, document.getElementById(alpha.charAt(i+6)).innerHTML])
    }
    
    // store the diagonals
    diags.push([document.getElementById(alpha.charAt(0)).innerHTML, document.getElementById(alpha.charAt(4)).innerHTML, document.getElementById(alpha.charAt(8)).innerHTML])
    diags.push([document.getElementById(alpha.charAt(2)).innerHTML, document.getElementById(alpha.charAt(4)).innerHTML, document.getElementById(alpha.charAt(6)).innerHTML])
    
    }
    
    
    
    // Returns a number corresponding to which empty cell will block the player from winning
    function smartMove(){
        getBoard();
        // recall that a board is laid out like this(for checking indicies)
        // 0 1 2
        // 3 4 5
        // 6 7 8
        
        // check rows for a smart move
        for(let i = 0; i < 3; i++){
            if(rows[i][0] == 'x' && rows[i][1]== 'x' && rows[i][2] == ''){
               return 2+3*i;
            } else if (rows[i][0] == 'x' && rows[i][1] == '' && rows[i][2]== 'x'){
              return 1+3*i;
            } else if (rows[i][0] == '' && rows[i][1] == 'x' && rows[i][2]== 'x'){
              return 3*i;
            }
        }
        
        // check columns for a smart move
        for(let i = 0; i < 3; i++){
            if(cols[i][0] == 'x' && cols[i][1]== 'x' && cols[i][2] == ''){
               return i + 6;
            } else if (cols[i][0] == 'x' && cols[i][1] == '' && cols[i][2]== 'x'){
             return i + 3;
            } else if (cols[i][0] == '' && cols[i][1] == 'x' && cols[i][2]== 'x'){
                return i;
            }
        }
        
        // check diagonals for a smart move
        for(let i = 0; i < 2; i++){
        if(diags[i][0] == 'x' && diags[i][1]== 'x' && diags[i][2] == ''){
            return 6 + 2*i;
        } else if (diags[i][0] == 'x' && diags[i][1] == '' && diags[i][2]== 'x'){
            return 4;
        } else if (diags[i][0] == '' && diags[i][1] == 'x' && diags[i][2]== 'x'){
            return 2*i;
            }
        }
        
        return -1;
    }
    

function aa(){
    if (document.getElementById("a").innerHTML == ""){
        document.getElementById("a").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
} 
function bb(){
    if (document.getElementById("b").innerHTML == ""){
        document.getElementById("b").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}
function cc(){
    if (document.getElementById("c").innerHTML == ""){
        document.getElementById("c").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}

function dd (){
    if (document.getElementById("d").innerHTML == ""){
        document.getElementById("d").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}
function ee (){
    if (document.getElementById("e").innerHTML == ""){
        document.getElementById("e").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}
function ff(){
    if (document.getElementById("f").innerHTML == ""){
        document.getElementById("f").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}
function gg (){
    if (document.getElementById("g").innerHTML == ""){
        document.getElementById("g").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}
function hh (){
    if (document.getElementById("h").innerHTML == ""){
        document.getElementById("h").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
        turn = "x";
        }
        ai2();
    }
}

function ii(){
    if (document.getElementById("i").innerHTML == ""){
        document.getElementById("i").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
        ai2();
    }
}

function check(){
    // check x
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('b').innerHTML== "x" && document.getElementById('c').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("c").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('d').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('f').innerHTML== "x"){
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('g').innerHTML== "x" && document.getElementById('h').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("g").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('d').innerHTML== "x" && document.getElementById('g').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('b').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('h').innerHTML== "x"){
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('c').innerHTML== "x" && document.getElementById('f').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('c').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('g').innerHTML== "x"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }

    // check o
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('b').innerHTML== "o" && document.getElementById('c').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("c").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('d').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('f').innerHTML== "o"){
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('g').innerHTML== "o" && document.getElementById('h').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("g").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('d').innerHTML== "o" && document.getElementById('g').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('b').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('h').innerHTML== "o"){
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('c').innerHTML== "o" && document.getElementById('f').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('c').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('g').innerHTML== "o"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }

    
        
    
    
}

function re(){
    turn = "x";
    document.getElementById("a").innerHTML="";
    document.getElementById("b").innerHTML="";
    document.getElementById("c").innerHTML="";
    document.getElementById("d").innerHTML="";
    document.getElementById("e").innerHTML="";
    document.getElementById("f").innerHTML="";
    document.getElementById("g").innerHTML="";
    document.getElementById("h").innerHTML="";
    document.getElementById("i").innerHTML="";
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("c").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "white";
    document.getElementById("e").style.backgroundColor = "white";
    document.getElementById("f").style.backgroundColor = "white";
    document.getElementById("g").style.backgroundColor = "white";
    document.getElementById("h").style.backgroundColor = "white";
    document.getElementById("i").style.backgroundColor = "white";
    
}

function singlePlayer(){
    computer = true;
}

function multiPlayer(){
    computer = false;
}

// use smartMove() to make a better AI function
function ai2(){
    if(computer == true){
        let dangerCell = smartMove();
        if (dangerCell == -1){
            ai();
        } else if (dangerCell == 0) {
            document.getElementById('a').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 1) {
            document.getElementById('b').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 2) {
            document.getElementById('c').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 3) {
            document.getElementById('d').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 4) {
            document.getElementById('e').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 5) {
            document.getElementById('f').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 6) {
            document.getElementById('g').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 7) {
            document.getElementById('h').innerHTML = 'o';
            turn = "x";
        } else if (dangerCell == 8) {
            document.getElementById('i').innerHTML = 'o';
            turn = "x";
        }
    }
}

function ai(){
        while(turn != "x"){
            let random = Math.floor(Math.random() * 9);
            if(random == 0 && document.getElementById("a").innerHTML == ""){
                document.getElementById("a").innerHTML= turn;
                turn = "x";
            }
            if(random == 1 && document.getElementById("b").innerHTML == ""){
                document.getElementById("b").innerHTML= turn;
                turn = "x";
            }
            if(random == 2 && document.getElementById("c").innerHTML == ""){
                document.getElementById("c").innerHTML= turn;
                turn = "x";
            }
            if(random == 3 && document.getElementById("d").innerHTML == ""){
                document.getElementById("d").innerHTML= turn;
                turn = "x";
            }
            if(random == 4 && document.getElementById("e").innerHTML == ""){
                document.getElementById("e").innerHTML= turn;
                turn = "x";
            }
            if(random == 5 && document.getElementById("f").innerHTML == ""){
                document.getElementById("f").innerHTML= turn;
                turn = "x";
            }
            if(random == 6 && document.getElementById("g").innerHTML == ""){
                document.getElementById("g").innerHTML= turn;
                turn = "x";
            }
            if(random == 7 && document.getElementById("h").innerHTML == ""){
                document.getElementById("h").innerHTML= turn;
                turn = "x";
            }
            if(random == 8 && document.getElementById("i").innerHTML == ""){
                document.getElementById("i").innerHTML= turn;
                turn = "x";
            }
            if(document.getElementById("a").innerHTML != "" && document.getElementById("b").innerHTML != "" && document.getElementById("c").innerHTML != "" && document.getElementById("d").innerHTML != "" && document.getElementById("e").innerHTML != "" && document.getElementById("f").innerHTML != "" && document.getElementById("g").innerHTML != "" && document.getElementById("h").innerHTML != "" && document.getElementById("i").innerHTML != ""){
                break;
            }
        }
}