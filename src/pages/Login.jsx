import { useState } from "react";
import { MinhaNavbar } from "../componentes/MinhaNavbar";
import { useNavigate } from "react-router-dom";


function Login() {

    let navegate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function enviarDados() {
        try{

            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            const response = await fetch(
                "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
                {
                method: 'POST',
                mode:"cors",
                body: formData,
                }
            
            );
            
            const data = await response.json()
            localStorage.setItem("token", data.token)
            localStorage.setItem("nomeUsuario", data.user.name)
            localStorage.setItem("emailUsuario", data.user.email)

            navegate("/");

        } catch(error){
            alert("Erro ao enviar dados")
            console.log(error);
            
        }
    }  

    function pegarEmail(event) {
        setEmail(event.target.value);
    }

    function pegarSenha(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <MinhaNavbar />
            <h1>Login</h1>
            <form>
                <label>Email: {email}</label>
                <input type="text" placeholder="email" onChange={pegarEmail}/>
                <br />
                <label>Senha: {password}</label>
                <input type="password" placeholder="Senha" onChange={pegarSenha} />
                <button type="button" onClick={enviarDados}>Entrar</button>
            </form>
        </div>
    )
}

export { Login };