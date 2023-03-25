import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

/* pages */
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import NotFound from "./pages/NotFound";

/* layouts */
import RootLayout from "./layouts/RootLayout";
import ClassLayout from "./layouts/ClassLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<div>Something went wrong</div>}
    >
      <Route index element={<Home />} />

      <Route path="classes" element={<ClassLayout />}>
        <Route index element={<Classes />} />
        <Route path=":classId" element={<Classes />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
