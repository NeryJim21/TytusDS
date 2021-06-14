class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
    }
}

class Pila {
    constructor(repeticion){
        this.primero = null
        this.ultimo = null
        this.repeticion = repeticion
    }

    agregar(valor){
        const nodo = new Nodo(valor)
        if(this.primero == null){
            this.primero = this.ultimo = nodo
        }
        else{
            if(this.repeticion || !(this.buscar(valor))){
                this.agregar_P(nodo)
            }
        }
    }

    agregar_P(nodo){
        var aux = this.primero
        this.primero = nodo
        nodo.siguiente = aux
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
        while(aux != null){
            if(aux.valor == valor){
                //Se encotro valor
                return true
            }
            aux = aux.siguiente
        }
        //No se encontro valor
        return false
    }

    cargar(lista){
        lista.map(i =>{
            this.agregar(i.a)
        })
    }

    guardar(){

    }
}

export default Pila