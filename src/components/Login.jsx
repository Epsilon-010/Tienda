// Login.jsx
import { useState } from "react";

const Login = ({ isModalOpen, closeModal, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true); // Para controlar si estamos en la vista de login o registro
  const [email, setEmail] = useState(""); // Estado para el correo
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar contraseña (solo en registro)
  const [error, setError] = useState(""); // Estado para manejar errores

  const toggleForm = () => setIsLogin(!isLogin); // Cambiar entre login y registro

  // Manejo de submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir que la página se recargue

    // Validación de campos
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError(""); // Limpiar error si todo está bien

    // Simulación de login exitoso
    setIsLoggedIn(true); // Marcar al usuario como logueado
    closeModal(); // Cerrar el modal
  };

  // Limpiar los campos cuando se cierra el modal
  const handleCloseModal = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(""); // Limpiar cualquier error
    closeModal(); // Cerrar el modal
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="fixed">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {isLogin ? "Iniciar sesión" : "Registrarse"}
              </h2>

              {/* Mostrar el error si hay */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Contraseña"
                  />
                  {isLogin ? null : (
                    <div className="mb-4 mt-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium"
                      >
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Confirma tu contraseña"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <button
                    type="submit"
                    className="bg-[#000102] text-white px-6 py-2 rounded-lg cursor-pointer hover:text-gray-300 transition"
                  >
                    {isLogin ? "Iniciar sesión" : "Registrarse"}
                  </button>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-blue-500 text-xs cursor-pointer hover:underline"
                  >
                    {isLogin
                      ? "¿No tienes cuenta? Regístrate"
                      : "¿Ya tienes cuenta? Inicia sesión"}
                  </button>
                </div>
              </form>
              <button
                onClick={handleCloseModal} // Llamamos a la nueva función para cerrar el modal y limpiar los campos
                className="absolute top-3 right-3 text-black bg-gray-200 rounded-full p-0.5 hover:bg-gray-300 transition cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

