import React from "react";

function MakeRecipe({ data, deleteRecipe }) {
  return (
      <tbody>
        <tr>
          <td>
            <p>{data.name}</p>
          </td>
          <td>
            <p>{data.cuisine}</p>
          </td>
          <td>
            <img src={data.photo} alt={`of ${data.name}`}/>
          </td>
          <td className="content_td">
            <p>{data.ingredients}</p>
          </td>
          <td className="content_td">
            <p>{data.preparation}</p>
          </td>
          <td>
            <button name="delete" onClick={() => deleteRecipe(data)}>Delete</button>
          </td>
        </tr>
      </tbody>
  );
}

export default MakeRecipe;
