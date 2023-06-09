import { Inter } from "next/font/google";
import About from "@/components/pages/about/1.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden">
      <NormalLayout>
        <About />
      </NormalLayout>
    </main>
  );
}
