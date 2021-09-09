import { Error } from 'pages';
import { usePropertiesList } from './hooks';
import { STORAGE_KEYS, useLocalStorage } from 'utils';
import { Card, Grid, GridItem, Header } from 'components';

export const Main = () => {
  const { data, isLoading, isError } = usePropertiesList();
  const [favorites, setFavorites] = useLocalStorage(STORAGE_KEYS.FAVORITES, []);

  if (isError) return <Error />;

  const onClick = (id) => () => {
    const isFavorite = favorites.includes(id);
    let modifiedFavorites = [];

    if (isFavorite) {
      modifiedFavorites = favorites.filter((item) => item !== id);
    } else {
      modifiedFavorites = [...favorites, id];
    }

    setFavorites(modifiedFavorites);
  };

  return (
    <>
      <Header title="Property Listings" />
      <Grid data-testid="propertiesList">
        {!isLoading &&
          data.map(
            (
              {
                mlsId,
                address,
                listDate,
                listPrice,
                photos,
                property: { area, bedrooms, bathsFull, bathsHalf },
              },
              index,
            ) => {
              const date = new Date(listDate);
              const formattedDate = `${date.getMonth() + 1}/${date.getDay()}/
              ${date.getFullYear()}`;
              const isFavorite = favorites.includes(mlsId);

              return (
                <GridItem key={mlsId} data-testid={`property${index}`}>
                  <Card
                    address={address.full}
                    area={area}
                    bathrooms={bathsFull + bathsHalf / 2}
                    bedrooms={bedrooms}
                    date={formattedDate}
                    favorite={isFavorite}
                    onFavoriteClick={onClick(mlsId)}
                    price={listPrice}
                    src={photos[0]}
                    alt={`Property located at ${address.full}`}
                  />
                </GridItem>
              );
            },
          )}
      </Grid>
    </>
  );
};
