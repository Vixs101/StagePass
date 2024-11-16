import NavBar from "../components/NavBar";
import { TiStarburst } from "react-icons/ti";
import { GiPolarStar } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-gradient-to-br from-white via-[#4bf44d] to-white">
      <NavBar />
      {/* hero section */}
      <section className="relative h-screen flex gap-8 px-28 pt-36">
        <div className="z-20 flex flex-col gap-16 pt-20 w-1/2">
          <div className="flex gap-5 flex-col">
            <h1 className="text-5xl font-semibold">
              Experience The Magic of Live Theatre
            </h1>
            <p className="text-2xl">
              Immerse yourself in the world of dance, musicals, drama, and
              poetry with StagePass. Explore our upcoming events today and
              secure your tickets for unforgettable performances.
            </p>
          </div>
          <button className="bg-gray-800 p-4 rounded-sm text-white hover:bg-gray-700 w-1/4">
            Explore
          </button>
        </div>
        {/* fixed background image */}
        <img src="/images/heroImage.webp" alt="hero Image" className="w-5/12 h-4/5" />
      </section>
      {/* schedule */}
      <section className="flex flex-col gap-10 px-28 h-screen">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">Event Schedule</h1>
          <p className="text-xl">Plan your visit</p>
        </div>
        <hr className="h-1 bg-gray-800" />
        <p className="text-3xl w-3/4">
          Check out our event schedule to see when your favorite performances
          are taking place. Be sure to mark your calendar and join us for an
          evening filled with entertainment.{" "}
        </p>
        <hr className="h-1 bg-gray-800 rounded-lg" />
        <div className="flex flex-col pl-32 text-2xl">
          {/* first section */}
          <div className="flex gap-10 mb-6">
            <div className="flex gap-14 w-5/12">
              <GiJusticeStar size={50} />
              <div className="flex flex-col gap-7">
                <h3>Dance</h3>
                <p>Expressive Movements</p>
              </div>
            </div>
            <p className="mt-2 w-2/3">
              From contemporary to traditional dances, our performances showcase
              a range of expressive movements that captivate audiences and tell
              compelling stories through choreography.
            </p>
          </div>
          <hr className="h-1  bg-gray-800 rounded-lg" />
          {/* second section */}
          <div className="flex gap-10 my-6">
            <div className="flex gap-14 w-5/12">
              <TiStarburst size={50} />
              <div className="flex flex-col gap-7">
                <h3>Musicals</h3>
                <p>Harmonious Melodies</p>
              </div>
            </div>
            <p className="mt-2 w-2/3">
              Experience the magic of live musicals with our talented cast and
              crew. Let the harmonious melodies, captivating lyrics, and
              dazzling performances transport you to different worlds.
            </p>
          </div>
          <hr className="h-1 bg-gray-800 rounded-lg" />
          {/* third section */}
          <div className="flex gap-10 mt-6">
            <div className="flex gap-14 w-5/12">
              <GiPolarStar size={50} />
              <div className="flex flex-col gap-7">
                <h3>Drama</h3>
                <p>Intense Narratives</p>
              </div>
            </div>
            <p className="mt-2 w-2/3">
              Get ready for gripping storytelling and powerful acting in our
              dramatic presentations. Explore complex narratives that delve into
              the depths of human emotions and experiences..
            </p>
          </div>
        </div>
      </section>
      <hr className="h-1 bg-gray-800 mx-28 rounded-lg" />
      <footer className="flex justify-between px-28 py-8">
        <h1 className="text-3xl">StagePass</h1>
        <div className="flex gap-20 text-2xl px-10">
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
