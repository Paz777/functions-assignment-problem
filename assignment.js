const sayHello1 = () => 'Hi Georgey';

const sayHello2 = (name, greet = 'hello') => console.log(greet + ' ' + name);

const sayHello3 = name => 'Hi ' + name;

const checkInput = (wordsHandler, ...words) => {
  let isEmpty = false;
  for (const word of words) {
    if (!word) {
      isEmpty = true;
    }
  }
  if (!isEmpty) {
    wordsHandler(words)
  }
};

const outputWords = (words) => {
  console.log(words);
}

console.log(sayHello1('Pappi1'));
sayHello2('Pappi2');
console.log(sayHello3('Pappi3'));

checkInput(() => {
  console.log("No words are empty");
}
  , 'Pappi', 'is', 'happy', 'today', 'yeah')