import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import NewVideo from "./pages/NewVideoPage";
import Home from "./pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/new-video" element={<NewVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
