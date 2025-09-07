import Card from "@/components/Card";
import { services } from "@/support/pageData";

const Page = () => {
  return (
    
      <Card image={services.image} title={services.title} body={services.body} />
  
  );
};

export default Page;
