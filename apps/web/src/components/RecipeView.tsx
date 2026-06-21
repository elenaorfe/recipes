import React from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import PageLayout from "./PageLayout";
import RecipeViewSkeleton from "./RecipeViewSkeleton";
import ErrorComponent from "./ErrorComponent";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import ImageComponent from "./ImageComponent";

interface Ingredient {
  name: string;
  amount: number;
}

interface Direction {
  description: string;
}

interface Recipe {
  name: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
  ingredients: Ingredient[];
  directions: Direction[];
}

interface RecipeCollection {
  items: Recipe[];
}

interface QueryData {
  recipeCollection: RecipeCollection;
}

const GET_RECIPE = gql`
  query GetRecipe($slug: String!, $locale: String) {
    recipeCollection(locale: $locale, where: { slug: $slug }, limit: 1) {
      items {
        name
        image {
          title
          url
        }
        ingredients
        directions
      }
    }
  }
`;

const RecipeView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { t } = useTranslation();

  const { data, loading, error } = useQuery<QueryData>(GET_RECIPE, {
    variables: { slug, locale: i18n.language, preview: false },
  });

  if (loading)
    return (
      <PageLayout showBackLink>
        <RecipeViewSkeleton />
      </PageLayout>
    );

  if (error)
    return (
      <PageLayout showBackLink>
        <ErrorComponent error={error} />
      </PageLayout>
    );

  const recipe: Recipe | null = data?.recipeCollection?.items?.[0] || null;

  if (!recipe) {
    return (
      <PageLayout showBackLink>
        <div className="text-center py-8">{t("recipe.error.not_found")}</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout showBackLink>
      {recipe.image && (
        <ImageComponent
          src={recipe.image.url}
          alt={recipe.name}
          className="w-48 h-48 mx-auto"
          sizes="(max-width: 768px) 192px, 384px"
          srcSet={`${recipe.image.url}?w=192 192w, ${recipe.image.url}?w=384 384w, ${recipe.image.url}?w=512 512w`}
        />
      )}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.name}
          </h1>

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {t("recipe.ingredients")}
              </h2>
              <ul className="list-disc pl-5 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name} - {ingredient.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe.directions && recipe.directions.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t("recipe.steps")}
              </h2>
              <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                {recipe.directions.map((direction, index) => (
                  <li key={index}>{direction.description}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default RecipeView;
