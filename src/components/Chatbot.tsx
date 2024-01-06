"use client"

import { useState, type FormEvent, useRef, useEffect } from "react";

// Define el tipo de mensaje
type Message = {
  type: "bot" | "user";
  text: React.ReactNode;
  id: string;
};

type Props = {
  initialMessage: string;
  answers: Record<string, React.ReactNode>;
}

function Chatbot({ initialMessage, answers }: Props) {

  const [messages, setMessages] = useState<Message[]>(() => initialMessage ? [
    {
      id: "1",
      type: "bot",
      text: initialMessage,
    },
  ] : []);

  // Estado y funciones para el formulario
  const [question, setQuestion] = useState<string>("");
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  // Maneja el envío del formulario
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    toggleLoading(true);
    setMessages((messages) =>
      messages.concat({ id: String(Date.now()), type: "user", text: question })
    );
    setQuestion("");

    const cohereResponse = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
      }),
    });

    const classifications = await cohereResponse.json();




    setMessages((messages) =>
      messages.concat({ id: String(Date.now()), type: "bot", text: answers[classifications[0].prediction as keyof typeof answers] || answers.Default })
    );

    toggleLoading(false);
    console.log(classifications);
  }

  // Hace que la scrollbar se mantenga abajo del todo cuando llegan nuevos mensajes
  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }, [messages]);

  // Renderiza el componente
  return(
      <div className="flex flex-col gap-4 max-w-xl m-auto border rounded-md p-6 pr-1 bg-gray-800/80 border-gray-700 text-white/90">
        <div ref={container} className="flex flex-col gap-4 h-[300px] overflow-y-auto">
          {messages.map(({ id, text, type }) => (
            <div
              key={id}
              className={`rounded-xl p-2 mr-5 max-w-[80%] ${type === "bot"
                  ? "bg-slate-600 rounded-bl-none text-left self-start"
                  : "bg-blue-600 rounded-br-none text-right self-end"
                }`}
            >
              {text}
            </div>
          ))}
        </div>
        <form
          className="flex flex-row items-center mt-4 mr-5"
          onSubmit={handleSubmit}
        >
          <input
            required
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            type="text"
            className="flex-1 w-full rounded-l-md border border-gray-700 bg-gray-800/80 text-white/90 px-4 py-2"
            placeholder="Quién eres?"
            name="question"
          />
          <button
            disabled={isLoading}
            type="submit"
            className={`rounded-r-md border border-blue-700/80 text-white/90 px-4 py-2 font-bold ${isLoading ? "bg-slate-600 cursor-wait" : "bg-blue-600 cursor-pointer"
              }`}
          >
            {isLoading ? "⏳" : "➤"}
          </button>
        </form>
      </div>);
};

export default Chatbot;
