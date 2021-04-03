import React, { Component } from 'react'
import CardNota from './CardNota'

class ListDeNotas extends Component {
    render() {
        return (
            <ul>
                    {Array.of('Trbalho', 'Trabalho', 'Estudos').map((categoria) => {
                        return (
                            <li>
                                <div>{categoria}</div>
                                <CardNota/>
                            </li>
                        );
                    })}
            </ul>    
        );
    }
}

export default ListDeNotas;
