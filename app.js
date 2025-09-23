// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear array para almacenar los nombres 
let amigosRegistrados = [];


//Implemenar funcion para agregar amigos
function agregarAmigos() {
    let elementoHTML = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    let numeroDeUsuario = parseInt(document.getElementById("amigo").value);
    
        // Paso 2: Validar que el campo no esté vacío
    if (nombre === '') {
        alert( "Por favor, escribe un nombre válido");
        input.focus();
        return;
    }

        // Paso 3: Agregar el nombre al array
        listaAmigos.push(nombre);

        
}

//Actualizar la lista visual
function actualizarListaVisual() {
    const listaHTML = document.getElementById('listaNombres');
    
    // Si no hay amigos, mostrar mensaje vacío
    if (listaAmigos.length === 0) {
        listaHTML.innerHTML = '<li class="empty-state">Aún no hay amigos en la lista</li>';
        return;
    }

        // Crear elementos li para cada amigo
    listaHTML.innerHTML = ''; // Limpiar lista anterior
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${index + 1}. ${amigo}</span>
            <small>👤</small>
        `;
        listaHTML.appendChild(li);
    });
}

//Sorteo de nombres
function sortearAmigo() {
    // Ocultar resultado anterior si existe
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
}



        // Paso 4: Actualizar la interfaz
        actualizarListaVisual();
        sortearAmigo();
        

