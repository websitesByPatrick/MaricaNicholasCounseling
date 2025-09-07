"use client";

import React from "react";
import Card from "@/components/Card";
import { about } from "@/support/pageData";


const Page = () => {


  
  return (
    
      <Card
        image={about.image}
        title={about.title}
        body={about.body}

      />
  
  );
};

export default Page;
