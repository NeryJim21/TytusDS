class Seleccion{
    constructor(){
        this.arreglo = []
    }

    cargar(lista){
        lista.map(i =>{
            this.arreglo.push(i.a)
        })
    }

    ordenar(){
        var min, aux;console.log(i)
        for(var i = 0; i < this.arreglo.length; i++){
            min = i
            for(var j = i+1; j < this.arreglo.length; j++){
                if(this.arreglo[j] < this.arreglo[min]){
                    min = j
                }
            }
            aux = this.arreglo[i]
            this.arreglo[i] = this.arreglo[min]
            this.arreglo[min] = aux
        }
    }

    guardar(){

    }
}

//export default Seleccion

/*const ar = new Seleccion()
const str = '[{"a":10}, {"a":35}, {"a":4}, {"a":545}, {"a":6}, {"a":755}, {"a":80}]';

const obj = JSON.parse(str);

ar.cargar(obj)
ar.ordenar()

console.log(ar)*/