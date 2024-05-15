import React, { useState } from 'react';
import LogoPrincipal from "../../public/logo.jpeg";

const Login = () => {
  const [condicionesAceptadas, setCondicionesAceptadas] = useState(false);

  const cambiarCondiciones = (event) => {
    setCondicionesAceptadas(event.target.checked);
    console.log('Condiciones aceptadas:', event.target.checked);
  };

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <div className="flex justify-center mb-8">
          <img src={LogoPrincipal} alt="Logo" className="h-20" />
        </div>
        <h1 className="text-xl font-semibold mb-6">Iniciar Sesión</h1>
        <div className="text-center">
          <div className="mb-4">
            <input
              type="text"
              className="login-field"
              placeholder="Usuario"
              id="login-name"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="login-field"
              placeholder="Contraseña"
              id="login-pass"
            />
          </div>
          <button className="btn btn-primary btn-large btn-block mb-4">
            Iniciar Sesión
          </button>
          <label htmlFor="condiciones" className="block mb-4">
            <input
              type="checkbox"
              id="condiciones"
              name="condiciones"
              className="mr-2"
              onChange={cambiarCondiciones}
            />
            Estoy de acuerdo con los <a href="#" className="underline">términos y condiciones</a>.
          </label>
          <a href="#" className="text-sm text-gray-700 block mb-4">
            ¿Perdiste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
