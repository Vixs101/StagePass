import NavBar from "../components/NavBar";
import { TiStarburst } from "react-icons/ti";
import { GiPolarStar } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 bg-gradient-to-br from-white via-[#4bf44d] to-white">
      <NavBar />
      {/* hero section */}
      <section className="xl:h-screen flex xl:flex-row flex-col justify-between gap-8 md:gap-5 xl:gap-8 p-5 md:px-16 xl:px-28 md:pt-20 xl:pt-36">
        <div className="flex flex-col gap-6 md:gap-16 pt-20 text-center md:text-start xl:w-1/2">
          <div className="flex gap-5 flex-col">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Experience The Magic of Live Theatre
            </h1>
            <p className="text-lg md:text-2xl">
              Immerse yourself in the world of dance, musicals, drama, and
              poetry with StagePass. Explore our upcoming events today and
              secure your tickets for unforgettable performances.
            </p>
          </div>
          <button className="bg-gray-800 p-4 text-white hover:bg-gray-700 w-full md:w-1/2 xl:w-1/4 rounded-md place-self-center xl:place-self-start">
            Explore
          </button>
        </div>
        {/* fixed background image */}
        <img src="/images/heroImage.webp" alt="hero Image" className="xl:w-5/12 md:h-4/5 rounded-md" />
      </section>
      {/* schedule */}
      <section className="flex flex-col gap-10 p-5 md:px-28 xl:h-screen">
        <div className="flex flex-col gap-5 text-center md:text-start">
          <h1 className="text-3xl md:text-5xl font-semibold">Event Schedule</h1>
          <p className="text-lg md:text-xl">Plan your visit</p>
        </div>
        <hr className="h-1 bg-gray-800" />
        <p className="text-lg text-center md:text-start md:text-3xl md:w-3/4">
          Check out our event schedule to see when your favorite performances
          are taking place. Be sure to mark your calendar and join us for an
          evening filled with entertainment.{" "}
        </p>
        <hr className="h-1 bg-gray-800 rounded-lg" />
        <div className="flex flex-col md:pl-32 text-xl md:text-2xl">
          {/* first section */}
          <div className="flex md:flex-row flex-col gap-10 mb-6 ">
            <div className="flex gap-5 md:gap-14 md:w-5/12">
              <GiJusticeStar size={50} className="" />
              <div className="flex flex-col gap-3 md:gap-7">
                <h3>Dance</h3>
                <p>Expressive Movements</p>
              </div>
            </div>
            <p className="mt-2 ml-20 md:ml-0 md:w-2/3">
              From contemporary to traditional dances, our performances showcase
              a range of expressive movements that captivate audiences and tell
              compelling stories through choreography.
            </p>
          </div>
          <hr className="h-1  bg-gray-800 rounded-lg" />
          {/* second section */}
          <div className="flex md:flex-row flex-col gap-10 mb-6 md:mt-5">
            <div className="flex gap-5 md:gap-14 md:w-5/12 mt-12 md:mt-0">
              <TiStarburst size={50} />
              <div className="flex flex-col gap-3 md:gap-7">
                <h3>Musicals</h3>
                <p>Harmonious Melodies</p>
              </div>
            </div>
            <p className="mt-2 ml-20 md:ml-0 md:w-2/3">
              Experience the magic of live musicals with our talented cast and
              crew. Let the harmonious melodies, captivating lyrics, and
              dazzling performances transport you to different worlds.
            </p>
          </div>
          <hr className="h-1 bg-gray-800 rounded-lg" />
          {/* third section */}
          <div className="flex md:flex-row flex-col gap-10 mb-6 md:mt-5">
            <div className="flex gap-5 md:gap-14 md:w-5/12 mt-12 md:mt-0">
              <GiPolarStar size={50} />
              <div className="flex flex-col gap-3 md:gap-7">
                <h3>Drama</h3>
                <p>Intense Narratives</p>
              </div>
            </div>
            <p className="mt-2 ml-20 md:ml-0 md:w-2/3">
              Get ready for gripping storytelling and powerful acting in our
              dramatic presentations. Explore complex narratives that delve into
              the depths of human emotions and experiences..
            </p>
          </div>
        </div>
      </section>
      <hr className="h-1 bg-gray-800 mx-5 md:mx-28 rounded-lg" />
      <footer className="flex md:flex-row flex-col md:justify-between px-10 pb-12 md:px-28 md:py-8 gap-10 md:gap-0">
        <h1 className="font-semibold md:font-normal text-3xl">StagePass</h1>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 text-2xl md:px-10">
          <div>
            <p>+234-333-333</p>
            <p>info@mysite.com</p>
          </div>
          <div>
            <p>ATC, Jalingo 660213,</p>
            <p>Taraba, Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
