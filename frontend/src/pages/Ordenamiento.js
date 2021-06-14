import React from 'react';

import Rapido from '../Estructuras/Ordenamientos/Rapido'
import Seleccion from '../Estructuras/Ordenamientos/Seleccion'

import './styles/Grafica.css'

class LinealesL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          tipo: "Burbuja",
          velocidad: 5,
        }
        this.lista = this.setLista()
    }

    handleOption = e => {
        this.setState({
            tipo: e.target.value
        })
    }
    
    handleClick = e => {
        const id = e.target.id
        if(id === "Guardar"){

        }
        else if(id === "Cargar"){

        }
        
    }

    handleMove = e => {
        console.log(e.target.value)
        this.setState({
            velocidad: e.target.value
        })
    }

    setLista = tipo => {
        if(tipo === "Selección"){
            const list = new Seleccion()
            return list
        }
        else if(tipo === "Rápido"){
            const list = new Rapido()
            return list
        }
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <p>{this.nombre}</p>
                        </td>
                        <td>
                            <button type="button" className="btn Boton" id="Guardar"
                                onClick={this.handleClick}> Guardar
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn Boton" id="Cargar"
                                onClick={this.handleClick}> Cargar
                            </button>
                        </td>
                    </table>
                </nav>
                <div>
                    <canvas width="1000" height="700"></canvas>
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1"  onChange={this.handleMove}
                            defaultValue="5" width="100"/>
                        </td>
                        <td>
                            <select multiple="" class="form-select" id="exampleSelect2" 
                                onChange={this.handleOption}>
                                <option>Burbuja</option>
                                <option>Selección</option>
                                <option>Inserción</option>
                                <option>Rápido</option>
                            </select>
                        </td>
                    </table>
                </nav>
            </div>
        )
    }

}

export default LinealesL