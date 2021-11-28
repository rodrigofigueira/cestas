import React from "react";
import Cabecalho from "../../components/cabecalho";
import Card from "../../components/card/card";
import db from '../../data/firebase';
import _produtos from '../../data/produtos';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

function Resumo(){

    const [doacoes, setDoacoes] = useState([]);
    const [produtos, setProdutos] = useState([]);

    async function fetchDoacoes(){

        const doacoesCol = collection(db, 'doacoes');
        const doacoesSnapshot = await getDocs(doacoesCol);
        let _doacoes = [];
    
        doacoesSnapshot.docs.forEach(item => {

          _doacoes.push({
            id: item.id,
            ...item.data(),
            quantidade: 0
          });  
    
        });
    
        setDoacoes(_doacoes);

        const produtosDoados = _doacoes.map(doacao => doacao.produtosDoados);

        atualizarListaDeProdutos(_produtos, produtosDoados);
        setProdutos(_produtos);

    }

    function atualizarListaDeProdutos(listaDeProdutos, listaProdutosDoados){

        listaProdutosDoados.forEach(produtoDoado => {
            produtoDoado.forEach((element) => {
                
                const idDoElementoDoado = element.id;
                const quantidadeDoada = element.quantidade;
        
                const indiceParaAtualizar = listaDeProdutos.findIndex(x => x.id === idDoElementoDoado);
        
                listaDeProdutos[indiceParaAtualizar].doado += parseInt(quantidadeDoada);
            });
        });
        
    }

    async function fetchProdutos(){

        const produtosCol = collection(db, 'produtos');
        const produtosSnapshot = await getDocs(produtosCol);        
        let _produtos = [];
    
        produtosSnapshot.docs.forEach(item => {

            _produtos.push({
              id: item.id,
              ...item.data(),              
            });  
      
        });
    
        setProdutos(_produtos);

    }

    

    useEffect(() => fetchDoacoes(), []);

    return(
        <>
            <Cabecalho />

            <div className="my-3 p-3 bg-body rounded shadow-sm">

                <h6 className="pb-2 mb-2">Doações até o momento</h6>

                <table className="table">

                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Doado</th>
                            <th>Meta</th>
                            <th>Falta(m)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {produtos.map((produto, index) => {
                            return <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td className="text-align-center">{produto.doado}</td>
                                        <td>{produto.meta}</td>
                                        <td>{ produto.meta - produto.doado >= 0 ? 
                                                produto.meta - produto.doado 
                                                : 'Superou em ' + (produto.doado - produto.meta)
                                            }</td>
                                    </tr>
                        })}
                    </tbody>

                </table>

                <h6 className="pb-2 mb-2">Doações Registradas</h6>
                {doacoes.map((doacao, index) => {                    
                    return <Card key={index} {...doacao} />
                })}                             

            </div>

        </>
    )

}

export default Resumo;
