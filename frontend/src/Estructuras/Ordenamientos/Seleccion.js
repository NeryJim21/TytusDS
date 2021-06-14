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

export default Seleccion