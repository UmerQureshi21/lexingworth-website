import { useEffect } from "react";
import { useLocation } from "react-router";

// React Router doesn't scroll to in-page anchors on client-side navigation
// (only the browser's native full-page load does). This watches the URL
// hash and scrolls the matching element into view whenever it changes.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));

    // Wait a tick so the destination page has rendered before we look
    // for the element (relevant when navigating from another route).
    const timer = setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
