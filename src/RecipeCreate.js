import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  let formDefault = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(formDefault);

  function handleInput(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    addRecipe(formData);
    console.log("I am hitting submit!!!!!!!!!! dsgsdfgfgfgsdfgdfh");
    setFormData({ ...formDefault });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <thead>
        <tr>
          <th><label htmlFor="name">Name</label></th>
          <th><label htmlFor="cuisine">Cuisine</label></th>
          <th><label htmlFor="photo">Photo</label></th>
          <th><label htmlFor="ingredients">Ingredients</label></th>
          <th><label htmlFor="preparation">Preparation</label></th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInput}
              />
            </td>
            <td>
              
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                value={formData.cuisine}
                onChange={handleInput}
              />
            </td>
            <td>
              
              <input
                type="text"
                name="photo"
                id="photo"
                value={formData.photo}
                onChange={handleInput}
              />
            </td>
            <td>
              
              <textarea
                type="text"
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                onChange={handleInput}
              />
            </td>
            <td>
              
              <textarea
                type="text"
                name="preparation"
                id="preparation"
                value={formData.preparation}
                onChange={handleInput}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
