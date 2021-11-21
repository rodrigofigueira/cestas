import React from "react";

function Card(props){

    const {nome, telefone, endereco, numero, bairro, opcaoRetirada, produtosDoados} = props;

    return(

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{nome} | {telefone}</h5>
                <p className="card-text">{endereco}, {numero} - {bairro}</p>
                <p className="card-text">{
                    opcaoRetirada === 'retirada' ?  
                        'Doação deve ser retirada no endereço marcado' 
                        :
                        'Doação vai ser entregue'   
                }</p>

                <h6>Produtos Doados</h6>

                {produtosDoados.map((produto, index) => {
                    return <p key={index}>{produto.quantidade} - {produto.nome}</p>
                })}

            </div>
        </div>   

    )
}

export default Card;