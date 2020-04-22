const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow', 'violet'];


const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    domString += `<h2>${colors[i]}</h2>`;
    // console.log(domString);
  }
   // return domString;
  console.log(domString);
};

const instructors = [
  { firstName: 'Luke', lastName: 'Lancaster'},
  { firstName: 'Michael', lastName: 'Clark' },
  { firstName: 'Matthew', lastName: 'Gill'},
];

const instructorLoop = () => {
  let domString = '';
  for (let i = 0; i <instructors.length; i++) {
    domString += `<div>`
    domString += 
    // console.log(`${instructors[i].firstName} ${instructors[i].lastName}`);
    domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
  }
  console.log(domString);
};


const init = () => {
  colorLoop();
  instructorLoop();
};

init();
