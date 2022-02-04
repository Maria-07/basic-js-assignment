// problem 1 : Ana To Vori

function anaToVori(ana) {
    if (typeof ana != 'number') {
        console.log('Please enter a valid number !');
    } else {
        return ana / 16;
    }
}

var vori = anaToVori(32);
console.log(vori);