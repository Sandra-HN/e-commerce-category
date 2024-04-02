import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalogue from "./routes/catalogue";
import ProductDetails from "./routes/productDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalogue />,
  },
  { path: "/:id", element: <ProductDetails /> },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
