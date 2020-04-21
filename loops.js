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

const init = () => {
  colorLoop();
};

init();
