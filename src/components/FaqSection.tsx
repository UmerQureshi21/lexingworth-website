import Faq from "./Faq";

const faqs = [
  {
    question: "What qualities or skills are you looking for?",
    answer:
      "We look for students who are curious about markets, willing to learn, and committed to improving their analytical thinking. Prior finance experience is not required, discipline, curiosity, and a strong work ethic matter most.",
  },
  {
    question: "How does the club help me achieve my goals?",
    answer:
      "Lexingworth provides hands-on investment experience, mentorship, technical training, and exposure to industry professionals. Members build real skills in research, financial modeling, and pitching ideas—preparing them for careers in finance and investing.",
  },
  {
    question: "What exactly will I learn about investing?",
    answer:
      "Members learn how to analyze companies, understand financial statements, evaluate industries, build valuation models, and present investment theses. The focus is on practical, real-world investing skills.",
  },
  {
    question: "Do I have to attend McMaster in order to join?",
    answer:
      "While most of our members are McMaster students, we welcome passionate individuals from other universities who are serious about learning investing and contributing to the community.",
  },
  {
    question: "When should I apply?",
    answer:
      "Applications typically open at the beginning of each academic term. We encourage interested candidates to apply early and stay connected with our updates",
  },
];

export default function FaqSection() {
  return (
    <div className="relative bg-white w-full flex flex-col items-center pb-[150px]  pt-[50px] sm:pt-[100px]">
      <h1 className="w-full text-center text-[70px] text-[var(--color-primary)] font-bold">
        FAQs
      </h1>
      <div className="flex flex-col w-[80%] items-center justify-center items-center mt-[35px] border-b-[1px] pb-[20px] border-b-[rgba(0,0,0,0.2)]">
        {faqs.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
