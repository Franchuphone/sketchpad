function addResetBtn() {
    const resetBtn = document.createElement( "button" );
    const resetDiv = document.createElement( "div" );
    boxContainer.parentElement.appendChild( resetDiv );
    resetDiv.appendChild( resetBtn );
    designResetBtn( resetDiv, resetBtn );
    return resetBtn;
}

function boxNumberBtn() {
    let boxNumber = prompt( "Enter a number between 1 and 200", "16" );
    return boxNumber;
}

function createBox() {
    const box = document.createElement( "div" );
    boxContainer.appendChild( box );
    return box;
}

function createGrid( boxNumber ) {
    if ( handlePromptChoice( boxNumber ) ) {
        removeResetBtn();
        removeContainerText();
        removeGrid();
        resetGrid( addResetBtn() );
        modifyInformation();
        for ( i = 1; i <= ( boxNumber * boxNumber ); i++ ) {
            designBox( createBox(), boxNumber );
        };
        designGrid();
    };
}

function designBox( box, boxNumber ) {
    const mathWidth = 100 / boxNumber;
    box.className = "box";
    box.style.setProperty( 'width', `calc(${ mathWidth }%)` );
    box.style.opacity = "0";
}

function designGrid() {
    boxContainer.className += " container-flex";
}

function designResetBtn( div, button ) {
    div.className = "container";
    button.className = "button bg-pastel-green border-round-2rem";
    button.textContent = "Reset Sketchpad";
}

function handlePromptChoice( boxNumber ) {
    if ( boxNumber === null ) return false;
    else if ( isNaN( boxNumber ) || boxNumber <= 0 || boxNumber > 200 ) {
        alert( "You don't have enter a number between 1 and 200" )
        createGrid( boxNumberBtn() );
        return false;
    } else return true;
}

// Click and drag version

function handlerColorBox( e ) {
    const boxes = document.querySelectorAll( "div.box" );
    e.preventDefault();
    if ( e.type == "mousedown" ) {
        boxes.forEach( box => {
            box.addEventListener( "mousemove", paintBox );
        } );
    } else {
        boxes.forEach( box => {
            box.removeEventListener( "mousemove", paintBox );
        } );
    }
}

function paintBox() {
    this.className += " bg-pastel-green";
    this.style.setProperty( "opacity", `calc( ${ this.style.opacity } + 0.1)` );
}

function paintGrid() {
    boxContainer.addEventListener( "mousedown", ( e ) => handlerColorBox( e ) );
    boxContainer.addEventListener( "mouseup", ( e ) => handlerColorBox( e ) );
}

// Mouseover version
//
// function paintBox( box ) {
//     box.className += " bg-pastel-green";
// }

// function paintGrid() {
//     const boxes = document.querySelectorAll( "div.box" );
//     boxes.forEach( box => {
//         box.addEventListener( "mousemove", () => paintBox( box ) );
//         box.addEventListener( "touchstart", ( e ) => {
//             e.preventDefault();
//             paintBox( box );
//             console.log( e )
//         } );
//         box.addEventListener( "touchmove", ( e ) => {
//             e.preventDefault();
//             paintBox( box );
//         } );
//     } );
// }

function modifyInformation() {
    const imgInformation = document.querySelectorAll( "img" );
    imgInformation.forEach( img => img.src = "images/arrow-down.svg" );
    document.querySelector( "div.font-information" ).textContent = "Click and hold to draw";
}

function removeContainerText() {
    const texts = document.querySelectorAll( "div.container-text" );
    texts.forEach( text => text.remove() );
}

function removeGrid() {
    const boxes = document.querySelectorAll( "div.box" );
    boxes.forEach( box => box.remove() );
}

function removeResetBtn() {
    const resetBtn = document.querySelectorAll( "button" )
    resetBtn.forEach( ( button ) => {
        if ( button.textContent == "Reset Sketchpad" ) {
            button.parentElement.remove();
        };
    } );
}

function resetGrid( resetBtn ) {
    resetBtn.addEventListener( "click", () => {
        const boxes = document.querySelectorAll( "div.box" );
        boxes.forEach( box => box.className = "box bg-pastel-blue" );
    } );
}

const boxContainer = document.querySelector( "div.container.border-grey" )
const tilesBtn = document.querySelector( "button" );

tilesBtn.addEventListener( "click", () => {
    createGrid( boxNumberBtn() );
    paintGrid();
} );
