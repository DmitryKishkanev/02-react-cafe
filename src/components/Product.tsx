import PropTypes from 'prop-types';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p>Price: {price} credits</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
