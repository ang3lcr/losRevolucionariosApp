import React, { useState } from 'react';
import LogoPrincipal from "../../public/logo.jpeg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();


  const submit = () => {
    let data = {
      "username": username,
      "password": password
    }
    axios.post("https://losrevolucionariosapi.onrender.com/api/v1/auth/login",data).then(res => {
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    })
  }

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col">
        <div className="flex justify-center mb-8 items-center">
          <img src={LogoPrincipal} alt="Logo" className="h-20" />
        </div>
        <h1 className="text-xl font-semibold mb-6 text-center">Iniciar Sesión</h1>
        <div className="text-center">
          <div className="mb-4">
            <input
              type="text"
              className="login-field"
              placeholder="Usuario"
              id="login-name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="login-field"
              placeholder="Contraseña"
              id="login-pass"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-large btn-block mb-4" onClick={() => submit()}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
