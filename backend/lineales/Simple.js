class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
    }
}

class Simple {
    constructor(){
        this.primero = null
        this.ultimo = null
    }

    agregar(valor){
        const nodo = new Nodo(valor)
        if(this.primero == null){
            //Agregar a lista no vacia
            this.primero = nodo
            this.ultimo = nodo
        }
        else{
            //Agregar a lista no vacia
            var aux = this.primero
            while(true){
                if(aux.siguiente == null){
                    aux.siguiente = nodo
                    this.ultimo = nodo
                    break
                }
                aux = aux.siguiente
            }
        }
    }

    eliminar(valor){
       
    }

    acutualizar(valor, nuevo){
        
    }

    buscar(valor){
        var nodo = this.primero
        var posicion = 0
        while(nodo.valor != null){
            if(nodo.valor == valor){
                //Se encotro valor
                return {estado: true, posicion: posicion}
            }
            posicion++
            nodo = nodod.siguiente
        }
        return {estado: false}
    }

    cargar(){

    }

    guardar(){

    }
}