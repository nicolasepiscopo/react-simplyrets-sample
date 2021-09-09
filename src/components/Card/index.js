import numeral from 'numeral';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';
import {
  StyledAddress,
  StyledCard,
  StyledDate,
  StyledDetails,
  StyledFavoriteButton,
  StyledHeart,
  StyledImage,
  StyledPrice,
} from './styled';

export const Card = ({
  src,
  alt,
  onFavoriteClick,
  favorite,
  bathrooms,
  bedrooms,
  area,
  price,
  address,
  date,
}) => (
  <StyledCard>
    <StyledImage src={src} alt={alt} />
    <StyledFavoriteButton onClick={onFavoriteClick} type="button">
      <StyledHeart
        src={favorite ? heartFill : heartStroke}
        alt={favorite ? 'Remove from favorites' : 'Add to favorites'}
      />
    </StyledFavoriteButton>
    <StyledDetails>
      {bedrooms} BR | {bathrooms} Bath | {area} Sq Ft
    </StyledDetails>
    <StyledPrice>{numeral(price).format('$0,0.00')}</StyledPrice>
    <StyledAddress>{address}</StyledAddress>
    <StyledDate>Listed: {date}</StyledDate>
  </StyledCard>
);
