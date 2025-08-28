import { MinhaNavbar } from "../componentes/MinhaNavbar";
import { CarouselImg } from "../componentes/CarrouselImg";
import { ListarProdutos } from "../componentes/ListarProdutos";

function Home() {

return (
<div>
  <MinhaNavbar />
  <CarouselImg />
  <br />
  <ListarProdutos />
  
</div>
);
}

export { Home };