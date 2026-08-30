import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  /*
   * Stop the browser's own native back/forward scroll
   * restoration too.
   *
   * The Work section is opened by clicking a button (not a
   * real route navigation), so the browser never records
   * "scrolled down into Work" as a saved position for "/" -
   * only the original top-of-page (Hero) position. That
   * stale saved position was winning the race against our
   * own scroll logic in WorkSection whenever we navigated
   * back, always landing on Hero.
   */
  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const router = createRouter({
    routeTree,

    context: {
      queryClient,
    },

    /*
     * Scroll restoration OFF.
     *
     * WorkSection is the single source of truth for
     * scrolling within the Work section (see the comment
     * above it). Leaving TanStack Router's own scroll
     * restoration on caused it to jump back to a stale
     * cached position (the Hero, at the top of the page)
     * after every navigation, overriding WorkSection.
     */
    scrollRestoration: false,

    defaultPreload: "intent",
  });

  return router;
};