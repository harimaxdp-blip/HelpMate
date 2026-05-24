import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingPage /> : <LandingPage />;
}

export default App;