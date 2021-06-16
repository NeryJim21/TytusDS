class Nodo {
    constructor(valor){
        this.valor = valor
        this.altura = 0
        this.derecho = null
        this.izquierdo = null
    }
}

class AVL {
    constructor(){

    }

    agregar(valor){

    }
}

function _agregar(valor, nodo){
    if(nodo === null){
        nodo = new Nodo(valor)
    }
    else if(valor < nodo.valor){
        nodo.izquierdo = _agregar(valor, nodo.izquierdo)
        switch(nodo.altura){
            case -1:
                
            case 1:
                nodo.altura = 0
                break
            case 0:
                nodo.altura = -1
                break
        }
    }
    else if(valor > nodo.valor){
        nodo.derecho = _agregar(valor, nodo.derecho)
    }
    else if(!this.buscar(valor) || this.repeticion){
        nodo.derecho = _agregar(valor, nodo.derecho)
    }
    return nodo
}

function rotacionII(nodo, aux) {
    nodo.izquierdo = aux.derecho
    aux.derecho = nodo
    if(aux.altura === -1){
        nodo.altura = 0
        aux.altura = 0
    }
    else{
        nodo.altura = -1
        aux.altura = 1
    }
    return aux
}

function rotacionDD(nodo, aux) {
    nodo.derecho = aux.izquierdo
    aux.izquierdo = nodo
    if(aux.altura === 1){
        nodo.altura = 0
        aux.altura = 0
    }
    else{
        nodo.altura = 1
        aux.altura = -1
    }
    return aux
}

function rotacionDI(nodo, aux) {
    var temp = aux.derecho
    nodo.izquierdo = temp.derecho
    temp.derecho = nodo
    aux.derecho = temp.izquierdo
    temp.izquierdo = aux
    if(temp.altura === 1){
        aux.altura = -1
    }
    else{
        aux.altura = 0
    }
    if(temp.altura === -1){
        nodo.altura = 1
    }
    else{
        nodo.altura = 0
    }
    temp.altura = 0
    return temp
}