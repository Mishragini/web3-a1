import Image from "next/image";
import { CreateWallet } from "./_components/CreateWallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateWallet />
    </main>
  );
}
