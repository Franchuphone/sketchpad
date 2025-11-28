function createBox() {
    const box = document.createElement( "div" );
    boxContainer.appendChild( box );
    return box;
}

function createGrid() {
    for ( i = 1; i <= 256; i++ ) {
        designBox( createBox() );
    }
    designGrid();
}

function designGrid() {
    boxContainer.className += " container-flex";
}

function designBox( box ) {
    box.className = "box bg-pastel-pink"
    // box.style.width = 
}

function paintBox( box ) {
    box.className += " bg-pastel-green";
}

function paintGrid() {
    const boxes = document.querySelectorAll( "div.box" );
    boxes.forEach( box => {
        box.addEventListener( "mouseover", () => paintBox( box ) )
    } );
}

function removeGrid() {
    const boxes = document.querySelectorAll( "div.box" );
    boxes.forEach( box => box.remove() );
}




const boxContainer = document.querySelector( "div.container.border-grey" )
const tilesBtn = document.querySelector( "button" );

tilesBtn.addEventListener( "click", () => {
    removeGrid();
    createGrid();
    paintGrid();
} );



createGrid();
paintGrid();