<<<<<<< HEAD
import React from 'react';
import '../fonts/stylesheet.css';

import Text from '../Components/Text';
import Subtitle from '../Components/Subtitle';
||||||| parent of 91371d5... Add Hero Component
import React from "react";
import Text from "../Components/Text";
import Subtitle from "../Components/Subtitle";
=======
import React from "react";

import Text from "../Components/Text";
import Subtitle from "../Components/Subtitle";
>>>>>>> 91371d5... Add Hero Component
import Image from '../Components/Image';
import Input from '../Components/Input';
import ApplyLink from '../Components/Link';
import Quote from '../Components/Quote';
import Title from '../Components/Title';
import Avatar from '../Components/Avatar';
import Footerlink from '../Components/Footer/Link';
import NavigationLink from '../Components/Navigation/Link';
import FooterLabel from '../Components/Footer/FooterLabel';
import TndsLogo from '../Components/Logo';
import Label from '../Components/Label';
import Icons from '../Components/Icons';
<<<<<<< HEAD
import Layout from './Layout';
import Footer from '../Components/Footer';
||||||| parent of 91371d5... Add Hero Component
=======
import Hero from '../Components/Hero';
>>>>>>> 91371d5... Add Hero Component

export default () => (
<<<<<<< HEAD
  <Layout>
||||||| parent of 91371d5... Add Hero Component
  <div>
=======
  <div>
    <Hero/>
>>>>>>> 91371d5... Add Hero Component
    <Image src="http://via.placeholder.com/400x450" alt="Alternate Text" />
    <Input label="Input Label" type="text" />
    <Label>This is Label</Label>

    <ApplyLink classname="ApplyLink ApplyLink--home" LinkUrl="#">Apply Now </ApplyLink>
    <Quote>
      In the school there is not a typical day, like, you always have a different activies, but the
      good thing is that you can decide which activities you want to be involved with.
    </Quote>
    <Title propTitle="Shit, It's Working" />
    <Avatar src="https://unsplash.it/1200/800/?random" />
    <FooterLabel>This is a fooooooter label</FooterLabel>
    <Footerlink
      linkurl=""
      linklabel="Founders Founders Rua da Constituição 346 4200-192 Porto, Portugal"
    />
    <NavigationLink linkurl="" linklabel="ABOUT US" />
    <TndsLogo>why we do what we do</TndsLogo>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus faucibus erat vel
      suscipit. Pellentesque molestie sapien eu dolor bibendum, blandit blandit enim gravida.
      Phasellus et eros diam. Aenean elementum orci sem, id malesuada massa feugiat vitae. Phasellus
      nunc diam, suscipit eleifend diam id, gravida ultrices leo. Donec posuere felis orci, vel
      hendrerit ligula vestibulum ac. Integer blandit at augue eget congue.
    </Text>
    <Subtitle>This is a subtitle</Subtitle>
    <Icons />
    <Footer />
  </Layout>
);
