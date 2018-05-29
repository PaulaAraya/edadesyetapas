//crear prompt para consultar edad
//crear variables para edad 
// If y Else para los resultados segun edad 

alert("Para saber las distinas etapas de la vida según edad pon aceptar");

/*let groupAge = [
    "toddler",
    "preschooler",
    "gradeschooler",
    "teenager",
    "young adult",
    "adult",
];*/

let age = prompt("¿cuantos años tienes?");

    if (age >= 1 && age <=2) {
    alert("tu edad pertenece a toddler");
    } else if (age >= 3 && age <= 4){
    alert("tu edad pertenece a preschooler");
    } else if (age >= 5 && age <= 11) {
    alert( "tu edad pertenece a gradeschooler");
    } else if (age >= 12 && age <= 17) {
    alert("tu edad pertenece a teenager");   
    } else if (age >= 18 && age <= 20) {
    alert("tu edad pertenece a young adult");    
    } else if (age >= 21) {
    alert("tu edad pertenece a adult");    
    } else {
    alert("error en digitar edad numerica, intentalo otra vez");  
    }
    
