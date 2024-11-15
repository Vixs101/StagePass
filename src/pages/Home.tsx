import NavBar from "../components/NavBar";
import { TiStarburst } from "react-icons/ti";
import { GiPolarStar } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <NavBar />
      {/* hero section */}
      <section className="flex gap-8 px-28">
        <div className="flex flex-col gap-16 pt-20">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl font-semibold">
              Experience The Magic of Live Theatre
            </h1>
            <p className="text-xl">
              Immerse yourself in the world of dance, musicals, drama, and
              poetry with StagePass. Explore our upcoming evens today and secure
              your tickets today for unforgettable performances.
            </p>
          </div>
          <button className="bg-gray-800 p-4 rounded-sm text-white hover:bg-gray-700 w-1/4">
            Explore
          </button>
        </div>
        <img
          src="/images/heroImage.webp"
          alt="A hero image of performers on stage"
          className="w-1/2 "
        />
      </section>
      {/* schedule */}
      <section>
        <div>
          <h1>Event Schedule</h1>
          <p>Plan your visit</p>
        </div>
        <hr />
        <p>
          Check out our event schedule to see when your favorite performances
          are taking place. Be sure to mark your calendar and join us for an
          evening filled with entertainment.{" "}
        </p>
        <hr />
        <div>
          {/* first section */}
          <div>
            <GiJusticeStar />
            <div>
              <h3>Dance</h3>
              <p>Expressive Movements</p>
            </div>
            <p>
              From contemporary to traditional dances, our performances showcase
              a range of expressive movements that captivate audiences and tell
              compelling stories through choreography.
            </p>
          </div>
          {/* second section */}
          <div>
            <TiStarburst />
            <div>
              <h3>Musicals</h3>
              <p>Harmonious Melodies</p>
            </div>
            <p>
              Experience the magic of live musicals with our talented cast and
              crew. Let the harmonious melodies, captivating lyrics, and
              dazzling performances transport you to different worlds.
            </p>
          </div>
          {/* third section */}
          <div>
            <GiPolarStar />
            <div>
              <h3>Drama</h3>
              <p>Intense Narratives</p>
            </div>
            <p>
              Get ready for gripping storytelling and powerful acting in our
              dramatic presentations. Explore complex narratives that delve into
              the depths of human emotions and experiences..
            </p>
          </div>
        </div>
      </section>
      <hr />
      <footer>
      <img src="/images/logo.png" alt="logo" />
      <div>
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
