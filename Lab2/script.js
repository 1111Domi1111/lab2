var box1 = document.getElementById("box1");
t1 = box1.innerText;
var box2 = document.getElementById("box2");
t2 = box2.innerText;
box2.innerText = t1;
box1.innerText = t2;
console.log(t2);

//circle

var R = 3;
var S = R * R * 3.14;
var body = document.getElementById("circle");
body.innerText = S;


//numbers

function gfg_Run() {
    var inputF = document.getElementById("numbers").value;
    var n = 0;

    //inputF.value = "textValue";
    var numbers = inputF.split(" ");
    for (var i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i]) == 10) {
            n++;
        }
    }
    alert(n);
    setCookie("number", n);
}

//set cookie

function setCookie(name, value) {
    document.cookie = name + "=" + value;
    alert(document.cookie); //( unescape ( results[2] ) );   
}

function check_Cookie(cookie_name) {
    document.getElementById("form").style.display = "none";
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results) {
        if (confirm('Delete cookies?')) {
            var cookie_date = new Date();  // Текущая дата и время
            cookie_date.setTime(cookie_date.getTime() - 1);
            document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
            document.getElementById("form").style.display = "block";
        } else {
            alert(cookie_name + " = " + unescape(results[2]) + "\n\nrefresh page")
        }
    }
    else
        return alert("empty")//null;
}

colour.onblur = function () {
    {
        var col = document.getElementById("colour").value
        document.getElementById("bl2").style.backgroundColor = col;
        localStorage.setItem("colour", col)
        console.log(localStorage.getItem("colour"));
    };
}

function check_Colour() {
    var col = localStorage.getItem("colour");
    document.getElementById("bl2").style.backgroundColor = col;
}

//5

function formSeek() {
    document.getElementById("dazaq").style.display = "block";
    localStorage.setItem("visible", "block")
}

function formHide() {
    var v = localStorage.getItem("visible")
    var r = localStorage.getItem("textActual")
    var c = localStorage.getItem("backColor")

    if (r) {
        document.getElementById("field").innerText = r;
    }

    if (c != "null") {
        document.getElementById("right_block").style.backgroundColor = c;
    }

    if (v != "null") {
        document.getElementById("dazaq").style.display = "none";

        localStorage.setItem("visible", "none")
    }
    else {

        document.getElementById("dazaq").style.display = v;
        localStorage.setItem("visible", v)
    }
    if (!v) {
        document.getElementById("colorButton").style.visibility = "hidden";
    }
    else {
        document.getElementById("colorButton").style.visibility = "visible";
    }
}

function textChanger() {
    var inputF = document.getElementById("dazaq1").value;
    if (inputF != null) {
        var parent = document.getElementById("field").innerText;
        localStorage.setItem("textPrev", parent)
        document.getElementById("field").innerText = inputF;
        localStorage.setItem("textActual", inputF)
        localStorage.setItem("colorButton", 'visible')
    }
    getRandomColor();
}

function textReverser() {
    document.getElementById("field").innerText = localStorage.getItem("textPrev");
    localStorage.setItem("textPrev", localStorage.getItem("textActual"))
    localStorage.setItem("textActual", document.getElementById("field").innerText)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("right_block").style.backgroundColor = color;
    localStorage.setItem("backColor", color)
}