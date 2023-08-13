import { RootRoute, Route, Router } from "@tanstack/react-router";
import { RootLayout } from "./layouts";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

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

const singlePostRouter = new Route({
  getParentRoute: () => postsRoute,
  path: "$postId",
  component: Post
})

// create a route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  userRoute,
  postsRoute,
  singlePostRouter
]);

// create router
const router = new Router({ routeTree });

// register your router for type-safety magic
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;