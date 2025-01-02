---
title: Create Protected Routes in React Router v7
tagline: We will learn how to create protected routes in react router v7
slug: create-protected-routes-in-react-router-v7
tags: reactjs, react-router
created: Thu 02 Jan 2025
author: Lakshyaraj Dash
---

## Traditional way of protecting routes

- The traditional way is that to directly implement the functionality into several components, which increased redundancy.

```javascript
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localstorage.getItem("authToken")) {
      navigate("/auth/login");
    }
  }, []);
}

export default Component;
```

## Modern way to create protected routes

- Defining an auth context and auth provider, in `context/AuthContext.jsx`

```javascript
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    if (localstorage.getItem("authToken")) {
      const token = JSON.parse(localstorage.getItem("authToken"));
      setAuth(token);
    } else {
      setAuth(null);
    }
  };

  const contextData = { auth, setAuth };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = function () {
  return useContext(AuthContext);
};

export default AuthContext;
```

- Defining a layout `layouts/RootLayout.jsx`

```javascript
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      {/* Header Element */}

      <Outlet />

      {/* Footer Element */}
    </>
  );
};
```

- Adding the auth provider to root layout in `layouts/RootLayout.jsx`

```javascript
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

export const RootLayout = () => {
  return (
    <AuthProvider>
      {/* Header Element */}

      <Outlet />

      {/* Footer Element */}
    </AuthProvider>
  );
};
```

- Adding the Layout to routes in `App.jsx`

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileElement from "./components/ProfileElement"; // if using default export
import DashboardElement from "./components/DashboardElement"; // if using default export

const router = createBroswerRouter([
    {
        element: <RootLayout />
        children: [
            {
                path: '/profile',
                element: <ProfileElement />
            },
            {
                path: '/dashboard',
                element: <DashboardElement />
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
```

- Creating a protected routes component, `ProtectedRoutes.jsx`

```javascript
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { auth } = useAuth();

  return <>{auth ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};
```

- Adding the protected routes element to the router element `App.jsx`

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

const router = createBroswerRouter([
    {
        element: <RootLayout />
        children: [
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: '/profile',
                        element: <ProfileElement />
                    },
                    {
                        path: '/dashboard',
                        element: <DashboardElement />
                    }
                ]
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
```
