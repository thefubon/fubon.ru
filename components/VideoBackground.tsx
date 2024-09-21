import Image from 'next/image'

export default function VideoBackground() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source
          src="/vid2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="w-[300px] ml-[-170px] lg:w-[400px] lg:ml-[-225px]"
          src="/maintenance.png"
          alt="Fubon | Coming Soon"
          width="1521"
          height="1719"
        />
      </div>
    </div>
  )
}
