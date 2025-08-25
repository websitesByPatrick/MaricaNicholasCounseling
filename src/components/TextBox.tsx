import React from 'react'
import Link from 'next/link';

interface TextBoxProps {
  title: string;
  body: string[];
  link?: string;
}

const TextBox = ({title, body, link}: TextBoxProps) => {
  return (
    <section className="text-box">
      <h2 className="text-box-title">{title}</h2>

      {body.map((paragraph, index) => (
        <h3 className="text-box-item" key={index}>
          {paragraph}
        </h3>
      ))}
      {link && <Link className='text-box-link' href={link}>More...</Link>}
    </section>
  );
}

export default TextBox