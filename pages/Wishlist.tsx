import styled from 'styled-components';
import { WishlistIcon } from '../assert/icons';
import { useAppSelector } from '../store/store.hook';
import { Border } from '../styles/globelStyles';
import { formatAsCurrency } from './../utils/formatAsCurrency';
import ImageCard from './../components/ImageCard';
export const Main = styled.div`
  font-size: 2.3rem;
  height: 100vh;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  p {
    font-size: 1.3rem;
    line-height: 1.1rem;
    letter-spacing: -0.1rem;
    padding-top: 1.5rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 17px;
  padding: 2rem 1rem;
  margin: 1rem 3rem;
  div {

    border: 1px solid rgb(238, 238, 238);
    h3,span {
      padding: 0.5rem ;
    }
    button {
      font-style: inherit;
      font-variant: inherit;
      font-stretch: inherit;
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      font-weight: 500;
      background-color: white;
      color: var(--main-bn-color);
      display: block;
      outline: none;
      cursor: pointer;
      border-right: none;
      border-bottom: none;
      border-left: none;
      border-image: initial;
      border-top: 1px solid rgb(238, 238, 238);
      padding: 8px;
      width: 100%;
      margin-top: .5rem;
    }
  }
`;
export default function Wishlist() {
  const data = useAppSelector(item => item.wishlist.items);
  const filterWishlist = [...new Set(data)];

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <Grid>
          {filterWishlist.map((item: any) => {
            return (
              <div key={item.id}>
                <ImageCard src={item.image} alt={item.name} w={320} h={400} />
                <h3>{item.name}</h3>
                <span>{formatAsCurrency(item.price)}</span>
                <button>Move To Cart</button>
              </div>
            );
          })}
        </Grid>
      ) : (
        <Main>
          <div>
            <Border>
              <WishlistIcon />
            </Border>
          </div>
          <p>Your wishlist is empty</p>
        </Main>
      )}
    </>
  );
}
