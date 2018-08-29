const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat:', cats[0]);

const favoriteAnimal = 'cow, bear, dog, cat';
const favoriteAnimalArray = favoriteAnimal.split(','); //["cow", " bear", " dog", " cat"]
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join(' cow '); // print as 1 cow 2 cow 3 cow..
console.log('newNum', newNum);

// mini challenge


const palChecker = (word) => {
    const reverseWord = word.split('').reverse().join('');
    if (word === reverseWord) {
        console.log(`${word} IS a palindrome`);
    } else {
        console.log(`${word} is NOT a palindrome`);
    }
};

palChecker('mom');
palChecker('racecar');
palChecker('drink');