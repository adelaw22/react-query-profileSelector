import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './mainPage'
import CardList from './layouts/CardList'
import UsersProfile from './layouts/UserProfile'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="" element={<CardList />} />
            <Route path="/:userId" element={<UsersProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
