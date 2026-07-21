import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AppNotFound from "@/pages/AppNotFound";

/**
 * IMPORTANT: routes like /custody or /flight-tool are NOT handled here.
 *
 * Each sub-application in apps/* is built as a fully independent static
 * bundle and deployed to dist/<slug>/index.html. GitHub Pages serves that
 * file directly for requests to /<slug>/, so the browser never loads this
 * portfolio SPA for those paths — there is nothing for this router to do.
 *
 * This router only owns the portfolio shell at "/". The catch-all below
 * exists purely as a friendly fallback for genuinely unknown paths.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<AppNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
