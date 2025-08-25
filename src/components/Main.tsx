import React from "react";
import TextBox from "@/components/TextBox";


const Main = () => {
  return (
    <main className="main">
      <TextBox
        title="About Me"
        body={[
          "Welcome to my page! I'm Marica Nicholas, a dedicated counselor passionate about helping individuals navigate life's challenges and achieve personal growth. With years of experience in providing compassionate, client-centered support, I specialize in guiding people through stress, relationship issues, anxiety, and self-discovery. My approach is rooted in empathy, active listening, and evidence-based techniques tailored to meet each person's unique needs. I believe that everyone has the strength within them to overcome obstacles, and my goal is to empower you to find clarity, build resilience, and create a fulfilling life. Let's work together to reach your goals. ",
          
        ]}
        link="/about"
      />

      <TextBox
        title="Services"
        body={[
          "As a dedicated counselor specializing in both children and adults, I offer a range of tailored therapeutic services designed to support emotional well-being and personal growth. For children, I utilize play therapy, creating a safe and engaging environment where they can express their feelings, process experiences, and develop coping skills through creative play. For adults, I provide individualized counseling that focuses on addressing a variety of challenges such as stress, anxiety, depression, and life transitions. My holistic approach ensures that each client, regardless of age, receives compassionate, evidence-based support to foster resilience and positive change.",
          "More..."
        ]}
      />

      <TextBox
        title="Contact"
        body={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quidem vitae perferendis. Quibusdam dolorum dolore soluta sit, nemo tempora incidunt quasi repellendus adipisci ipsam minus cum voluptas omnis voluptatem delectus?",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quidem vitae perferendis. Quibusdam dolorum dolore soluta sit, nemo tempora incidunt quasi repellendus adipisci ipsam minus cum voluptas omnis voluptatem delectus?",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quidem vitae perferendis. Quibusdam dolorum dolore soluta sit, nemo tempora incidunt quasi repellendus adipisci ipsam minus cum voluptas omnis voluptatem delectus?",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quidem vitae perferendis. Quibusdam dolorum dolore soluta sit, nemo tempora incidunt quasi repellendus adipisci ipsam minus cum voluptas omnis voluptatem delectus? ",
          "More..."
        ]}
      />
    </main>
  );
};

export default Main;
