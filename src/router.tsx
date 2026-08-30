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

    /*
     * Keep scroll restoration enabled.
     */
    scrollRestoration: true,

    /*
     * Route changes themselves should happen instantly.
     *
     * WorkSection controls its own smooth scrolling.
     */
    scrollRestorationBehavior: "instant",

    defaultPreload: "intent",
  });

  return router;
};