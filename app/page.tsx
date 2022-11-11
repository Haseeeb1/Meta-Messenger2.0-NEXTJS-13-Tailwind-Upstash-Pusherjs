import { Message } from "../typings";
import ChatInput from "./ChatInput";
import Messagelist from "./Messagelist";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "https://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;
  return (
    <main>
      <Messagelist initialMessages={messages} />
      <ChatInput />
    </main>
  );
}

export default HomePage;
