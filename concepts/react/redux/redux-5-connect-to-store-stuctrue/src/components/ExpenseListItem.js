import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => ( //透過Destructuring把傳下來的props當作變數使用
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
