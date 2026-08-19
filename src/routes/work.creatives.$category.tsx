import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCategory } from "@/data/portfolio";
import { CategoryPage } from "@/components/work/CategoryPage";

export const Route = createFileRoute("/work/creatives/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category || category.type !== "creative") throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.title} — Creatives | Abhay Rukari`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
      ],
    };
  },
  component: CreativeCategoryRoute,
});

function CreativeCategoryRoute() {
  const { category } = Route.useLoaderData();
  return <CategoryPage category={category} />;
}
