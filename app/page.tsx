import Image from "next/image";
import Login from "./login/page";
import Outbox from "./components/outbox";

export default function Home() {
  return (
    <main className="min-h-screen select-none">
      <Outbox/>
    </main>
  );
}