import React from "react";

function makeRecipe({ data, deleteRecipe }) {
  return (
    <tr>
      <td>
        <p>{data.name}</p>
      </td>
      <td>
        <p>{data.cuisine}</p>
      </td>
      <td>
        <img>{data.photo}</img>
      </td>
      <td>
        <p>{data.ingredients}</p>
      </td>
      <td>
        <p>{data.preparation}</p>
      </td>
      <td>
        <button onClick={() => deleteRecipe(data)}>Delete</button>
      </td>
    </tr>
  );
}

export default makeRecipe;