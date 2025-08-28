import { useContext } from "react";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { MinhaNavbar } from "../componentes/MinhaNavbar";

function Carrinho() {

    const { listaProdutos, removerProduto } = useContext(CarrinhoContext);

    function removerProdutoCarrinho(idProduto) {
        removerProduto(idProduto);
        alert("Produto removido do carrinho");
    }

    return (
        <div>
            <MinhaNavbar />
            <h1>Carrinho</h1>
            <ul>
                {listaProdutos.map((produto) => (
                    <li key={produto.idProduto}>
                        <img src={produto.img} alt={produto.name} style={{ width: '50px', marginRight: '10px' }} />
                        {produto.name} - {produto.preco}{" "}
                        <button onClick={() => removerProdutoCarrinho(produto.idProduto)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Carrinho };
