	var contenedor =  document.getElementById("contenedorjuego");

function menu(){


	var createDiv = document.createElement("DIV");
	createDiv.setAttribute("id", "contenedorchico");

	 var content1 = document.createElement("H2");
	 content1.setAttribute("class", "h2-play");
	 var text1 = document.createTextNode("ROAD BLOCKS");
	 content1.appendChild(text1);
	 createDiv.appendChild(content1);

	 var content2 = document.createElement("BUTTON");
	 content2.setAttribute("class", "boton");
	 content2.setAttribute("id", "star");
	 content2.setAttribute("onclick", "Play(this)");
	 var text2 = document.createTextNode("START GAME");
	 content2.appendChild(text2);
	 createDiv.appendChild(content2);

	 var content3 = document.createElement("BUTTON");
	 content3.setAttribute("class", "boton");
	 content3.setAttribute("id", "instruccion");
	 content3.setAttribute("onclick", "Instruciones(this)");
	 var text3 = document.createTextNode("INSTRUCTIONS");
	 content3.appendChild(text3);
	 createDiv.appendChild(content3);

	 var content4 = document.createElement("BUTTON");
	 content4.setAttribute("class", "boton");
	 content4.setAttribute("id", "credit");
	 content4.setAttribute("onclick", "Creditos(this)");
	 var text4 = document.createTextNode("CREDITS");
	 content4.appendChild(text4);
	 createDiv.appendChild(content4);

	var tuerca1 = document.createElement("DIV");
	tuerca1.setAttribute("id", "uno");
	tuerca1.setAttribute("class", "tuerca");
	contenedor.appendChild(tuerca1);

	var tuerca2 = document.createElement("DIV");
	tuerca2.setAttribute("id", "dos");
	tuerca2.setAttribute("class", "tuerca");
	contenedor.appendChild(tuerca2);

	var tuerca3 = document.createElement("DIV");
	tuerca3.setAttribute("id", "tres");
	tuerca3.setAttribute("class", "tuerca");
	contenedor.appendChild(tuerca3);

	var tuerca4 = document.createElement("DIV");
	tuerca4.setAttribute("id", "cuatro");
	tuerca4.setAttribute("class", "tuerca");
	contenedor.appendChild(tuerca4);

	contenedor.appendChild(createDiv);

}
menu();

function Volver(x){
	console.log(x.parentNode);
	var parent = x.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");	

	menu();
}

function Instruciones(x){
	var parent = x.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");	

	var content = document.createElement("DIV");
	content.setAttribute("id", "instrucciones");

	var title = document.createElement("H2");
	title.setAttribute("class", "h2-play");
	var textoinstrucciones = document.createTextNode("INSTRUCTIONS");
	title.appendChild(textoinstrucciones);
	content.appendChild(title);

	var pasitos = document.createElement("P");
	pasitos.setAttribute("class", "pasitos");
	var texto3 = document.createTextNode("*Para jugar presiona las teclas direccionales. *Ganas si llegas a la puerta roja.");
	pasitos.appendChild(texto3);
	content.appendChild(pasitos);

	var createBoton = document.createElement("BUTTON");
	createBoton.setAttribute("class", "boton");
	createBoton.setAttribute("onclick", "Volver(this)");
	var text = document.createTextNode("Menu");	
	createBoton.appendChild(text);
	content.appendChild(createBoton);

	contenedor.appendChild(content);

}

function Creditos(x){
	var parent = x.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");	

	var content = document.createElement("DIV");
	content.setAttribute("id", "creditos");

	var title = document.createElement("H2");
	title.setAttribute("class", "h2-play");
	var textoinstrucciones = document.createTextNode("CREDITS");
	title.appendChild(textoinstrucciones);
	content.appendChild(title);

	var pasitos = document.createElement("P");
	pasitos.setAttribute("class", "pasitos");
	var texto3 = document.createTextNode("Kely Estefani Añamuro Huamani - Gladys Yovana Mamani Camaticona");
	pasitos.appendChild(texto3);
	content.appendChild(pasitos);

	var createBoton = document.createElement("BUTTON");
	createBoton.setAttribute("class", "boton");
	createBoton.setAttribute("onclick", "Volver(this)");
	var text = document.createTextNode("Menu");	
	createBoton.appendChild(text);
	content.appendChild(createBoton);
	

	contenedor.appendChild(content);
}

function VolverMenu(x){
	var y = x.parentNode;
	var parent =y.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");	

	menu();
}

function Play(x){
	var y = x.parentNode;
	var parent = y.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");	

	var gnral = document.getElementById("juego");
	var divBig = document.createElement("DIV");
	divBig.setAttribute("class", "divBig");

	var titleRB = document.createElement("H2");
	titleRB.setAttribute("class", "h2-play");
	var textRB = document.createTextNode("Road Blocks");
	titleRB.appendChild(textRB);
	divBig.appendChild(titleRB);

	var maps = document.createElement("DIV");
	maps.setAttribute("id", "maps");
	var tabla = document.createElement("TABLE");
	tabla.setAttribute("id", "tabla");


	var mapa=[  "*************************************************",
				"*_______________________________________________*",
				"*_______________________________________________*",
				"*______**o________***________________**W________*",
				"*_________________***_________________*_________*",
				"*_________________*______________*______________*",
				"*_________________*_____________________*_______*",
				"*____*__*_____________________*___*_____*_______*",
				"*_____*_*____________________****_*_____________*",
				"*_____*_________________________________*_______*",
				"*______________________________________**_______*",
				"*________________________**____________**_______*",
				"*_________________________*_____________________*",
				"*_____________**_*_______***____________________*",
				"*_____________***_______________________________*",
				"*_____________**__________________**____________*",
				"*______**_________________________**____________*",
				"*______**_________________________*_____________*",
				"*________*____________**________________________*",
				"*____________________***________________________*",
				"*___________________*_**________________________*",
				"*_______________________________________________*",
				"*************************************************"];

for(var i = 0; i<mapa.length;i++){
    var string = mapa[i].split("");
    var TR = document.createElement("tr");

    for(var j =0; j<string.length; j++){
        var TD = document.createElement("td");
        TD.setAttribute("id", i+","+j);

        var text = document.createTextNode(string[j]);
        TD.appendChild(text);
        TR.appendChild(TD);

        if(string[j]=="*"){
            TD.setAttribute("class", "negro");
        }else if(string[j]=="_"){
            TD.setAttribute("class", "blanco");
        }else if(string[j]=="W"){
            TD.setAttribute("class", "final");
        }else{
            TD.setAttribute("class", "inicio");
            var crearMovil = document.createElement("div");
            crearMovil.setAttribute("id", "redondo");
            TD.appendChild(crearMovil);
        }
    }
    tabla.appendChild(TR);
}

	maps.appendChild(tabla);
	divBig.appendChild(maps);
	gnral.appendChild(divBig);
	contenedor.appendChild(gnral);
}

window.onload=function(){
    document.onkeydown=desplazar;
};

function desplazar(objeto){
    var tecla = objeto.which; //Reconoce la tecla del teclado.
    var tag_padre = document.getElementById("redondo").parentNode.id;
    var separa = tag_padre.split(",");

 	var arriba = (parseInt(separa[0]) - 1)+ ","+separa[1];
	var abajo = (parseInt(separa[0])+1)+","+separa[1];
	var derecha = separa[0]+ "," + (parseInt(separa[1])+1);
	var izquierda = separa[0]+","+(parseInt(separa[1])-1);   

    var valorArriba = document.getElementById(arriba).textContent;
    var valorAbajo = document.getElementById(abajo).textContent;
    var valorDerecha = document.getElementById(derecha).textContent;
    var valorIzquierda = document.getElementById(izquierda).textContent;

        switch (tecla){

            case 37 :  
                while(valorIzquierda != "*"){
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);

                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(izquierda).appendChild(crearMovil); 
                }
                

            case 38 : 
                if (valorArriba != "*") {
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);

                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(arriba).appendChild(crearMovil);
                }
                break;

            case 39 :  
                if (valorDerecha!= "*") {
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);

                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(derecha).appendChild(crearMovil);
                }
                break;

            case 40 : 
                if (valorAbajo != "*") {
                    var contenido = document.getElementById(tag_padre);
                    contenido.removeChild(contenido.childNodes[1]);

                    var crearMovil = document.createElement("div");
                    crearMovil.setAttribute("id", "redondo");
                    document.getElementById(abajo).appendChild(crearMovil);
                } 
                else if (valorAbajo == "W"){
                    alert("Ganaste");
                }
                break; 
            default:
                console.log("pulse otra tecla :(");
        }

    var x = setTimeout(function(){
    	desplazar(objeto);
    }, 10);
}
