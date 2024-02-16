function calculateParallelogramArea(){
    
    // Get Width of the Rectangle
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
    // Get Length of the Rectangle
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    //Calculate Rectangle Area
    const area = base * height;
    console.log(area);

    //Display Rectangle Area

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}