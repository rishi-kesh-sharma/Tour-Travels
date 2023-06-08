import { Inter } from "next/font/google";
import NormalLayout from "@/components/Layouts/NormalLayout";
import Blog from "@/components/pages/Blog";

export default function Page() {
  return (
    <main className=" min-h-screen  overflow-hidden ">
      <NormalLayout>
        <Blog />
      </NormalLayout>
    </main>
  );
}
