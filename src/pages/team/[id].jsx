import Image from "next/image";
import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import GuideDetail from "@/components/pages/GuideDetail";
import TeamDetail from "@/components/pages/TeamDetail";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <TeamDetail />
      </NormalLayout>
    </main>
  );
}
