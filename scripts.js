function comedia(){
    let edad = document.getElementById("edad").value;
    let comedia = document.getElementById("resultado");

    if(edad >13 && edad <=16){
        comedia.textContent = "1.Back to the future. 2.The Truman Show."
    }else{
        if(edad > 13 && edad >16){
                comedia.textContent = "1.Back to the future. 2.The Truman Show. 3.The wolf of street."
            }else{
        alert("Usted debe ser mayor a 13 años")
    }
    }
}
function crimen(){
    let edad = document.getElementById("edad").value;
    let crimen = document.getElementById("resultado");

    if(edad > 13 && edad <= 16){
        crimen.textContent = "1.El secreto de sus ojos.";
    }else{
        if(edad > 13 && edad > 16){
            crimen.textContent = "1.El secreto de sus ojos. 2.The Godfather."
        }else{
            alert("Usted debe ser mayor a 13 años")
        }
    }
}
function drama(){
    let edad = document.getElementById("edad").value;
    let drama = document.getElementById("resultado");

    if(edad >13 && edad <= 16){
        drama.textContent = "1.Casa blanca. 2.The Shawshank Redemption."
        }else{
            if(edad >13 && edad >16 ){
                drama.textContent = "1.Casa blanca. 2.The Shawshank Redemption. 3.Taxi driver";
            }else{
                alert("Usted debe ser mayor a 13 años");
            }
    }
}
function musical(){
    let edad = document.getElementById("edad").value;
    let musical = document.getElementById("resultado");

    if(edad >13 && edad <= 16){
        musical.textContent = "1.La La Land. 2.Los miserables"
    }else{
        if(edad >13 && edad >16){
            musical.textContent = "1.La La Land. 2.Los miserables. 3.The Rocky Horror Picture Show";
        }else{
            alert("Usted debe de ser mayor a 13 años");
        }
    }
}