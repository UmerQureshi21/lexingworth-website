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
import Team from "./pages/Team";
import Events from "./pages/Events";
import Fund from "./pages/Fund";
import Alumni from "./pages/Alumni";
import Resources from "./pages/Resources";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
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
