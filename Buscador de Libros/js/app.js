//selectores o variables
const Autor = document.querySelector('#autor');
const Edicion = document.querySelector('#edicion');
const Libro = document.querySelector('#libro');
const Isbn = document.querySelector('#ISBN');
const Categoria = document.querySelector('#categoria');

//crear el listado de las ediciones
const Ediciones = document.createElement('option');
const max = new Date().getFullYear();
//console.log(max);
const min = max - 60;

for(let i=max; i> min; i--){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#edicion').appendChild(option);
}

//datos que necesitamos para la busqueda
const datosBusqueda = {
    Autor: '',
    Edicion: '',
    Libro: '',
    Isbn: '',
    Categoria: ''
}

    //eventos
    document.addEventListener('DOMContentLoaded',() => {
        mostrarLibros(libros);
    });

    //event listener para el formulario

    Autor.addEventListener('input', e => {
        datosBusqueda.Autor = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarlibros();
    })
    Edicion.addEventListener('input',e =>{
        datosBusqueda.Edicion = Number (e.target.value);
        
        //console.log(datosBusqueda);
        filtrarlibros();
    })
    
    Libro.addEventListener('input',e =>{
        datosBusqueda.Libro = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarlibros();
    })
    
    Isbn.addEventListener('input',e =>{
        datosBusqueda.Isbn = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarlibros();
    })

    Categoria.addEventListener('input',e =>{
        datosBusqueda.Categoria = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarlibros();
    })


    function mostrarLibros(libros){
        limpiarHTML();
        
        const contenedor = document.querySelector('#resultado');

        //construir el HTML de los libros
        libros.forEach(libros => {
            const libroHTML = document.createElement('p');
            libroHTML.innerHTML = `
                <p>${libros.Autor} - ${libros.Libro} - ${libros.Edicion} - ${libros.ISBN} - ${libros.Categoria}</p>
            `;
            contenedor.appendChild(libroHTML);    
        });
        
    }

    function filtrarlibros(){
        const resultado = libros.filter(filtrarAutor).filter(filtrarEdicion).filter(filtrarLibro).filter(filtrarIsbn).filter(filtrarCategoria);
        //console.log(resultado);
        if(resultado.length){
            mostrarLibros(resultado);
        }else{
            noResultado();
        }
    }

function limpiarHTML() {
    //leer el elemento resultado

    const contenedor = document.querySelector('#resultado');

    //limpiar los resultados anteriores

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }

}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados para su busqueda'));
    document.querySelector('#resultado').appendChild(noResultado);
}


//aplicar los filtros
function filtrarAutor(libros) {
    if(datosBusqueda.Autor){
        return libros.Autor === datosBusqueda.Autor;
    }
    return libros;
}
function filtrarEdicion(libros) {
    if(datosBusqueda.Edicion){
        return libros.Edicion === datosBusqueda.Edicion;
    }
    return libros;
}
function filtrarLibro(libros) {
    if(datosBusqueda.Libro){
        return libros.Libro === datosBusqueda.Libro;
    }
    return libros;
}
function filtrarIsbn(libros) {
    if(datosBusqueda.Isbn){
        return libros.ISBN === datosBusqueda.Isbn;
    }
    return libros;
}
function filtrarCategoria(libros) {
    if(datosBusqueda.Categoria){
        return libros.Categoria === datosBusqueda.Categoria;
    }
    return libros;
}