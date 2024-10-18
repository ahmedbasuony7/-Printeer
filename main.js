

function applySettings() {
    const type = document.getElementById("type").value; 
    const orientation = document.getElementById("orientation").value;
    const paperSize = document.getElementById("paperSize").value;
    const colorMode = document.getElementById("colorMode").value;
    const content = document.getElementById("content-preview");


    content.className = "content " + orientation;

    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@page { size: ${paperSize}; }`, styleSheet.cssRules.length);

    if (colorMode === "mono") {
        content.classList.add("mono");
    } else {
        content.classList.remove("mono");
    }

    document.querySelector('.print-preview').innerHTML =
        `     
            Previwe ofPrinting Details  
            <br> Printing operation type is  ${type} 
            <br> Printing Layout is   ${orientation} 
            <br> Pages Size is  ${paperSize} 
            <br> Printing Color is ${colorMode} 

        `;
        document.querySelector('.print-preview').style.marginTop = "70px"
        
    document.querySelector('.print-preview').style.display = 'block';
}

