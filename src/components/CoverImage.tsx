import Image from 'next/image';

export default function CoverImage() {
  return (
    <div className="h-64 w-full overflow-hidden">
      <Image
        src="/header mountain for portfolio.png"
        alt="Portfolio cover header"
        width={1200}
        height={400}
        className="h-full w-full object-cover"
      />
    </div>
  );
}