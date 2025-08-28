import React from "react";
import { useEffect, useState } from "react";
import api from "../_service/api"
import { Cards } from "./Cards";
import { Container, Row, Col } from "react-bootstrap";

function ListarProdutos() {

    const [produtos, setProdutos] = useState([]);

    async function buscarProdutos() {
        console.log("Buscando produtos...");

    try {
        const response = await api.get("/productlistbyremark/home")
        console.log(response);
        setProdutos(response.data)
        
    } catch(error) {
        console.log("Erro", error);
        
    }
}

useEffect(() => {
    buscarProdutos();
},[])

console.log('Produtos', produtos);

return (
    <>
       <h1>Lista Produtos</h1>
       <br />
       <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row  >
                {produtos.map((p) => (
                    <Col   md={4} sm={6} xs={12} className="d-flex justify-content-center align-items-center">
                    <Cards 
                     idProduto={p.id}
                     name={p.title} 
                     preco={p.price}
                     img={p.image}
                     />
                    </Col>
                ))}
            </Row>
       </Container>
    </>
)


};

export { ListarProdutos };