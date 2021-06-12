class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
        this.anterior = null
    }
}

class CircularDoble {
    constructor(){
        this.raiz = null
    }

    agregar(valor) {
        const nodo = new Nodo(valor)
        if(this.raiz == null){
            this.raiz = nodo
            nodo.siguiente = nodo
            nodo.anterior = nodo
        }
        else{
            var aux = this.raiz
            while(true){
                if(aux.siguiente == this.raiz){
                    aux.siguiente = nodo
                    this.raiz.anterior = nodo
                    nodo.siguiente = this.raiz
                    nodo.anterior = aux
                    break
                }
                aux = aux.siguiente
            }
        }
    }

    eliminar(valor){
        var nodo = this.raiz
        var aux = null
        while(true){
            if(nodo.valor == valor){
                if(nodo == this.raiz){
                    if(this.raiz.siguiente == this.raiz){
                        this.raiz = null
                    }
                    else{
                        aux = this.raiz.anterior
                        this.raiz = nodo.siguiente
                        this.raiz.anterior = aux
                    }
                    break
                }
                else{
                    aux = nodo.anterior
                    aux.siguiente = nodo.siguiente
                    nodo.siguiente.anterior = aux
                    break
                }
            }
            if(nodo.siguiente == this.raiz){
                break
            }

            nodo = nodo.siguiente
        }
    }

    actualizar(valor, nuevo){

    }

    buscar(valor){

    }

    cargar(lista){
        lista.map(i =>{
            this.agregar(i.a)
        })
    }
}

//export default CircularDoble