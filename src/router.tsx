import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layouts";
import Indexpage from "./Views/IndexPage";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Indexpage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
