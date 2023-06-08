import Home from "@/components/pages/home/1.jsx";
import NormalLayout from "@/components/Layouts/NormalLayout";


export default function Page() {
  return (
    <main className=" min-h-screen ">
      <NormalLayout>
        <Home />
      </NormalLayout>
    </main>
  );
}
