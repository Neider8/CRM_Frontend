import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Gestión de Productos</h1>

      <div className="bg-white shadow-md rounded-2xl p-4">
        <p className="text-gray-600 mb-4">
          Aquí puedes ver todos los productos registrados, agregarlos o editarlos.
        </p>

        {/* Tabla de productos simulada */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-pink-100 text-pink-800 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Categoría</th>
                <th className="px-4 py-2">Precio</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Producto simulado */}
              <tr className="border-b">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Camiseta Rosada</td>
                <td className="px-4 py-2">Ropa</td>
                <td className="px-4 py-2">$29.99</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button>
                  <button className="text-red-600 hover:underline">Eliminar</button>
                </td>
              </tr>
              {/* Aquí irían más productos */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
