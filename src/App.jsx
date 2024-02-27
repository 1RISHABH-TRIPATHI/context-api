
import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  
  return (
    <UserContextProvider  >
        <h2>
          ______________Jay Shree Ram_____________
        </h2>
          <Login />
        <Home />
    </UserContextProvider>
  )
}

export default App
