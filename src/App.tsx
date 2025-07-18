import "./global.css";

import { createRoot } from "react-dom/client";
import Index from "./pages/Index";

const App = () => <Index />;

createRoot(document.getElementById("root")!).render(<App />);
