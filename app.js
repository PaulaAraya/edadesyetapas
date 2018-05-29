//crear prompt para consultar edad
//crear variables para edad 
// If y Else para los resultados segun edad 

alert("Hola, para saber las distinas etapas de la vida según edad por aceptar");

/*let groupAge = [
    "toddler",
    "preschooler",
    "gradeschooler",
    "teenager",
    "young adult",
    "adult",
];*/

let age = prompt("¿cuantos años tienes?");

    if (1===age<=2) {
    alert("tu edad pertenece a toddler");
    } else if (4<=age<=3){
    alert("tu edad pertenece a preschooler");
    } else if (5<=age<=6) {
    alert( "tu edad pertenece a gradeschooler");
    } else if (17<=age<=18) {
    alert("tu edad pertenece a teenager");   z
    } else if (18<=age<=20) {
    alert("tu edad pertenece a young adult");    
    } else if (age>=21) {
    alert("tu edad pertenece a adult");    
    } else {
    alert("tu edad pertenece a error");  
    }
    
