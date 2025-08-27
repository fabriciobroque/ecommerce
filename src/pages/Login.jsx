import { useState } from "react";
import { MinhaNavbar } from "../componentes/MinhaNavbar";
import { useNavigate } from "react-router-dom";
import "../App.css";


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
"https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
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
    
    <section class="vh-100 gradient-custom">
        <form>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white border-radius: 1rem" >
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" onChange={pegarEmail} placeholder="email@example.com"/>
                                    <label class="form-label" for="typeEmailX"  ></label>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={pegarSenha} placeholder="Password"/>
                                    <label class="form-label" for="typePasswordX" ></label>
                                </div>

                                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a>
                                </p>

                                <button data-mdb-button-init data-mdb-ripple-init
                                    class="btn btn-outline-light btn-lg px-5" type="button" onClick={enviarDados}>Login</button>

                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                </div>

                            </div>

                            <div>
                                <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign
                                        Up</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </section>

</div>
)
}

export { Login };