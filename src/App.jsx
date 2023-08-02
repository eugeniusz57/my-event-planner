import { Route, Routes, Navigate } from "react-router-dom";

import MyEvents from "./pages/MyEvents/MyEvents";
import AddEvent from "./pages/AddEvent/AddEvent";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyEvents />} />
          <Route path="/addeven" element={<AddEvent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
