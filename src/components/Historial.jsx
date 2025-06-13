const OrderHistory = ({ pedidos, getListaPedidos }) => {
  

  
  return (
    <>
    {getListaPedidos && (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-8">Historial de Pedidos</h1>

      <div className="max-w-4xl mx-auto grid gap-6">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800">Pedido #{pedido.id}</h2>
              <span className="text-sm text-gray-500">{pedido.fecha}</span>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p>Estado: <span className="font-medium">{pedido.estado}</span></p>
              <p>Artículos: {pedido.items.length}</p>
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-700">Total: ${pedido.total.toFixed(2)}</span>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>  
    )}
    </>
  );

  
};

export default OrderHistory;
