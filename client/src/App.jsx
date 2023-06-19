import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaksFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaksFormPage />} />
          <Route path="/tasks/:id" element={<TaksFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
