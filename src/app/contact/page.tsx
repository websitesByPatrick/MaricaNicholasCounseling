import Card from "@/components/Card";
import { contact } from "@/support/pageData";

const Page = () => {
  return (
    
      <Card image={contact.image} title={contact.title} body={contact.body} />
   
  );
};

export default Page;
