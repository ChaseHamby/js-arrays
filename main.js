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

let animals = ['lion', 'coyote', 'wolf', 'elephant'];

const lastItem = animals.pop(); // elephant // removes last item
const firstItem = animals.shift(); // lion // removes first item
animals.push('bat'); // adds to the end
animals.unshift('tiger'); // adds to the beginning
console.log('animals:', animals);

// for loops
// 1. what is your starting value? 99% of the time it is 0
// 2. what is your stopping value? usually is something.length
// 3. how are you incrementing? +1 

for(let i = 0; i < animals.length; i++){
    // do something here
    console.log(animals[i]);
}