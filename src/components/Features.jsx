import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

// Bento Card Here and not in Components folders because this is the only place we gonna use it

const BentoCard = ({ src, title, description }) => {

  return(

    <div className='relative size-full'>
      <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
      />

      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>
            {title}
          </h1>
          {description && (

            <p className='mt-3 max-w-64 text-xs md:text-base'>
              {description}
            </p>

          )}
        </div>
      </div>
    </div>
  )
}

export const BentoAnimation = ({ children, className = "" }) => {

  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseOn = (e) => {

    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 50;
    const tiltY = (relativeX - 0.5) * -50;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.9, 0.9, 0.9)`;

    setTransformStyle(newTransform);

  };

  const handleMouseOut = () => {

    setTransformStyle("");

  };

  return (

    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseOn}
      onMouseLeave={handleMouseOut}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>

  );
};

const Features = () => {
  return (

    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>
            They built the world above. You master the one beneath.
          </p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50 '>
            Step into a living myth, a vast, evolving world where ancient legends, divine beasts, and boundless realms intertwine into one seamless journey across reality and dream.
          </p>
        </div>

        <BentoAnimation className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>The D<b>e</b>sti<b>n</b>ed <b>O</b>ne</>}
            description="Wield the power of legends. Become the myth they fear."
          />
        </BentoAnimation>

        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
          <BentoAnimation className='bento-tilt_1 row-span-1 md:col-span-1! md:row-span-2 '>
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>The F<b>o</b>urth Sister</>}
              description="Elegant as moonlight, deadly as a curse, the Fourth Sister weaves beauty and blood into every strike."
            />
          </BentoAnimation>

          <BentoAnimation className='bento-tilt_1 row-span-1 ms-32 md:col-span-1! md:ms-0'>
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>El<b>d</b>er Ji<b>n</b>chi </>}
              description="He chants no prayers now… only curses that shake the heavens."


            />
          </BentoAnimation>

          <BentoAnimation className='bento-tilt_1 me-14 md:col-span-1! md:me-0'>
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>zh<b>u</b> b<b>a</b>ijie</>}
              description="Once cast out of Heaven, now carving his own legend. One swing, one snarl at a time."
            />
          </BentoAnimation>

          <BentoAnimation className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
              <h1 className='special-font bento-title max-w-64 text-black'>
                M<b>o</b>re Co<b>m</b>ing So<b>o</b>n ! hopefully
              </h1>
              <TiLocationArrow
                className='m-5 scale-[5] self-end '
              />
            </div>
          </BentoAnimation>

          <BentoAnimation className='bento-tilt_2'>
            <video
              src='videos/feature-5.mp4'
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
              />
          </BentoAnimation>
        </div>
      </div>
    </section>
  )
}

export default Features
