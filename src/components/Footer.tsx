import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-8 overflow-hidden rounded-3xl border border-zinc-800">

      <div className="relative h-48">

        {/* Background Image */}
        <Image
          src="/himalaya footer.png"
          alt=""
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />


        {/* Text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">

          <p className="text-lg font-medium text-white">
            Designed and developed by Shashanth
          </p>


          <p className="mt-2 text-sm text-zinc-300">
            © 2026 All rights reserved
          </p>

        </div>

      </div>

    </footer>
  );
}