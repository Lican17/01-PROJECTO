console.log('hola')


/*
En el siguiente proyecto pondremos a prueba los conceptos vistos en clases. El ejercicio siguiente se debe resolver con los conceptos vistos en clases, deben subir en esta tarea el link de github y el link del proyecto deployado en el servidor que prefieran por ej. Netlify. Por lo tanto la información final que se solicita se debe mostrar en el documento html no en consola.

Enunciado: Simulación de una encuesta de satisfacción

Descripción: Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los clientes. Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:

1 significa "muy insatisfecho"
10 significa "muy satisfecho"
Las respuestas ya estan cargadas en el siguiente array, respuestas: [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]

Debes procesar las respuestas de la encuesta para obtener las siguientes métricas:

El promedio de satisfacción.
Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).
Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).
El porcentaje de clientes que están satisfechos e insatisfechos.
La calificación que se repitió más veces (moda).




*/

const encuestaRespuestas = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]
const seguimientoRespuestas = [0,0,0,0,0,0,0,0,0,0,0]
let clienteSatisfechoContador = 0
let clienteInsatisfechoContador = 0
//const sumatoriaCalificacionesEncuesta
//const promedioCalificacionesEncuesta 

/*
function calculoPorcentajeSatisfaccion(c){
    (clienteSatisfechoContador*100)/encuestaRespuestas.length
}
*/
console.log(seguimientoRespuestas)


const sumatoriaCalificacionesEncuesta = encuestaRespuestas.reduce((a,b)=> a + b, 0)
const promedioCalificacionesEncuesta = (encuestaRespuestas.reduce((a,b)=> a + b, 0))/encuestaRespuestas.length

for(let i=0 ; i<encuestaRespuestas.length ; i++){
    if(encuestaRespuestas[i]>=7){
        clienteSatisfechoContador++
    }else if(encuestaRespuestas[i]<=4){
        clienteInsatisfechoContador++
    }
    // console.log(encuestaRespuestas[i])
    seguimientoRespuestas[encuestaRespuestas[i]]++

}

//El porcentaje de clientes que están satisfechos e insatisfechos.
const porcentajeClientesSatisfechos = (clienteSatisfechoContador*100)/encuestaRespuestas.length
const porcentajeClientesInsatisfechos = (clienteSatisfechoContador*100)/encuestaRespuestas.length

//La calificación que se repitió más veces (moda).


console.log(encuestaRespuestas)

console.log(clienteSatisfechoContador)

console.log(clienteInsatisfechoContador)


//console.log(sumatoriaCalificacionesEncuesta)


console.log(promedioCalificacionesEncuesta)

console.log(seguimientoRespuestas)

console.log('La calificación que mas veces se repitio fue:');
//console.log(Math.max(seguimientoRespuestas))