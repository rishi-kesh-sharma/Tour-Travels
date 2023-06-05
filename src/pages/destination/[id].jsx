import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import Destination from "@/components/pages/Destination.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Destination />
      </NormalLayout>
    </main>
  );
}
