import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./context/AppContext.jsx";

const queryClient = new QueryClient({
  defaultOption: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
