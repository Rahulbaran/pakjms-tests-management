import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

/* pages */
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import Class from "./pages/class/Class";
import NotFound from "./pages/NotFound";

/* layouts */
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<div>Something went wrong</div>}
    >
      <Route index element={<Home />} />
      <Route path="classes" element={<Classes />} />
      <Route path="classes/:classId" element={<Class />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
