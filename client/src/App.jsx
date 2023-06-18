import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { TasksPage } from "./pages/TasksPage";
import { TaksFormPage } from "./pages/TaskFormPage";
import { Navigation} from "./components/Navigation";

function App(){
  return(
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaksFormPage />} />
        <Route path="/tasks/:id" element={<TaksFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;