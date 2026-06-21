import React from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import RecipeListSkeleton from "./RecipeListSkeleton";
import ErrorComponent from "./ErrorComponent";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

interface RecipeImage {
  title: string;
  url: string;
}

interface Recipe {
  name: string;
  image: RecipeImage;
  slug: string;
}

const GET_RECIPES = gql`
  query ($locale: String) {
    recipeCollection(locale: $locale, order: [name_ASC]) {
      items {
        name
        slug
        image {
          title
          url
        }
      }
    }
  }
`;

const RecipeList: React.FC = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: { locale: i18n.language, preview: false },
  });

  const recipes: Recipe[] = data?.recipeCollection?.items;
  const header = <h1 className="text-3xl">{t("recipes.title")}</h1>;

  if (loading) {
    return (
      <PageLayout header={header}>
        <RecipeListSkeleton />
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout header={header}>
        <ErrorComponent error={error} />
      </PageLayout>
    );
  }

  return (
    <PageLayout header={header}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.slug}`}
            key={recipe.slug}
            className="block"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
              <div className="flex gap-4 p-4 grow">
                <div className="flex flex-col gap-2 grow justify-between">
                  <h2 className="text-lg font-bold text-gray-900">
                    {recipe.name}
                  </h2>
                </div>
                {recipe.image && (
                  <img
                    src={recipe.image.url}
                    alt={recipe.name}
                    className="my-auto w-18 h-18"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default RecipeList;
