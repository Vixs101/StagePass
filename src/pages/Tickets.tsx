import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function TicketCart() {
  const [quantity, setQuantity] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  const handleCheckout = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Add your payment processing logic here
    }, 3000)
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#4bf44d] to-white h-screen flex flex-col justify-between ">
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl md:px-16  md:pt-20">
        <h2 className="text-2xl font-semibold mb-6">Tickets</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">General admission</h3>
              <p className="text-sm text-gray-600">N3.00 service fee</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-lg">N20.00</p>
              <p className="text-sm text-gray-600">On sale</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {quantity > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>General admission x {quantity}</span>
              <span>N{(20 * quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
              <span>Service fees</span>
              <span>N{(3 * quantity).toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>N{(23 * quantity).toFixed(2)}</span>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full mt-2" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
      {/* Processing Payment Modal */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Processing Payment</h3>
              <p className="text-gray-600 text-center">
                Please wait while we process your payment...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
