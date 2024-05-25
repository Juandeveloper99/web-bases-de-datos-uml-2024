//obtener los proyectos desde la API



fetch ('http://localhost:3000/proyectos')
.then(response => response.json())
.then(proyectos => {
//obtener el contenedor donde de debe mostrar los proyectos
const proyectosUl = document.getElementById('proyectos');
//Recorrer los proyectos
proyectos.forEach(proyecto => {
   //crear un Li
   const proyectoLI = document.createElement('li');
   //agregar enlace para el proyecto
   proyectoLI.innerHTML = `<a href = "proyecto/${proyecto.id}/actividades">
   ${proyecto.nombre}</a>`;
   //agregar el Li a ul
   proyectosUl.appendChild(proyectoLI);
});
});

//Store the projects in database taking the data from the form
const form = document.getElementById('agregar');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha_inicio = document.getElementById('fecha_inicio').value;
    const fecha_fin = document.getElementById('fecha_fin').value;
    const presupuesto = document.getElementById('presupuesto').value;
    const data = {
        nombre,
        descripcion,
        fecha_inicio,
        fecha_fin,
        presupuesto
    };
    console.log(data)
    fetch('http://localhost:3000/proyecto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(proyecto => {
        // Goto the projects page
        window.location.href = 'index.html';
    });
})
