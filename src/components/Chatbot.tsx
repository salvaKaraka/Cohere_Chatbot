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
  return (
    <div className="flex flex-col gap-4 max-w-xl m-auto border rounded-md p-6 pr-1 border-violet-500/40 bg-neutral-900/50 text-white/90">
      <div ref={container} className="flex flex-col gap-4 h-[300px] overflow-y-auto">
        {messages.map(({ id, text, type }) => (
          <div
            key={id}
            className={`rounded-xl p-2 mr-5 max-w-[80%] ${type === "bot"
              ? "bg-white/10 rounded-bl-none text-left self-start"
              : "bg-violet-500 rounded-br-none text-right self-end"
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
          className="outline-none flex-1 w-full rounded-l-md border border-violet-500 bg-white/10 focus:bg-white/20 px-4 py-2"
          placeholder="What do you do for a living?"
          name="question"
        />
        <button
          disabled={isLoading}
          type="submit"
          className={`rounded-r-md border border-violet-500 hover:border-violet-700 px-4 py-2 font-bold ${isLoading ? "bg-white/10 cursor-wait" : "bg-violet-500 hover:bg-violet-700 cursor-pointer"
            }`}
        >
          {isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>}
        </button>
      </form>
    </div>);
};

export default Chatbot;
