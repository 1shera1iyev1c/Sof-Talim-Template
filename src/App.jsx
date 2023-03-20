import { Route, Routes } from 'react-router-dom';
import { Header, Footer} from './Pages'
import { Users, Comments, Todos, Posts, ErrorPage, Home } from './Components'
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<Posts />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
