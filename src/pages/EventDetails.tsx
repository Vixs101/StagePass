import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { MapPin, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function EventDetails() {
  return (
    <div className="bg-gradient-to-br from-white via-[#4bf44d] to-white ">
      <NavBar />
      <div className="container mx-auto px-4 md:px-20 py-8 md:py-28 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center mb-2">
          Winter Wonder Dance Performance
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Sat, 07 Dec | TSU Theatre
        </p>
        <p className="text-center mb-6">
          Experience the magical winter wonderland through contemporary dance
          and enchanting music. A must-see for all ages!
        </p>
        <div className="flex justify-center mb-8">
          <Button>Buy Tickets</Button>
        </div>
        <div className="mb-8 w-full">
          <img
            src="/images/events1.webp"
            alt="Winter Wonder Dance Performance Stage"
            className=" w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 m-auto">
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
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarFallback>G1</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 -ml-2">
                <AvatarFallback>G2</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 -ml-2">
                <AvatarFallback>G3</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm text-gray-600">See All</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the event</h2>
          <p>Experience an enchanting winter wonderland.</p>
        </div>
        <div className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          <div className="flex justify-between items-center border-b py-4">
            <div>
              <h3 className="font-semibold">General admission</h3>
              <p className="text-sm text-gray-600">+US$3.00 service fee</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">US$20.00</p>
              <p className="text-sm text-gray-600">On sale</p>
            </div>
          </div>
          <div className="mt-4">
            <Button className="w-full">Select Tickets</Button>
          </div>
        </div>
        <div className="mb-8">
          <div className="bg-gray-100 h-64 rounded-lg mb-2">
            {/* Map placeholder */}
            <div className="h-full flex items-center justify-center text-gray-400">
              Map placeholder
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Map
              </Button>
              <Button variant="outline" size="sm">
                Satellite
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="">
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
      <hr className="h-1 bg-gray-800 mx-5 md:mx-28 rounded-lg" />

      <Footer/>
    </div>
  );
}
