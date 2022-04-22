import styled from 'styled-components';
import { Clothes } from '@prisma/client';
import db from '../../prisma/index';
import { formatAsCurrency } from '../../utils/formatAsCurrency';
import { Button } from '../../styles';
import Link from 'next/link';
import { QUERIES } from '../../styles/mediaQueries';
import { useAppDispatch } from './../../store/store.hook';
import { setWishlist } from '../../store/wishlist.slice';
import ImageCard from '../../components/ImageCard';
export async function getStaticPaths() {
  const homes = await db.clothes.findMany({
    select: { id: true },
  });

  return {
    paths: homes.map(home => ({
      params: { id: home.id },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }: any) {
  const clothes = await db.clothes.findUnique({
    where: { id: params.id },
  });

  if (clothes) {
    return {
      props: JSON.parse(JSON.stringify(clothes)),
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}
const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 6vh auto auto;
  margin: 2.6rem auto auto;

  .image {
    width: 250px;
    @media ${QUERIES.mobile} {
      width: 330px;
    }
    .imgFake {
      background-color: #eee;
      width: 250px;
      height: 350px;
    }
  }
  .info {
    margin: 0.1rem;
    padding: 0.1rem;
    @media ${QUERIES.mobile} {
      padding: 1rem;
      margin: 1rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 500;
    }
    p {
      margin: 1rem 0;
    }
    span {
      font-size: 1.2rem;
    }
    .action {
      display: flex;
      gap: 1rem;
    }
  }
`;
interface Iitem {
  id: string;
  name: string;
}


function CollectionsItem({ name, brand, image, price, id }: Clothes) {
  const dispatch = useAppDispatch();

  const item = {
    id,
    name,
    image,
    price
  };

  const WishlistHandle = (items: Iitem) => dispatch(setWishlist(items));

  return (
    <>
      <Link href="/Collections" passHref>
        <a className="back">
          Collections/<span>{name}</span>
        </a>
      </Link>
      <CardItem key={id}>
        <div className="image">
          {image ? (
            <ImageCard alt={name} src={image} w={330} h={412} />
          ) : (
            <div className="imgFake"></div>
          )}
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{brand}</p>
          <span>{formatAsCurrency(price)}</span>
          <div className="size-box">
            <div className="head"></div>
            <div className="sizes"></div>
          </div>
          <div className="action">
            <Button onClick={() => WishlistHandle(item)}>Wishlist</Button>
            <Button primary>Add to Cart</Button>
          </div>
        </div>
      </CardItem>
    </>
  );
}

export default CollectionsItem;
