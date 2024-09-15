import './App.css'
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

import UserContext, { initialStateUser } from "./context/user.tsx";
import { routes } from "./router.tsx";

function App() {
  const [avatar, setAvatar] = useState<string>(initialStateUser.avatar);

  const router = createBrowserRouter(routes);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Telegram?.WebApp?.expand();
    document.documentElement.style.backgroundColor = tg.themeParams.bg_color || "#F2F2F7";
  }, []);
  return (
      <UserContext.Provider value={{ avatar, setAvatar }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
  )
}

export default App
