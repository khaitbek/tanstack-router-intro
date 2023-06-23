import { RootRoute, Route, Router } from "@tanstack/router";
import { RootLayout } from "./layouts";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

// create a new root route
const rootRoute = new RootRoute({ component: RootLayout });

// create other routes like you normally would have
const indexRoute = new Route({ getParentRoute: () => rootRoute, path: "/", component: Home });
const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: Users
});
const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts",
  component: Posts
});

// create a route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  userRoute,
  postsRoute
]);

// create router
const router = new Router({ routeTree });

// register your router for type-safety magic
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

export default router;