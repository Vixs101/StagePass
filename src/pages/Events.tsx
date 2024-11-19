import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"

export default function Component() {
  const navigate = useNavigate();

  const events = [
    {
      title: "Winter Wonder Dance Performance",
      image: "/images/events1.webp",
      date: "Sat, 07 Dec",
      venue: "TSU Theatre",
      price: "N20",
    },
    {
      title: "Eyes Wide Open: A Theatrical Drama",
      image: "/images/events2.webp",
      date: "Sat, 07 Dec",
      venue: "TSU Black Box Studio",
      price: "N20",
    },
    {
      title: "Poetry Night: Voices of Tomorrow",
      image: "/images/events3.webp",
      date: "Sat, 07 Dec",
      venue: "TSU Outdoor Amphitheater",
      price: "N20",
    },
  ]

  function handleClick(){
    navigate("/events/event-details");
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#4bf44d] to-white">
      <NavBar/>
      <div className="container mx-auto px-4 md:px-20 py-8 md:py-28 ">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center ">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col hover:bg-white p-3 rounded-md transition-colors">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <div className="flex items-center gap-2 mb-2 text-center text-black">
              <span>{event.date}</span>
              <span>|</span>
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                <span className="text-sm">{event.price}</span>
              </span>
            </div>
            <button onClick={handleClick} className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors mt-auto">
              Buy Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}