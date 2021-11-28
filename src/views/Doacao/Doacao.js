import './Doacao.css';
import Cabecalho from '../../components/cabecalho';
import db from '../../data/firebase';
import _produtos from '../../data/produtos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';

function Doacao() {

  const [produtos, setProdutos] = useState(_produtos);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [opcaoRetirada, setOpcaoRetirada] = useState();
  const [enviando, setEnviando] = useState(false);

  function changeProdutos(e, index){       
    let it = [...produtos];
    it[index].quantidade = parseInt(e.target.value);        
    setProdutos(it);    
  }

  async function submit(event){

    event.preventDefault();

    let payload = createPayload();
    if(!validadePayload(payload)) return;
     
    setEnviando(true);
    await addDoc(collection(db, 'doacoes'), payload)
    .then(() => {
      resetState();
      toast.success('Sua doação foi registrada, Deus te abençoe!');
    })
    .catch(() => {
      resetState();
      toast.error('Ocorreu um erro');
    });      
    
  }

  function createPayload(){

    let _payload = {
      nome,
      telefone,
      endereco,
      numero,
      bairro,
      opcaoRetirada,      
    }    

    let produtosDoados = produtos
                        .filter(produto => produto.quantidade > 0)
                        .map(({id, nome, quantidade}) => ({id, nome, quantidade}));        

    _payload.produtosDoados = produtosDoados;

    return _payload;

  }

  function validadePayload(payload){

    for(let key in payload){

      if(key === 'produtosDoados') continue;

      if(payload[key] === undefined || !payload[key]){
        toast.error(`Por favor preencha o campo ${key}`);
        return false;
      }

      if(key === 'telefone' && payload[key].length < 8){
        toast.error('Por favor corrija o telefone');
        return false;
      }

    }

    if(payload.produtosDoados.length === 0) {
      toast.error('Não foi selecionado nenhum item para doação');    
      return false;
    }    
    
    return true;

  }

  function resetState(){
    produtos.forEach(produto => {produto.quantidade = 0});
    setProdutos(produtos);
    setNome('');
    setTelefone('');
    setEndereco('');
    setNumero('');
    setBairro('');   
    setEnviando(false); 
  }

  return (
    <>
      <Cabecalho />

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <p>As doações vão até o dia 15/12/2021</p>
        <p>Toda a doação é importante e bem vinda, mas as orações são essênciais</p>
        <p>Deus vos abençõe</p>
        <p>Irmão Osvaldinho - cooperador de jovens Jd. Cacique</p>
        <p>Irmão Laudelino - cooperador de jovens Novo Colorado</p>
      </div>

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Cadastro</h6>

        <form onSubmit={submit} noValidate> 

          <div className="row">

            <div className="my-1 col-xs-12 col-md-8">
              <label forhtml="nome" className="form-label">Nome</label>
              <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" id="nome" />
            </div>

            <div className="my-1 col-xs-12 col-md-4">
              <label forhtml="telefone" className="form-label">Telefone</label>
              <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control" id="telefone" />
            </div>

          </div>

          <div className="row">

            <div className="my-1 col-9">
              <label forhtml="endereco" className="form-label">Endereço</label>
              <input onChange={e => setEndereco(e.target.value)} value={endereco} type="text" className="form-control" id="endereco" />
            </div>

            <div className="my-1 col-3">
              <label forhtml="numero" className="form-label">Número</label>
              <input onChange={e => setNumero(e.target.value)} value={numero} type="text" className="form-control" id="numero" />
            </div>

          </div>

          <div className="row">

            <div className="my-1 col-xs-12 col-md-6">
              <label forhtml="bairro" className="form-label">Bairro</label>
              <input onChange={e => setBairro(e.target.value)} value={bairro} type="text" className="form-control" id="bairro" />
            </div>

            <div className="my-1 col-xs-12 col-md-6">

              <label forhtml="opcao" className="form-label">Opção</label>

              <div>

                <input 
                  className="form-check-input pointer" 
                  type="radio" 
                  name="opcaoRetirada" 
                  value="entrega"                  
                  onChange={e => setOpcaoRetirada(e.target.value)}
                /> 
                <label className="form-check-label mx-2" forhtml="opcao2">Entrega</label>

                <input 
                  className="form-check-input pointer" 
                  type="radio" 
                  name="opcaoRetirada" 
                  value="retirada"                                    
                  onChange={e => setOpcaoRetirada(e.target.value)}
                /> 
                <label className="form-check-label mx-2" forhtml="opcao1">Retirada</label>
                                
              </div>

            </div>

          </div>

          <div className="row">
          
            <h4 className="my-3">Postos de entrega</h4>    
            <ul>
              <li className="mx-4">Rua Biotônico, 740 - casa 12, Vila Nova Urupês</li>    
              <li className="mx-4">Rua Clemente Dionisio Pereira 242 - Novo Colorado</li>    
            </ul>
          
          </div>          

          <div className="row mt-3">
            <h6 className="border-bottom pb-2 mb-0">Lista de itens</h6>  
            <div className="innerTable">  
              <table className="table table-hover align-middle">            
                <thead>
                  <tr>
                    <th className="col">Produto</th>
                    {/* <th className="col">Doado/Meta</th> */}
                    <th className="col">Quantidade</th>
                  </tr>
                </thead>            
                <tbody>              
                  
                  {
                      produtos.map((produto, index) => {
                        return [
                          <tr key={index}>
                            <td>{produto.nome}</td>
                            {/* <td>{produto.doado}/{produto.meta}</td> */}
                            <td style={{width: '140px'}}>
                              <div className="input-group mb-0">
                              <input 
                                type="number" 
                                className="form-control" 
                                value={produto.quantidade} 
                                min="0" 
                                max="99" 
                                key={index}
                                pattern="\d*"
                                onChange={e => changeProdutos(e, index)}
                              />
                            </div>
                            </td>
                          </tr>
                        ]
                      })
                  }

                </tbody>
              </table>
            </div>
          </div>

          {

            enviando ? 

             <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            :

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block bg-purple">Doar</button>
            </div>

          }


        </form>

      </div>
      
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>
  );
}

export default Doacao;
