import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CarrinhoContext } from '../hooks/CarrinhoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({idProduto, name, preco, img}) {

  let navigate = useNavigate();
  const {adicionarProduto } = useContext(CarrinhoContext);

  function adicionarProdutoCarrinho() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado para adicionar produtos ao carrinho");
      navigate("/login");
      return;
    }
    adicionarProduto({idProduto, name, preco, img});
    alert("Produto adicionado ao carrinho");
  }

  return (
    <Card style={{ width: '15rem', marginBottom: '20px'}}>
      <Card.Img style={{ width: '100%'}} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Preço R$ {preco}
        </Card.Text>
        <Button variant="primary" onClick={adicionarProdutoCarrinho}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export { Cards };
