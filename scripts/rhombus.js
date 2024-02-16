
function calculateRhombusArea(){
    const distance1 = getInputValueById('rhombus-distance1');
    console.log('Distance1 :', distance1);

    const distance2 = getInputValueById('rhombus-distance2');
    console.log('Distance2 :', distance2);

    const area = 0.5 * distance1 *distance2;
    console.log(area);

    setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    //console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}