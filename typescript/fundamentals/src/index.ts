let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published: boolean = true;
let level; // Any

// Tuples
const tuplesUser = (userName: string, userRaceNumber: number) => {
  let user: [string, number] = ['default', 0];
  const name = 0;
  const raceNumber = 1;

  user[name] = userName;
  user[raceNumber] = userRaceNumber;

  console.log('tuplesUser : user : ', user);
  return user;
}

const arrayBreaksTuple = tuplesUser('Evan', 13).push('Adds another value to array bound by length 2');
console.log('arrayBreaksTuple : ', arrayBreaksTuple);

// Enums
const enum Size { 
  Small, // 0
  Medium, // 1
  Large // 2
};

const enum TShirt {
  Small = 1,
  Medium, // 2
  Large // 3
};

const enum Bike {
  Small = '52',
  Medium = '54',
  Large = '56'
}

console.log(Size.Large, TShirt.Medium, Bike.Large);


const largeNumber = () => {
  let sales: number = 123_456_789;
  console.log('largeNumber : ', sales);
}

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => console.log(date)
};
