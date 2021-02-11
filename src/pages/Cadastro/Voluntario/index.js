import React from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo";

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px 0;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-weight: bold;
  position: relative;
  left: 38%;
  width: 30%;
  height: 40px;
  border-radius: 10px;
`;

function changeCityfunction(e) {}

function FormVoluntario() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Label htmlFor="name">Nome:</Label>
      <Input placeholder="Seu Nome" id="name" required />
      <Label htmlFor="email">E-mail:</Label>
      <Input placeholder="E-mail de acesso" id="email" type="email" required />
      <Label htmlFor="password">Senha:</Label>
      <Input
        placeholder="Nova senha de acesso"
        id="password"
        type="password"
        required
      />
      <Label htmlFor="confirmPassword">Confirmar senha:</Label>
      <Input
        placeholder="Confirmar nova senha"
        id="confirmPassword"
        type="password"
        required
      />
      <Label htmlFor="city">Cidade:</Label>
      <div className="dropdown" open="">
        <span>
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <Input
          placeholder="Cidade em que você reside"
          id="city"
          type="text"
          autocomplete="false"
          onChange={changeCityfunction()}
          required
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
  );
}

function CadastroVoluntario() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2vh 30vw",
        flexDirection: "column",
      }}
    >
      <Logo></Logo>
      <h1 style={{ textAlign: "center" }}>Nova Conta</h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Crie uma nova conta para se voluntariar.
      </p>
      <FormVoluntario></FormVoluntario>
    </div>
  );
}

export default CadastroVoluntario;
