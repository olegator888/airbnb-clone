import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";
import FavoritesClient from "@/favorites/FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteListings();

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <FavoritesClient listings={favorites} currentUser={currentUser} />;
};

export default FavoritesPage;
