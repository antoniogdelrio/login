import { useContext } from 'react'
import { LoginContext } from './contexts/LoginContext'
import Login from './pages/Login'

function App() {
  const { token } = useContext(LoginContext)

  return (
    <div className="App">
      {token}
      <Login />
    </div>
  )
}

export default App
