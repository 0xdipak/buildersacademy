"use client";
import React from "react";
import { LayoutGrid } from "../components/ui/LayoutGrid";

function Gallery() {
  return (
    <section id="gallery" className="h-screen w-full pb-16">
      <div>
        <h1 className="heading text-white">
          <span>Gallery</span>
        </h1>
        <p className="text-sm text-white/70 mt-1">Highlights from our various bootcamps, events, and workshops.</p>
      </div>
      <LayoutGrid cards={cards} />
    </section>
  );
}

const Skeleton = ({ title, description }: any) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <Skeleton
        title="MOU Signing Moment"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/mou1.png",
  },
  {
    id: 2,
    content: (
      <Skeleton
        title="Event By Builders Academy"
        description="Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life."
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/usmeet.jpg",
  },
  {
    id: 3,
    content: (
      <Skeleton
        title="Bitcoin Conference"
        description="A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/btc-2.jpg",
  },
  {
    id: 4,
    content: (
      <Skeleton
        title="Ethereum Development Bootcamp"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/ethereum.jpg",
  },
  {
    id: 5,
    content: (
      <Skeleton
        title="Workshop At Pokhara Engineering College"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/pec-1.jpg",
  },
  {
    id: 6,
    content: (
      <Skeleton
        title="Workshop At Gandaki University"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/gandaki.jpg",
  },
  {
    id: 7,
    content: (
      <Skeleton
        title="Workshop on Blockchain Development"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/pec-2.jpg",
  },
  {
    id: 8,
    content: (
      <Skeleton
        title="Ethereum Development Bootcamp"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/class.jpg",
  },
  {
    id: 9,
    content: (
      <Skeleton
        title="Bitcoin Conference"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/btc.jpg",
  },
];

export default Gallery;
