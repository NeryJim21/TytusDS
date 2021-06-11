class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
    }
}

class Pila {
    constructor(){
        this.primero = null
        this.ultimo = null
    }

    agregar(valor){
        const nodo = new Nodo(valor)
        var aux = null
        if(this.primero == null){
            this.primero = this.ultimo = nodo
        }
        else{
            aux = this.primero
            this.primero = nodo
            nodo.siguiente = aux
            if(this.ultimo == null){
                this.ultimo = nodo
            }
        }
    }

    eliminar(){
        if(this.ultimo != null){
            var nodo = this.primero.siguiente
            if(this.primero == this.ultimo){
                this.primero = this.ultimo = null
            }
            else{
                this.primero = nodo
            }
        }
    }
    
    actualizar(valor, nuevo){
        var nodo = this.primero
        while(nodo != null){
            if(nodo.valor == valor){
                nodo.valor = nuevo
            }
            nodo = nodo.siguiente
        }
    }

    buscar(valor){
        var aux = this.primero
        var posicion = 0
        while(aux != null){
            if(aux.valor == valor){
                //Se encotro valor
                return {estado: true, posicion: posicion}
            }
            posicion++
            aux = aux.siguiente
        }
        //No se encontro valor
        return {estado: false}
    }

    cargar(){

    }

    guardar(){

    }
}

//export default Pila