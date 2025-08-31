"use client";

import React from "react";
import Card from "@/components/Card";
import { pageData } from "@/support/pageData";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const i = Number(params.index);

  const body = [...pageData[i].textSummary, pageData[i].textExpanded];
  return (
    <div>
      <Card
        image={pageData[i].image}
        title={pageData[i].title}
        body={body}
        link={pageData[i].link}
        index={i}
        isDetail={true}
      />
    </div>
  );
};

export default Page;
