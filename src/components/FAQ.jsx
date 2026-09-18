import { useState } from "react";
import { Plus } from "lucide-react";

function FAQ() {
  const questions = [
    {
      question: "What is Dhyuthi?",
      answer:
        "Dhyuthi is the flagship event of IEEE SCT Student Branch, bringing together technology, innovation and community.",
    },
    {
      question: "Who can participate?",
      answer:
        "Participation details and eligibility will be announced with the official event information.",
    },
    {
      question: "How can I register?",
      answer:
        "Registration details will be added here once the official registration process is announced.",
    },
    {
      question: "Where will Dhyuthi 7.0 take place?",
      answer:
        "Official venue details will be announced soon.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-label">07 — FAQ</div>

      <div className="faq-header">
        <h2 className="split-heading">
          <span className="highlight-text">Questions?</span>
          <span className="muted-text"> We&apos;ve got answers.</span>
        </h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <Plus size={20} />
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;