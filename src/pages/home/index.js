/*
 *
 * Home
 *
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MenuProvider } from '../../providers';
import NavBar from '../../components/navBar';
import PromotionCard from '../../components/promotionCard';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      const { error, result, ok } = await MenuProvider.getMenu();
      console.log(`error`, error);
      if (error) {
        return console.log(`error`, error);
      }

      if (result && ok) {
        setMenu(result);
      }
    };

    getMenu();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Description of Home' />
      </Helmet>
      {/* <PromotionCard promoInfo={menu}/> */}
      <NavBar menu={menu} onSelect={setActiveIndex}activeIndex={activeIndex} />
    </div>
  );
}

export default Home;

Home.propTypes = {};
