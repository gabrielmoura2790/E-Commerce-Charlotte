import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { ContextProvider } from "./hooks/context";

export function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <RoutesApp />
      </ContextProvider>
    </BrowserRouter>
  );
}
