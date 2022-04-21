/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { Button } from '../styles';
import Link from 'next/link';
const Main = styled.div`
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 40vw)); */
  font-size: 2.3rem;
  height: 100vh;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  h2 {
    font-size: 3.3rem;
    line-height: 3.6rem;
    text-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;
  }
  p {
    line-height: 1.1rem;
    padding-top: 1.5rem;
  }
`;


function Home() {
  return (
    <Main>
      <h2>Wear better, look better.</h2>
      <p>Don't you just love being in apparel?</p>
      <Link href="/Collections" passHref>
        <Button primary>Show Now</Button>
      </Link>
    </Main>
  );
}

export default Home;

// npm i swiper@6.8
// "baseUrl": "./",
// "paths": {
//   "@components/*": [ "src/components/*" ],
//   "@data/*": [ "src/data/*" ],
//   "@hooks/*": [ "src/hooks/*" ],
//   "@lib/*": [ "src/lib/*" ],
//   "@styles/*": [ "src/styles/*" ],
//   "@util/*": [ "src/util/*" ]
// }