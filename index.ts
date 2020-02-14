

function creadorInserts( cadena: string){
    
    let arregloIni: string[]
    let tempSt: string
    let preArr: string;
    let listaArreglos: string[][] = []
    let resultado

    tempSt = cadena.replace(/\s/g, '*')
    preArr = tempSt.replace(/_/g, ' ')
    arregloIni = preArr.split('>')

    arregloIni.forEach(function (value )  {
        
        listaArreglos.push(value.split(' '))

    })

    listaArreglos.forEach( function (value) {

        resultado = `('${value[0]}','${value[1].replace(/\*/g, ' ')}','${value[2].replace(/\*/g, ' ')}','${value[3].replace(/\*/g, ' ')}','${value[4].replace(/\*/g, ' ')}'),`
        let par = document.createElement("P")
        par.innerText = resultado
        document.body.appendChild(par)
        
    })

    let show = document.getElementById('respuesta')
    show.innerHTML = `Cantidad de filas creadas: ${listaArreglos.length.toString()}`
    
    
}

function EvalStr() {
    let obtenerCadena: string
    obtenerCadena = (<HTMLInputElement>document.getElementById('texto')).value
    creadorInserts( obtenerCadena )
}




