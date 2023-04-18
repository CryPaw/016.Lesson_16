function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateKey(length, characters){
    let key = '';
    for (let i = 1; i <= length; i++) {
         key = key + characters[getRandomIntInclusive(0, characters.length-1)];
    }
    return key;
}


alert(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));