import React from 'react';

const ProductionOrdersPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Órdenes de Producción</h1>
      <p>
        Aquí puedes visualizar y administrar las órdenes de producción activas, en progreso o finalizadas.
        Asegúrate de tener el inventario necesario antes de crear una nueva orden.
      </p>
    </div>
  );
};

export default ProductionOrdersPage;
