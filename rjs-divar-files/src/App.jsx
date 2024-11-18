import {BrowserRouter} from "react-router-dom";
import Router from "router/Router.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import defaultOptions from "configs/reactQuery.js";
import Layout from "layouts/Layout.jsx";
import {Toaster} from "react-hot-toast";


function App() {
    const queryClient = new QueryClient({defaultOptions});

  return(
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Layout>
                  <Router/>
                  <Toaster/>
              </Layout>
          </BrowserRouter>
          <ReactQueryDevtools/>
      </QueryClientProvider>
  );
}

export default App;
