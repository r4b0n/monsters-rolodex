//import { Component } from 'react';
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

// Functional Component
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState(''); // [value, setValue]
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchValue]);
  const onSearchChange = (evt) => {
    const searchValueString = evt.target.value.toLocaleLowerCase();
    setSearchValue(searchValueString);
  };
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Class Component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchValue: '',
//     };
//   }
//   componentDidMount() {
//     // Promise Example

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log('Monsters State: ', this.state);
//           }
//         )
//       );

//     // Async Example
//     const getMonsters = async () => {
//       try {
//         const userResponse = await fetch(
//           'https://jsonplaceholder.typicode.com/users'
//         );
//         const users = await userResponse.json();
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             //console.log("Monsters State: ", this.state);
//           }
//         );
//       } catch (err) {
//         console.log('An error occured: ', err);
//       }
//     };
//     getMonsters();
//   }
//   onSearchChange = (evt) => {
//     const searchValue = evt.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchValue };
//     });
//   };
//   render() {
//     const { monsters, searchValue } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchValue);
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='search-box monster-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='Search Monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
