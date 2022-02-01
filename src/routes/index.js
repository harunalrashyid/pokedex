import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useStore } from '@store'

import Home from '@pages/Home'
import Detail from '@pages/Detail'
import NotFound from '@pages/NotFound'

const App = () => {
  const store = useStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pokemon" element={<Home />} />
          <Route path="/pokemon/:pokemonName" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
