import { useState } from "react";

const questions = [
  {
    id: 1,
    question:
      "1. สิ่งที่ทำให้คุณรู้สึกมีความสุขมากที่สุดคืออะไร? (เลือกได้มากกว่า 1 ข้อ)",
    maxSelect: 2,
    options: [
      "ทำงานที่ได้สร้างสรรค์ผลงานใหม่ๆ",
      "ช่วยเหลือและดูแลผู้อื่น",
      "เรียนรู้สิ่งใหม่ ๆ และค้นคว้าข้อมูล",
      "ทำงานที่ได้ใช้ทักษะและความชำนาญเฉพาะตัว",
      "ทำงานที่ได้พบปะและสื่อสารกับผู้คนมากมาย",
    ],
  },
  {
    id: 2,
    question:
      "2. เวลาที่เจอปัญหา คุณมักจะจัดการอย่างไร? (เลือกได้มากกว่า 1 ข้อ)",
    maxSelect: 2,
    options: [
      "วิเคราะห์เหตุผลและวางแผนแก้ไขอย่างเป็นระบบ",
      "ขอคำปรึกษาจากคนที่เชื่อถือได้",
      "ลองแก้ไขด้วยตัวเองก่อน แล้วค่อยขอความช่วยเหลือถ้าจำเป็น",
      "มองหาวิธีใหม่ ๆ ที่แตกต่างจากเดิม",
      "รอเวลาหรือปล่อยให้สถานการณ์ดีขึ้นเอง",
    ],
  },
  {
    id: 3,
    question: "3. คุณชอบทำงานแบบไหนมากกว่ากัน? (เลือกได้มากกว่า 1 ข้อ)",
    maxSelect: 2,
    options: [
      "งานที่ต้องทำเป็นทีมและร่วมมือกัน",
      "งานที่สามารถทำคนเดียวและมีอิสระในการตัดสินใจ",
      "งานที่ต้องพบปะและพูดคุยกับคนจำนวนมาก",
      "งานที่ต้องเรียนรู้และพัฒนาตัวเองอย่างต่อเนื่อง",
      "งานที่มีความท้าทายและเปลี่ยนแปลงตลอดเวลา",
    ],
  },
  {
    id: 4,
    question:
      "4. ถ้าคุณมีเวลาว่าง คุณชอบใช้เวลาทำอะไร? (เลือกได้มากกว่า 1 ข้อ)",
    maxSelect: 2,
    options: [
      "อ่านหนังสือหรือดูสารคดีเกี่ยวกับความรู้ใหม่ ๆ",
      "พบปะเพื่อนฝูงหรือเข้าร่วมกิจกรรมสังคม",
      "ทำงานอดิเรกที่ต้องใช้ความคิดสร้างสรรค์ เช่น วาดรูป เขียนเพลง",
      "พักผ่อนอย่างสงบ เช่น นั่งสมาธิ เดินเล่นธรรมชาติ",
      "ทำกิจกรรมที่ต้องเคลื่อนไหว เช่น กีฬา ปีนเขา",
    ],
  },
  {
    id: 5,
    question:
      "5. คุณคิดว่าตัวเองมีจุดแข็งในเรื่องไหนมากที่สุด? (เลือกได้มากกว่า 1 ข้อ)",
    maxSelect: 2,
    options: [
      "ความคิดวิเคราะห์และแก้ปัญหา",
      "การสื่อสารและสร้างความสัมพันธ์กับผู้อื่น",
      "ความคิดสร้างสรรค์และจินตนาการ",
      "ความรับผิดชอบและการทำงานอย่างละเอียด",
      "ความยืดหยุ่นและปรับตัวได้ดี",
    ],
  },
];

export default function CareerAdvisor() {
  const [useStep, setStep] = useState(0);
  const [useAnswers, setAnswers] = useState<string[][]>(questions.map(() => []));
  const [useResult, setResult] = useState<string | null>(null);

  const current = questions[useStep];
  const selectedOptions = useAnswers[useStep];
  const maxSelect = current.maxSelect ?? 1;

  const toggleOption = (option: string) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      const selected = newAnswers[useStep];
      if (selected.includes(option)) {
        newAnswers[useStep] = selected.filter((op) => op !== option);
      } else {
        if (selected.length < maxSelect) {
          newAnswers[useStep] = [...selected, option];
        }
      }
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) return;
    if (useStep < questions.length - 1) setStep(useStep + 1);
  };

  const handlePrev = () => {
    if (useStep > 0) setStep(useStep - 1);
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;
    const answerSummary = useAnswers
      .map((ans, i) => `ข้อ ${i + 1}: ${ans.join(", ") || "-"}`)
      .join("\n");
    setResult(
      `วิเคราะห์จากคำตอบ:\n${answerSummary}\n\n=> อาชีพที่เหมาะสม: นักวิเคราะห์ข้อมูล`
    );
  };

  if (useResult) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">
          อาชีพที่เหมาะกับคุณ
        </h2>
        <pre className="whitespace-pre-wrap">{useResult}</pre>
        <button
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => {
            setStep(0);
            setAnswers(questions.map(() => []));
            setResult(null);
          }}
        >
          เริ่มใหม่
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-semibold mb-2">{`คำถามที่ ${useStep + 1} / ${
        questions.length
      }`}</h2>
      <p className="mb-4 text-gray-700 whitespace-pre-wrap">
        {current.question}
      </p>

      <div className="grid grid-cols-1 gap-4 mb-6">
        {current.options.map((opt) => {
          const isSelected = selectedOptions.includes(opt);
          const isDisabled = !isSelected && selectedOptions.length >= maxSelect;

          return (
            <button
              key={opt}
              onClick={() => !isDisabled && toggleOption(opt)}
              className={`py-2 px-4 rounded border font-medium text-left
              ${
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : isDisabled
                  ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }
            `}
              disabled={isDisabled}
              aria-pressed={isSelected}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          disabled={useStep === 0}
          onClick={handlePrev}
        >
          ก่อนหน้า
        </button>

        {useStep < questions.length - 1 ? (
          <button
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
            disabled={selectedOptions.length === 0}
            onClick={handleNext}
          >
            ถัดไป
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
            disabled={selectedOptions.length === 0}
            onClick={handleSubmit}
          >
            ส่งผลลัพธ์
          </button>
        )}
      </div>
    </div>
  );
}
