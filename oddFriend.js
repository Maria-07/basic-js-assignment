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