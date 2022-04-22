import React from 'react';
import styled from 'styled-components';
import db from './../prisma';
import { Clothes } from '@prisma/client';
import ItemCard from '../components/ItemCard';

const CollectionsPage = styled.div`
  display: flex;
  flex: 1;

  aside {
    display: none;
  }
  main {
    width: 100%;
    padding: 1rem;
    .header {
      padding: 0 1.4rem;
    }
  }
`;
export async function getServerSideProps() {
  const res = await db.clothes.findMany();
  return {
    props: {
      clothes: JSON.parse(JSON.stringify(res)),
    },
  };
}
export interface Iclothes {
  clothes: Clothes[];
}
function Collections({ clothes }: Iclothes) {
  const isEmpty = clothes.length === 0;

  return (
    <CollectionsPage>
      <aside>Brands</aside>
      <main>
        <h3 className="header">Collections</h3>
        {isEmpty ? <h2>No Data show</h2> : <ItemCard clothes={clothes} />}
      </main>
    </CollectionsPage>
  );
}

export default Collections;
