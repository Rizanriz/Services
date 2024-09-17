import React from 'react';
import Card from './Card';

const cardDatas = [
  {
    title: "Project One",
    description: "This is an awesome project built with Next.js and GSAP.",
    image: "https://via.placeholder.com/150",
    link: "https://yourwebsite.com/project-one"
  },
  {
    title: "Project Two",
    description: "Check out this amazing project built using Framer Motion.",
    image: "https://via.placeholder.com/150",
    link: "https://yourwebsite.com/project-two"
  },
  {
    title: "Project Three",
    description: "Explore this creative project featuring beautiful animations.",
    image: "https://via.placeholder.com/150",
    link: "https://yourwebsite.com/project-three"
  },
  {
    title: "Project Four",
    description: "A simple project showcasing great UI/UX design.",
    image: "https://via.placeholder.com/150",
    link: "https://yourwebsite.com/project-four"
  }
];

const cardData = () => {
  return (
    <div className="flex gap-1">
      {cardDatas.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default cardData;
