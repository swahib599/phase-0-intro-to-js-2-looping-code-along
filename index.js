function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }
    return names;
  }
  
  function tailsNeverFails() {
    let tailsCount = 0;
  
    while (Math.random() < 0.5) {
      tailsCount++;
    }
  
    return `You got ${tailsCount} tails in a row!`;
  }
  
  function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  