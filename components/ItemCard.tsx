import Image from 'next/image';
import Link from 'next/link';
import { Clothes } from '@prisma/client';
import { Iclothes } from '../pages/Collections';
import styled from 'styled-components';
import { formatAsCurrency } from './../utils/formatAsCurrency';

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
`;
const SingleItem = styled.div`
  width: 80%;
  margin: auto;
  cursor: pointer;
  border: 1px solid rgb(238, 238, 238);
  .imgFake {
    background-color: #eee;
    height: 300px;
  }
  .card-desc {
    padding: 0.5rem;
    h3 {
      font-size: 1rem;
      padding-top: 0.4rem;
    }
    p {
      font-size: 0.9rem;
      padding: 0.3rem 0 0.5rem;
      font-weight: 500;
      line-height: 0.8rem;
      letter-spacing: 1px;
    }
  }
`;

export default function ItemCard({ clothes }: Iclothes) {
  const item = clothes?.map(({ id, image, brand, name, price }: Clothes) => (
    <Link href={`/collections/${id}`} key={id} passHref>
      <SingleItem>
        <div className="container-img">
          {image ? (
            <Image
              src={image}
              alt={name}
              layout="responsive"
              width={250}
              height={300}
              objectFit="cover"
            />
          ) : (
            <div className="imgFake"></div>
          )}
        </div>
        <div className="card-desc">
          <h3>{name}</h3>
          <p>{brand}</p>
          <span>{formatAsCurrency(price) ?? 0}</span>
        </div>
      </SingleItem>
    </Link>
  ));
  return <CardStyle>{item}</CardStyle>;
}
