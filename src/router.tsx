import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layouts";
import EnglishPage from "./Views/EnglishPage";
import SpanishPage from "./Views/SpanishPage";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function router() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/en" element={<EnglishPage />} />
            <Route path="/es" element={<SpanishPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
