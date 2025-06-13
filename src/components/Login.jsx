import { useState } from "react";

const Login = ({ isModalOpen, closeModal, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");

    if (!isLogin) {
      // Simulación de registro con carga
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess("✅ Usuario registrado exitosamente");
        setTimeout(() => {
          // Reset y cambiar a login
          setSuccess("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setIsLogin(true);
        }, 2000);
      }, 1500);
    } else {
      // Simulación de login
      setIsLoggedIn(true);
      closeModal();
    }
  };

  const handleCloseModal = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
    setLoading(false);
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="fixed">
            <div className="bg-white p-6 rounded-lg w-96 relative">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {isLogin ? "Iniciar sesión" : "Registrarse"}
              </h2>

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
                    disabled={loading}
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
                    disabled={loading}
                  />
                </div>

                {!isLogin && (
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium">
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Confirma tu contraseña"
                      disabled={loading}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center space-y-4">
                  <button
                    type="submit"
                    disabled={loading || success}
                    className="bg-[#000102] text-white px-6 py-2 rounded-lg cursor-pointer hover:text-gray-300 transition disabled:opacity-50"
                  >
                    {loading
                      ? "Registrando..."
                      : isLogin
                      ? "Iniciar sesión"
                      : "Registrarse"}
                  </button>

                  {!loading && !success && (
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="text-blue-500 text-xs cursor-pointer hover:underline"
                    >
                      {isLogin
                        ? "¿No tienes cuenta? Regístrate"
                        : "¿Ya tienes cuenta? Inicia sesión"}
                    </button>
                  )}

                  {/* ✅ Mensaje de éxito grande */}
                  {success && (
                    <p className="text-green-600 text-lg text-center font-semibold mt-2 animate-fade-in">
                      {success}
                    </p>
                  )}
                </div>
              </form>

              {/* ❌ Botón cerrar modal */}
              <button
                onClick={handleCloseModal}
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
