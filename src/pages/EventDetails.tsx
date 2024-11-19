import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function EventDetails() {
  const navigate = useNavigate();

  const handleClick= () => {
    navigate("/tickets");
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#4bf44d] to-white ">
      <NavBar />
      <div className="container mx-auto px-4 md:px-20 py-20 md:py-28 flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Winter Wonder Dance Performance
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Sat, 07 Dec | TSU Theatre
        </p>
        <p className="text-lg md:text-normal text-center mb-6">
          Experience the magical winter wonderland through contemporary dance
          and enchanting music. A must-see for all ages!
        </p>
        <div className="flex justify-center mb-8 w-full">
          <Button size={"full"} onClick={handleClick}>Buy Tickets</Button>
        </div>
        <div className="mb-8 w-full">
          <img
            src="/images/events1.webp"
            alt="Winter Wonder Dance Performance Stage"
            className=" w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-4 md:mx-64 max-w-4xl">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Time & Location</h2>
            <p className="mb-2">07 Dec 2024, 12:34 - 14:34</p>
            <p className="flex items-center">
              <MapPin className="mr-2" />
              TSU Theatre, Taraba, Nigeria
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Guests</h2>
            <div className="flex items-center ">
              <Avatar className="h-10 w-10 bg-slate-400 ">
                <AvatarFallback>G1</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 -ml-2 bg-slate-400">
                <AvatarFallback>G2</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 -ml-2 bg-slate-400">
                <AvatarFallback>G3</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm text-gray-600">See All</span>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mx-64">
          <h2 className="text-2xl font-semibold mb-4">About the event</h2>
          <p>Experience an enchanting winter wonderland.</p>
        </div>
        <div className="mb-8 md:mx-64 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          <div className="flex justify-between items-center border-b py-4">
            <div>
              <h3 className="font-semibold">General admission</h3>
              <p className="text-sm text-gray-600">N3.00 service fee</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">N20.00</p>
              <p className="text-sm text-gray-600">On sale</p>
            </div>
          </div>
          <div className="mt-4">
            <Button className="w-full" onClick={handleClick}>Select Ticket</Button>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Share this event</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
