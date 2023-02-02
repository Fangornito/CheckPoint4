import React, { useState } from "react";

export default function ProductTable() {
  const [products, setProducts] = useState([
    {
      name: "",
      quantity: 0,
      cost_at_purchase: 0,
      maintenance_cost_per_month: 0,
      total_cost_per_year: 0,
    },
  ]);

  const handleAddRow = () => {
    setProducts([
      ...products,
      {
        name: "",
        quantity: 0,
        cost_at_purchase: 0,
        maintenance_cost_per_month: 0,
        total_cost_per_year: 0,
      },
    ]);
  };
  const handleChange = (event, index) => {
    const updatedProducts = [...products];
    updatedProducts[index][event.target.name] = event.target.value;
    setProducts(updatedProducts);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Coût à l'achat</th>
            <th>Coût de maintenance par mois</th>
            <th>Coût total par an</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleChange(e, product.id, "name")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleChange(e, product.id, "quantity")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.cost_of_purchase}
                  onChange={(e) =>
                    handleChange(e, product.id, "cost_of_purchase")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.maintenance_cost_per_month}
                  onChange={(e) =>
                    handleChange(e, product.id, "maintenance_cost_per_month")
                  }
                />
              </td>
              <td>
                {(
                  product.quantity * product.cost_of_purchase +
                  12 * product.maintenance_cost_per_month
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow}>
        Ajouter une ligne
      </button>
    </div>
  );
}
