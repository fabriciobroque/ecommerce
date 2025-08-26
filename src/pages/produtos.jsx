import { ListarProdutos } from "../componentes/ListarProdutos";
import { MinhaNavbar } from "../componentes/MinhaNavbar";


function Produtos() {

  return (
    <div>
      <MinhaNavbar />
      <ListarProdutos />
    </div>
  );
}

export { Produtos };