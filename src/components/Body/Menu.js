import React, { Component } from 'react'
import MenuItem from './MenuItem'
import DISHES from '../../data/dishes'
import DisplayDishes from './DisplayDish'

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  }

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish })
  }

  render() {
    let displayDishes = null
    if (this.state.selectedDish !== null) {
      displayDishes = (
        <DisplayDishes dish={this.state.selectedDish}></DisplayDishes>
      )
    }

    const menuItems = this.state.dishes.map((item, index) => {
      return (
        <div className='col-4 mb-3' key={item.id}>
          <MenuItem dish={item} onDishSelect={this.onDishSelect} />
        </div>
      )
    })

    return (
      <div className='container'>
        <div className='row mt-5'>{menuItems}</div>
        {displayDishes}
      </div>
    )
  }
}

export default Menu
