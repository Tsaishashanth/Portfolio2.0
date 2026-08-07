import Image from 'next/image';

export default function CoverImage() {
  return (
    <div className="relative w-full aspect-[3/1]">
      <Image
        src="/header mountain for portfolio1.png"
        alt="Portfolio cover header"
        fill
        //width={1200}
        //height={400}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}