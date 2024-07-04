const nuevaTarea = document.querySelector('#nuevaTarea')
const total = document.querySelector('#Total')
const realizados = document.querySelector('#Realizadas')
const filas = document.querySelector('#Filas')
const btnAgregar = document.querySelector('#Agregar')

const listadoTareas = [
    {
        id:123456,
        tarea: 'Practicar js',
        estado: false
    },
    {
        id:123457,
        tarea: 'Practicar css',
        estado: true
    },
    {
        id:123458,
        tarea: 'Practicar html',
        estado: false
    }
]
function conteo(){
    const conteo = listadoTareas.filter(tarea => tarea.estado === true).length
    realizados.innerHTML = conteo
}
function Total() {
    let contador = listadoTareas.length
    total.innerHTML = contador
}

RenderListadoTareas = () =>{
    let html = ''
    for (let listado of listadoTareas){
        html += `<div class="col-3 text-center" style="color: ${listado.estado ? 'green; text-decoration:line-through;'  : 'black'};">
                <strong>${listado.id}</strong> 
            </div>
            <div class="col-3" style="color: ${listado.estado ? 'green ; text-decoration:line-through;' : 'black'};">
                ${listado.tarea}
            </div>
            <div class="col-1">
                <input type="checkbox" ${listado.estado ? 'checked' : ''} onchange="ActualizarEstado(${listado.id}, this.checked)">
            </div>
            <div class="col-3">
                <img class="icono" src="./assets/img/eliminar.png" alt="imagen deeliminar" onclick="Borrar(${listado.id})">

            </div>`   
}filas.innerHTML = html
Total()
conteo()
}

RenderListadoTareas()

btnAgregar.addEventListener('click',()=>{
    if (nuevaTarea.value.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: '¡El campo de tarea no puede estar vacío!',
        });
    } else {
    tarea = {id:Date.now(),tarea:nuevaTarea.value,estado:false}
    listadoTareas.push(tarea)
    nuevaTarea.value = ''
    RenderListadoTareas()

}})

function Borrar(id){
    const index = listadoTareas.findIndex(tarea => tarea.id === id)
    listadoTareas.splice(index,1)
    RenderListadoTareas()

}

function ActualizarEstado(id,estado){
    const index = listadoTareas.findIndex(tarea => tarea.id === id)
    listadoTareas[index].estado = estado
    RenderListadoTareas()
}
