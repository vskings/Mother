import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Layout from '../components/Layout';
import { banner } from '../assets';
import Table from '../components/Table';
import Title from '../components/title';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      <figure className="px-4 my-8">
        <img src={banner} alt="" />
      </figure>
      <div className="flex flex-col px-4 mx-auto ">
        <Title heading={'Latest Bets'} text={'View all bets'} link={'/'} />
        <Table />
      </div>
      <div className="flex flex-col px-4 mx-auto ">
        <Title
          heading={'Open H2H Challenges'}
          text={'View all H2H Challenges'}
          link={'/'}
        />
        <Table />
      </div>
      <div>
        <Title heading={'Why Choose Us'} />
      </div>
    </Layout>
  );
};

export default Homepage;
