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

totalBudget = picnicBudget(200);
console.log(totalBudget);