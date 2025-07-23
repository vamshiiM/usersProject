import './App.css'
import LeaderBoard from './components/leaderboard'
import People from './components/people'
import SearchBar from './components/searchBar'


function App() {


  return (
    <>
      <SearchBar />
      <div className='container'>
        <People />
        <LeaderBoard />
      </div>
    </>
  )
}

export default App
