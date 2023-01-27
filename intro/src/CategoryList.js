import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
    currentCategory: "",
  };
  changeCategory =(category)=>{
    this.setState({currentcategory:category.categoryName})
  }

  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
