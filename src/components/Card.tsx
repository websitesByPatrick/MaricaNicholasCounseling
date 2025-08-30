import React from "react";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  body: string[];
  link: string;
}

const Card = ({ image, title, body, link }: CardProps) => {
  return (
    <div className="w-3/4 flex mt-10 bg-amber-50 p-5 rounded-2xl shadow-lg">
      <div className="w-1/4 relative m-5">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <section className="w-3/4">
        <h2 className="text-box-title">{title}</h2>

        {body.map((paragraph, index) => (
          <h3 className="text-box-item" key={index}>
            {paragraph}
          </h3>
        ))}
        {link && (
          <Link className="text-box-link" href={link}>
            More...
          </Link>
        )}
      </section>
    </div>
  );
};

export default Card;
