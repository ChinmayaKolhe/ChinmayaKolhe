import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductionLines from './pages/ProductionLines'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
            <Link to="/" className="font-semibold text-gray-900">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link to="/production-lines" className="text-gray-600 hover:text-gray-900">Production Lines</Link>
          </div>
        </nav>
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production-lines" element={<ProductionLines />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
