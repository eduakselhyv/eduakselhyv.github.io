let score = 0;
let passive = 0;
let modifier = 1;
let pcprice = 20;
let bcprice = 10;

function cookieclicked() {
    score += modifier;
    document.getElementById('score').innerHTML = score;
}

function bcc() {
    if (score >= bcprice) {
        score -= bcprice;
        modifier += 1;
        bcprice *= 1.5;
        bcprice = Math.round(bcprice);
    }
    document.getElementById('bcp').innerHTML = 'Price: ' + bcprice;
    document.getElementById('score').innerHTML = score;
}

function pcc() {
    if (score >= pcprice) {
        score -= pcprice;
        passive += 1;
        pcprice *= 1.5;
        pcprice = Math.round(pcprice);
    }
    document.getElementById('pcp').innerHTML = 'Price: ' + pcprice;
    document.getElementById('score').innerHTML = score;
}

function passivecookies() {
    setInterval(() => {
        score += passive;
        document.getElementById('score').innerHTML = score;
    }, 1000);
}

passivecookies()