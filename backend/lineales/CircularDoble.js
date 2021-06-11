class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
        this.anterior = null
    }
}

class CircularSimple {
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
            var aux = this.primero
            while(true){
                if(aux.siguiente == aux.anterior){
                    aux.siguiente = nodo
                    aux.anterior = nodo
                    nodo.siguiente = aux
                    nodo.siguiente = aux
                }
                else{
                    
                }
            }
        }
    }
}