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
            //Agregar a lista vacia
            this.primero = this.ultimo = nodo
        }
        else{
            //Agregar a lista no vacia
            var aux = this.ultimo
            aux.siguiente = this.ultimo = nodo
            /*var aux = this.primero
            while(aux != null){
                if(aux == this.ultimo){
                    aux.siguiente = nodo
                    this.ultimo = nodo
                    break
                }
                aux = aux.siguiente
            }*/
        }
    }

    eliminar(valor){
        var nodo = this.primero
        var aux = null
        while(nodo != null){
            if(nodo.valor == valor){
                if(nodo == this.primero){
                    if(this.primero == this.ultimo){
                        this.primero = this.ultimo = null
                    }
                    else{
                        this.primero = nodo.siguiente
                    }                    
                }
                else if(nodo == this.ultimo){
                    this.ultimo = aux
                    this.ultimo.siguiente = null
                }
                else{
                    aux.siguiente = nodo.siguiente
                }
                break
            }
            aux = nodo
            nodo = nodo.siguiente
        }
    }

    acutualizar(valor, nuevo){
        var aux = this.primero
        while(aux != null){
            if(aux.valor == valor){
                aux.valor = nuevo
            }
            aux = aux.siguiente
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
        return {estado: false}
    }

    cargar(){

    }

    guardar(){

    }
}

//export default Simple

const list = new Simple()

list.agregar(2)
list.agregar(3)
list.agregar(4)

//list.eliminar(4)

console.log(list)