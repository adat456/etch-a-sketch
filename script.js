const clickBtn = document.querySelector(`.click-btn`);
const arrowBtn = document.querySelector(`.arrow-btn`);
const hoverBtn = document.querySelector(`.hover-btn`);

const gridField = document.querySelector(`.grid-field`);
const submitFld = document.querySelector(`#numTracks`);
const submitBtn = document.querySelector(`#submit-btn`);


// (1) create grid tracks and grid squares in grid field
// global scope variable can be accessed from within functions
let numTracks = 0;

const getGridTracks = function() {
    // stores input into global variable for other functions to access
    +submitFld.value > 0 ? numTracks = submitFld.value : alert(`Please submit a positive integer.`);

    return numTracks; 
};

const setGridTracks = function(numTracks) {
    // creates auto-sized tracks based on input
    gridField.style.gridTemplate = `repeat(${numTracks}, 1fr) / repeat(${numTracks}, 1fr)`;
};

const createGridSquares = function(numTracks) {
    let html = ``;
    // template literal evaluates expressions for height and width
    const gridSquare = "<div style=`height: ${gridField.style.height/numTracks}, width: ${gridField.style.width/numTracks}`></div>";

    // returned string consists of the number of grid squares multiplied by the length of the grid square HTML string
    let gridhtml = html.padEnd(((numTracks*numTracks)*gridSquare.length), gridSquare);

    gridField.innerHTML = gridhtml;
};

submitBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    getGridTracks();
    setGridTracks(numTracks);
    createGridSquares(numTracks);
});











