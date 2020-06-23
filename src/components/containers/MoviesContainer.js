import React, { Component } from 'react'
import { getMovies } from '../../services/api'
import Form from '../forms/Form'
import TabPanels from '../tabs/TabPanels'
import TabContent from '../tabs/TabContent'
import EndPointDropDown from '../menus/EndPointDropDown';

class MoviesContainer extends Component {
  state = {
    movies: [],
    home2:[],
    searchQuery: '',
    selectQuery: '',
    tabVal: '',
    ancEl: null,
    value: '1',
    openVal: false,
    isLoading: false,
    menuArray: [],
    menuVal:''
  }

  fetchMovies = e => {
    const { searchQuery } = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    getMovies(searchQuery).then(
        movies => {
          this.setState({
            movies,
            isLoading: false
          })
        },
        error => {
          alert('Error', `Something went wrong! ${error}`)
        }
      )
    }

  handleInputChange = searchQuery => {
    console.log("hello")
    this.setState({
      searchQuery
    })
  }

  handleSelectChange = selectQuery => {
    this.setState({
        selectQuery
    })
  }

  handleMenuChange = (val, e) => {
    this.setState({
        menuVal: val,
    })

    getMovies("/"+this.state.tabVal+"/"+this.state.menuVal)
  }

  handleTabChange = (val, e) => {  
    
    this.setState({
        value: val,
        ancEl: e.currentTarget,
        openVal: true
    })
    console.log("hello"+this.state.value)
    console.log(this.state.openVal)
    console.log(e.currentTarget)
    console.log(this.state.ancEl)
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { isLoading, movies } = this.state
    return (
   
      <div>
        <Form 
            onInputChange={this.handleInputChange}
            onChange={this.handleSelectChange}
            onSubmit={this.fetchMovies}
        />
        <TabPanels 
            onTabClick={this.handleTabChange}
            value={this.state.value}
            ancEl={this.state.ancEl}
            openVal={this.state.openVal}
        />
        <TabContent
            items={this.state.movies}
        />
        <EndPointDropDown
          onMenuClick={this.handleMenuChange}
          openVal={this.state.openVal}
          ancEl={this.state.ancEl}
        ></EndPointDropDown>
      </div>
    
    )
  }
}

export default MoviesContainer
