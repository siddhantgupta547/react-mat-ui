import Pages from './components/pages';
import Notes from './components/notes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route path="/:id" element={<Notes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
