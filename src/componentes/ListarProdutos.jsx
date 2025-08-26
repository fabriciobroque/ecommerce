import React from "react";
import { useEffect, useState } from "react";
import api from "../_service/api"
import { Cards } from "./cards";

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
        {produtos.map((produto) =>{
         return (  
            <>
            <Cards
                name = {produto.title}
                preco = {produto.price}
                img = {produto.image}
            />
           
            </>
         );
        })}
    </>
)


};

export { ListarProdutos };