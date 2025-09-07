import { whatIsMentalHealth, howACounselorCanHelp } from "@/support/pageData";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Card
        image={whatIsMentalHealth.image}
        title={whatIsMentalHealth.title}
        body={whatIsMentalHealth.body}
      />

      <Card
        image={howACounselorCanHelp.image}
        title={howACounselorCanHelp.title}
        body={howACounselorCanHelp.body}
      />
    </>
  );
}
