import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    return favorites;
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}
