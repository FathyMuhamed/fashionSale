import React from 'react';
import styled from 'styled-components';
import db from '../../prisma/index';
import Image from 'next/image';
import { Clothes } from '@prisma/client';
import { formatAsCurrency } from '../../utils/formatAsCurrency';
import { Button } from '../../styles';
import Link from 'next/link';
import { QUERIES } from '../../styles/mediaQueries';
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
function CollectionsItem({ name, brand, image, price, id }: Clothes) {
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
            <Image
              src={image}
              alt={name}
              width={330}
              objectFit="cover"
              height={412}
              layout={'responsive'}
            />
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
            <Button>Wishlist</Button>
            <Button primary>Add to Cart</Button>
          </div>
        </div>
      </CardItem>
    </>
  );
}

export default CollectionsItem;
