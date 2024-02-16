
function calculatePentagonArea(){
    const pere = getInputValueById('pentagon-pere');
    console.log('Pere :', pere);

    const base = getInputValueById('pentagon-base');
    console.log('Base :', base);

    const area = 0.5 * pere * base;
    console.log(area);

    setInnerTextById('pentagon-area', area);
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