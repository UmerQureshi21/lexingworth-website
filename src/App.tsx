import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFount";
import PastEvents from "./pages/PastEvents";
import OurTeamLayout from "./layouts/OurTeamLayout";
import Executives from "./pages/Executives";
import Analysts from "./pages/Analysts";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/our-team" element={<OurTeamLayout />}>
          <Route index element={<Analysts />} />
          <Route path="analysts" element={<Analysts />} />
          <Route path="execs" element={<Executives />} />
        </Route>
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
