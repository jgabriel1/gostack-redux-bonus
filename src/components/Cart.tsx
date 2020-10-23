import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const current = useSelector(state => state);

  console.log(current);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody />
    </table>
  );
};

export default Cart;
