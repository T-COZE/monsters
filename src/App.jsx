import { Component } from 'react'
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

function App() {
return (
  <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
    <SearchBox 
      onChangeHandler = {onSearchChange} 
      placeholder='search monsters'
      className='monsters-search-box'
      />
    <CardList monsters={filteredMonsters} />
      </div>
)
}

class App extends Component {
  constructor(){
    super()

    this.state= {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users)=> this.setState(()=>{
        return {monsters: users}
      },
      ))
       
  }

  onSearchChange = (e)=>{
        const searchField = e.target.value.toLowerCase()
        this.setState(()=>{
          return {searchField}
        })
      }

  render(){
    
     const {monsters, searchField} = this.state
     const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField)
    })
     return 
    }
}

export default App
