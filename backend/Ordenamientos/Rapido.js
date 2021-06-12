class Rapido{
    constructor(){
        this.areglo = []
    }

    cargar(lista){
        lista.map(i =>{
            this.areglo.push(i.a)
        })
        this.ordenar(0, this.areglo.length-1)
    }

    ordenar(min, max){
        if(min < max){
            var aux = this._ordenar(min, max)
            this.ordenar(min, aux-1)
            this.ordenar(aux+1, max)
        }
    }

    _ordenar(min, max){
        var aux = this.areglo[max];  
        var i = (min - 1) 
        for (var j = min; j <= max- 1; j++){
            if (this.areglo[j] < aux){
                i++;
                var pivote = this.areglo[i]
                this.areglo[i] = this.areglo[j]
                this.areglo[j] = pivote
            }
        }
        var pivote = this.areglo[i + 1]
        this.areglo[i + 1] = this.areglo[max]
        this.areglo[max] = pivote
        return (i + 1)
    }
}

const ar = new Rapido()
const str = '[{"a":10}, {"a":35}, {"a":4}, {"a":545}, {"a":6}, {"a":755}, {"a":80}]';

const obj = JSON.parse(str);

ar.cargar(obj)

console.log(ar)