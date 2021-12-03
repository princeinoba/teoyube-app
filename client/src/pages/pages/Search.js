import React, { useState } from "react";
import Jumbotron from "./teoyubesearch/Jumbotron";
import Nav from "./teoyubesearch/Nav";
import Input from "./teoyubesearch/Input";
import Button from "./teoyubesearch/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./teoyubesearch/RecipeList";
import { Container, Row, Col } from "./teoyubesearch/Grid";

function Search() {

  const [recipes, setRecipes] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setRecipeSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(recipeSearch)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="RecipeSearch"
                      value={recipeSearch}
                      onChange={handleInputChange}
                      placeholder="Search For Promises"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!recipes.length ? (
              <h1 className="text-center">Promises Display Here</h1>
            ) : (
              <RecipeList>
                {recipes.map(recipe => {
                  return (
                    <RecipeListItem
                      key={recipe.title}
                      title={recipe.title}
                      href={recipe.href}
                      description={recipe.description}
                      thumbnail={recipe.thumbnail}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;