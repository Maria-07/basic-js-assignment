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

// problem 2 : Panda Cost

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        console.log('Please Enter the valid number !');
    } else {
        var singaraPrice = 7;
        var somuchaPrice = 10;
        var jilapiPrice = 15;

        var singaraPriceTotal = parseInt(singaraQuantity) * singaraPrice;
        var somuchaPriceTotal = parseInt(somuchaQuantity) * somuchaPrice;
        var jilapiPriceTotal = parseInt(jilapiQuantity) * jilapiPrice;

        var TotalPrice = singaraPriceTotal + somuchaPriceTotal + jilapiPriceTotal;
        return TotalPrice;
    }
}

total = pandaCost(1, 2, 1);
console.log(total);


// problem 3 : Picnic Budget

function picnicBudget(peopleNumber) {
    if (typeof peopleNumber != 'number') {
        console.log('Please enter a valid number !');
    } else {
        if (parseInt(peopleNumber) <= 100) {
            return peopleNumber * 5000;
        } else if (parseInt(peopleNumber) > 100 && peopleNumber <= 200) {
            var extraMember = peopleNumber - 100;
            return 100 * 5000 + extraMember * 4000;
        } else if (parseInt(peopleNumber) > 200) {
            extraMember = peopleNumber - 200;
            return 100 * 5000 + 100 * 4000 + extraMember * 3000;
        }
    }
}

totalBudget = picnicBudget(205);
console.log(totalBudget);


// problem 4 : odd Friend Name

function oddFriend(friendName) {
    if (typeof friendName != 'object') {
        console.log('Please enter a valid array !');
    } else {
        for (let i = 0; i < friendName.length; i++) {
            if (friendName[i].length % 2 != 0) {
                return friendName[i];
            }
        }
    }
}

var names = ['shanjida', 'yuki', 'yan', 'maria', 'rifa', 'rahmana', 'saimaria', 'ami'];
var friendNames = oddFriend(names);
console.log(friendNames);