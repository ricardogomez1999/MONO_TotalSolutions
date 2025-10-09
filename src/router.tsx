import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layouts";
import EnglishPage from "./Views/EnglishPage";
import SpanishPage from "./Views/SpanishPage";
import AdminPage from "./Views/AdminPage";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function router() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/en" element={<EnglishPage />} />
            <Route path="/es" element={<SpanishPage />} />{" "}
          </Route>
          <Route path="/es/admin" element={<AdminPage />} />
          <Route path="/en/admin" element={<AdminPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
