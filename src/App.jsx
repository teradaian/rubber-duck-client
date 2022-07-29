import './App.css'
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { themeOptions } from './styles/theme'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Browse from './pages/Browse/Browse'
import Landing from './pages/Landing/Landing'
import NewPost from './pages/NewPost/Newpost'
import NavBar from './components/NavBar/NavBar'
import Profiles from './pages/Profiles/Profiles'
import PostList from './pages/Post/PostList/PostList'
import PostDetails from './pages/PostDetails/PostDetails'
import NewIteration from './pages/NewIteration/NewIteration'
import ProfileDetail from './pages/ProfileDetail/ProfileDetail'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


// Services
import * as authService from './services/authService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const theme = createTheme(themeOptions)

  const handleLogout = (link) => {
    if (link !== '') return
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />


        <Route path="/profiles" element={
          <ProtectedRoute user={user}>
            <Profiles />
          </ProtectedRoute>
        } />


        <Route path="/profiles/:profileId" element={
          <ProtectedRoute user={user}>
            <ProfileDetail user={user} />
          </ProtectedRoute>
        } />

        <Route
          path="/posts/new"
          element={user ? <NewPost user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/posts/:postId"
          element={user ? <PostDetails user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/topics/:topicId"
          element={user ? <PostList user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/browse"
          element={user ? <Browse user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/topics/:topicId/posts/:postId/iterations"
          element={user ? <NewIteration user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
