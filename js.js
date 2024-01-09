let score = parseInt(localStorage.getItem('savedscore')) || 0;
let passive = parseInt(localStorage.getItem('savedpassive')) || 0;
let modifier = parseInt(localStorage.getItem('savedmodifier')) || 1;
let pcprice = parseInt(localStorage.getItem('savedpassiveprice')) || 20;
let bcprice = parseInt(localStorage.getItem('savedmodifierprice')) || 10;

document.getElementById('score').innerHTML = score;
document.getElementById('bcp').innerHTML = 'Price: ' + bcprice;
document.getElementById('pcp').innerHTML = 'Price: ' + pcprice;

function cookieclicked() {
    score += modifier;
    document.getElementById('score').innerHTML = score;
    localStorage.setItem("savedscore", score);
}

function bcc() {
    if (score >= bcprice) {
        score -= bcprice;
        modifier += 1;
        bcprice *= 1.5;
        bcprice = Math.round(bcprice);
        localStorage.setItem("savedmodifier", modifier);
        localStorage.setItem("savedmodifierprice", bcprice);
        localStorage.setItem("savedscore", score);
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
        localStorage.setItem("savedpassive", passive);
        localStorage.setItem("savedpassiveprice", pcprice);
        localStorage.setItem("savedscore", score);
    }
    document.getElementById('pcp').innerHTML = 'Price: ' + pcprice;
    document.getElementById('score').innerHTML = score;
}

function passivecookies() {
    setInterval(() => {
        score += passive;
        document.getElementById('score').innerHTML = score;
        localStorage.setItem("savedscore", score);
    }, 1000);
}

function reset() {
    localStorage.setItem("savedscore", 0);
    localStorage.setItem("savedpassive", 0);
    localStorage.setItem("savedmodifier", 1);
    localStorage.setItem("savedpassiveprice", 20);
    localStorage.setItem("savedmodifierprice", 10);

    score = 0;
    passive = 0;
    modifier = 1;
    pcprice = 20;
    bcprice = 10;

    document.getElementById('score').innerHTML = score;
    document.getElementById('bcp').innerHTML = 'Price: ' + bcprice;
    document.getElementById('pcp').innerHTML = 'Price: ' + pcprice;
}

passivecookies()