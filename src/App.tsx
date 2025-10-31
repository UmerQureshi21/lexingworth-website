import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
