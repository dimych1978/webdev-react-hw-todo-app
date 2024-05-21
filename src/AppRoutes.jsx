import { Routes, Route } from "react-router-dom";
import TodosPage from "./pages/TodosPages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
    </Routes>
  );
}

export default AppRoutes;
