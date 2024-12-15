import LoginPage from './components/LoginPage'
import { AuthProvides } from './context/AuthContext'
import './index.css'

function App() {

  return (
    <>
      <AuthProvides>
        <LoginPage />
      </AuthProvides>
    </>
  )
}

export default App
