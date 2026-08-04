import CoverImage from "@/src/components/CoverImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex justify-center py-10">
      <div className="w-full max-w-5xl px-4">

        <div className="rounded-3xl border border-zinc-800 bg-[#111111] overflow-hidden">
          <CoverImage/>
        </div>

      </div>
    </main>
  );
}