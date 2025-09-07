"use client";
import React from "react";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  body: Array<string>;
}

const Card = ({ image, title, body }: CardProps) => {
  return (
    <div className="card-component">
      <div className="card-component-image">
        <Image
          src={image}
          alt={title}
          width={450}
          height={1}
          className="object-contain rounded-3xl"
          sizes="(max-width: 100px) 100vw, (max-width: 600px) 50vw, 33vw"
        />
      </div>

      <section className="card-component-section">
        <h2 className="card-component-section-title">{title}</h2>

        {body.map((paragraph, index) => (
          <h3 className="card-component-section-item" key={index}>
            {paragraph}
          </h3>
        ))}
      </section>
    </div>
  );
};

export default Card;
