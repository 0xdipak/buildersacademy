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
        title="House in the woods"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/amit.jpg",
  },
  {
    id: 2,
    content: (
      <Skeleton
        title="House above the clouds"
        description="Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life."
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/anu.jpg",
  },
  {
    id: 3,
    content: (
      <Skeleton
        title="Greens all over"
        description="A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/ashim.jpg",
  },
  {
    id: 4,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/avatar-1.png",
  },
  {
    id: 5,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/avatar-2.png",
  },
  {
    id: 6,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/avatar-3.png",
  },
  {
    id: 7,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/avatar-4.png",
  },
  {
    id: 8,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/bob.png",
  },
  {
    id: 9,
    content: (
      <Skeleton
        title="Rivers are serene"
        description="A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/assets/mahan.jpg",
  },
];

export default Gallery;
