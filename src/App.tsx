import './App.css'
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./router.tsx";

function App() {
  const router = createBrowserRouter(routes);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Telegram?.WebApp?.expand();
    document.documentElement.style.backgroundColor = tg.themeParams.bg_color || "#F2F2F7";
  }, []);
  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App
