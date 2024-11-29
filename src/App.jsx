import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import Homepage from './pages/Homepage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/phim-bo' element={<SearchPage />} />
        </Route>

        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
