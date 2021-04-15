let starHollows = ['Lorelai', 'Rory', 'Luke', 'Lane', 'Kirk', 'Taylor'];
let removed = starHollows.splice(1);
console.log(removed)
let beverlyHillsGang = ['Brandon', 'Brenda', 'Dylan', 'Andrea', 'Steve', 'Kelly', 'Donna',
'David'];
const remove = beverlyHillsGang.splice(1, 2);
console.log(remove)
let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine'];
let detach = seinfeld.splice(-2, 1); 
console.log(detach)
let brooklynNineNine = ['Jake', 'Amy', 'Charles','Rosa', 'Captain Holt', 'Gina', 'Terry'];
let removedAndInserted = (brooklynNineNine.splice(5,1),'Hitchcock', 'Scully');
console.log(removedAndInserted)
let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe'];
let insertedOnly = (friends.splice(1,1),"Gunther", 'Carol', 'Susan')
console.log(insertedOnly)