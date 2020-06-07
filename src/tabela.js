import React, { Component, useState } from "react";

const TableHead = ()=>{
    return(
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Ações</th>
            </tr>
        </thead>
    );
}



const TableBody = props =>{
    const [contador, setContador] = useState(0);
    const linhas = props.autores.map( (linha, index)=>{
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td>
                    <button className="waves-effect waves-light indigo lighten-2 btn" onClick={()=>{ props.removeAutor(index) }}>
                        Remover
                    </button>
                    <button className="waves-effect waves-light indigo lighten-2 btn" onClick={()=>{ setContador(contador + 1) }}>
                        Contador = {contador}
                    </button>
                </td>
            </tr>  
                      
        );
    } )   
    
    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component
{
    render(){

        const { autores, removeAutor } = this.props;
        
        return(           

            <table className="centered highlight">
                <TableHead/>
                <TableBody autores={autores} removeAutor={removeAutor}/>
            </table>

        );
    }
}
export default Tabela;