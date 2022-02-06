let spelarVal;
let datorVal = ["sten", "sax", "påse"];
var spelarPoäng = 0;
var datorPoäng = 0;
var klick = new Audio('/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/mixkit-typewriter-soft-click-1125.wav')
var plick = new Audio('/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/mixkit-mouse-click-close-1113.wav')

function random_item()
{  
return datorVal[Math.floor(Math.random() * datorVal.length)];
}

function sten() {
    spelarVal = "sten";
    klick.play();
    document.getElementById('spelarval').innerHTML = "Du valde sten!";  
    document.getElementById('spelarBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/rock.png"
    document.getElementById('datorBild').src = "";

    document.getElementById("datorval").innerHTML = "";
    document.getElementById('resultat').innerHTML = ""
 
    dataval = random_item(datorVal);
    setTimeout(() => {document.getElementById("datorval").innerHTML = "Datorn valde " + dataval + "!";}, 1500);    
    
    if(dataval === "sax"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du vann!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/scissors.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()
    }, 2000);
        spelarPoäng++;
    } else if (dataval === "påse"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du förlorar!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/paper-bag.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()
    }, 2000);
        datorPoäng++;
    } else {
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Oavgjort!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/rock.png";        
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()
    }, 2000);
    }
}

function sax() {
    spelarVal = "sax";
    klick.play();
    document.getElementById('spelarval').innerHTML = "Du valde sax!";
    document.getElementById('spelarBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/scissors.png"
    document.getElementById('datorBild').src = "";

    document.getElementById("datorval").innerHTML = "";
    document.getElementById('resultat').innerHTML = ""

    dataval = random_item(datorVal);
    setTimeout(() => {document.getElementById("datorval").innerHTML = "Datorn valde " + dataval + "!";}, 1500);   
    
    if(dataval === "påse"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du vann!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/paper-bag.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()}, 2000);       
        spelarPoäng++;
    } else if (dataval === "sten"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du förlorar!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/rock.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;}, 2000);
        datorPoäng++;
    } else {
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Oavgjort!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/scissors.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;        
        plick.play()}, 2000);
    }
}

function påse() {
    spelarVal = "påse";
    klick.play();
    document.getElementById('spelarval').innerHTML = "Du valde påse!";
    document.getElementById('spelarBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/paper-bag.png"
    document.getElementById('datorBild').src = "";

    document.getElementById("datorval").innerHTML = "";
    document.getElementById('resultat').innerHTML = ""

    dataval = random_item(datorVal);
    setTimeout(() => {document.getElementById("datorval").innerHTML = "Datorn valde " + dataval + "!";}, 2000);    
    
    if(dataval === "sten"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du vann!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/paper-bag.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()}, 2000);
        spelarPoäng++;
        
    } else if (dataval === "sax"){
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Du förlorar!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/scissors.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()}, 2000);
        datorPoäng++;
    } else {
        setTimeout(() => {document.getElementById('resultat').innerHTML = "Oavgjort!";
        document.getElementById('datorBild').src = "/Users/johanwarenmark/Documents/Hemsidor/Hemsida 4/Webb/StenSaxPåse/paper-bag.png";
        document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;
        document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;
        plick.play()}, 3000);
    }
    
}

function reset () {
    spelarPoäng = 0;
    klick.play();
    document.getElementById('spelarPoäng').innerHTML = "Spelare: " + spelarPoäng;

    datorPoäng = 0;
    document.getElementById('datorPoäng').innerHTML = "Dator: " + datorPoäng;

}




