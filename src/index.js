import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroONG from "./pages/Cadastro/ONG";
import CadastroVaga from "./pages/Cadastro/Vaga";
import CadastroVoluntario from "./pages/Cadastro/Voluntario";

const Pagina404 = () => <div>Página não encontrada 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Cadastro/ONG" component={CadastroONG} />
      <Route path="/Cadastro/Voluntario" component={CadastroVoluntario} />
      <Route path="/Cadastro/Vaga" component={CadastroVaga} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
