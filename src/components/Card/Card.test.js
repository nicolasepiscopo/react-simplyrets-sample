import { cleanup, render } from '@testing-library/react';
import { Card } from './index';

afterEach(cleanup);

it('Should render successfully', () => {
  const { getByText, getByAltText } = render(
    <Card
      address="test address"
      alt="test alt"
      area={1234}
      bathrooms={1.5}
      bedrooms={2}
      date="03/03/2021"
      favorite={false}
      price={1234123.33}
      onFavoriteClick={() => {}}
      src="https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg"
    />,
  );

  // Check that the image is being rendered
  expect(getByAltText('test alt')).toHaveProperty(
    'src',
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
  );
  // Check that fav button/img is rendered
  expect(getByAltText('Add to favorites')).toHaveProperty(
    'src',
    'http://localhost/heart-stroke.svg',
  );
  // Check that price is rendered and well formatted
  expect(getByText('$1,234,123.33')).not.toBeNull();
  // Check that details are well formatted and complete
  expect(getByText(`2 BR | 1.5 Bath | 1234 Sq Ft`)).not.toBeNull();
  // Check address
  expect(getByText('test address')).not.toBeNull();
  // Check date
  expect(getByText(`Listed: 03/03/2021`)).not.toBeNull();
});

it('Should render stroke heart if favorite is false', () => {
  const { getByAltText } = render(
    <Card
      address="test address"
      alt="test alt"
      area={1234}
      bathrooms={1.5}
      bedrooms={2}
      date="03/03/2021"
      favorite={false}
      price={1234123.33}
      onFavoriteClick={() => {}}
      src="https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg"
    />,
  );

  expect(getByAltText('Add to favorites')).toHaveProperty(
    'src',
    'http://localhost/heart-stroke.svg',
  );
});

it('Should render fill heart if favorite is false', () => {
  const { getByAltText } = render(
    <Card
      address="test address"
      alt="test alt"
      area={1234}
      bathrooms={1.5}
      bedrooms={2}
      date="03/03/2021"
      favorite
      price={1234123.33}
      onFavoriteClick={() => {}}
      src="https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg"
    />,
  );

  expect(getByAltText('Remove from favorites')).toHaveProperty(
    'src',
    'http://localhost/heart-fill.svg',
  );
});
