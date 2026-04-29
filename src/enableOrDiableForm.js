export function enableFormElements(){
    const shipCoordinateVerticle = document.querySelector('#ship-coordinates-verticle');
    const shipCoordinateHorizontal = document.querySelector('#ship-coordinates-horizontal');
    const shipDirectionInput = document.querySelector('#ship-direction-input');
    const submitBtn = document.querySelector('.submit-btn');

    shipCoordinateVerticle.disabled = false;
    shipCoordinateHorizontal.disabled = false;
    shipDirectionInput.disabled = false;
    submitBtn.disabled = false;
}
export function disableFormElements(){
    const shipCoordinateVerticle = document.querySelector('#ship-coordinates-verticle');
    const shipCoordinateHorizontal = document.querySelector('#ship-coordinates-horizontal');
    const shipDirectionInput = document.querySelector('#ship-direction-input');
    const submitBtn = document.querySelector('.submit-btn');

    shipCoordinateVerticle.disabled = true;
    shipCoordinateHorizontal.disabled = true;
    shipDirectionInput.disabled = true;
    submitBtn.disabled = true;
}