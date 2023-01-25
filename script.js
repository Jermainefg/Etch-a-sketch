const container = document.querySelector('#container');
const grid = document.querySelector('grid')
const div = document.createElement('div');
const rows = document.getElementsByClassName('gridRow');
const cells = document.getElementsByClassName('cell');
const but = document.querySelector('#but');


div.classList.add('grid');
container.appendChild(div);

let cellNum;
let rowNum;
let n = 0;

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    colors()
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        div.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
function customGrid(gridNum){
    rowNum = gridNum;
    cellNum = gridNum;
    makeRows(rowNum); makeColumns(cellNum);
    colors();
}
 
function colors(){ for (const container of cells) {
    container.addEventListener('mouseover', e => {
    e.target.style.background = 'black';
  });}}

  function custom(){
      but.addEventListener('click', () => {
    customGrid(prompt("How big would you like this grid?")) 
  });}
   but.addEventListener('click', () =>{
    n = 1
   })
  switch(n){
    case 0:
        defaultGrid();
        console.log(n)
        break;
      
    case 1:
        custom() 
        console.log(n)
        break;
  }
  
  
