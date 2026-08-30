import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,

    context: {
      queryClient,
    },

    // Keep scroll restoration enabled for normal browser navigation
    scrollRestoration: true,

    // Instant navigation between pages.
    // We will control smooth scrolling only where we actually want it.
    scrollRestorationBehavior: "instant",

    defaultPreload: "intent",
  });

  return router;
};