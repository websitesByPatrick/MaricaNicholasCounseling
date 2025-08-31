import Card from "@/components/Card";
import { pageData } from "@/support/pageData";

const Main = () => {
  return (
    <main className="main">
      {pageData.map((section, index) => (
        <Card
          key={index}
          image={section.image}
          title={section.title}
          body={section.textSummary}
          link={section.link }
          index={index} 
        />
      ))}
    </main>
  );
};

export default Main;
