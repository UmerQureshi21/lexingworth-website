import Faq from "./Faq";

const faqs = [
  {
    question: "What qualities or skills are you looking for?",
    answer:
      "No. We review and accept applicants (with or without a startup idea).",
  },
  {
    question: "How does the club help me achieve my goals?",
    answer: "We will review candidates on a rolling basis. Earlier is better!",
  },
  {
    question: "What exactly will I learn about investing?",
    answer: "We will review candidates on a rolling basis. Earlier is better!",
  },
  {
    question: "Do I have to attend McMaster in order to join?",
    answer: "We will review candidates on a rolling basis. Earlier is better!",
  },
  {
    question: "When should I apply?",
    answer: "We will review candidates on a rolling basis. Earlier is better!",
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
