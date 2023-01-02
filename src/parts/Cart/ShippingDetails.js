import React from 'react'

export default function ShippingDetails() {
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="px-4 py-6 bg-gray-100 md:p-8 md:rounded-3xl">
              <form action="success.html">
                <div className="flex mb-6 flex-start">
                  <h3 className="text-2xl">Peminjaman Barang</h3>
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="mb-2 text-sm"
                    >Complete Name</label
                  >
                  <input
                    data-input
                    type="text"
                    id="complete-name"
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your name"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="email" className="mb-2 text-sm">Email Address</label>
                  <input
                    data-input
                    type="email"
                    id="email"
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your email address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="address" className="mb-2 text-sm">Address</label>
                  <input
                    data-input
                    type="text"
                    id="address"
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="phone-number" className="mb-2 text-sm"
                    >Phone Number</label
                  >
                  <input
                    data-input
                    type="tel"
                    id="phone-number"
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your phone number"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="mb-2 text-sm"
                    >Choose Courier</label
                  >
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="fedex"
                        data-name="courier"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-fedex.svg"
                          alt="Logo Fedex"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="dhl"
                        data-name="courier"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-dhl.svg"
                          alt="Logo dhl"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="mb-2 text-sm"
                    >Choose Payment</label
                  >
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="midtrans"
                        data-name="payment"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-midtrans.png"
                          alt="Logo midtrans"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="mastercard"
                        data-name="payment"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-mastercard.svg"
                          alt="Logo mastercard"
                        />
                      </button>
                    </div>
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="bitcoin"
                        data-name="payment"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-bitcoin.svg"
                          alt="Logo bitcoin"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        data-value="american-express"
                        data-name="payment"
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src="./images/content/logo-american-express.svg"
                          alt="Logo american-logo-american-express"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled
                    className="w-full px-6 py-3 text-lg text-black transition-all duration-200 bg-pink-400 rounded-full hover:bg-black hover:text-pink-400 focus:outline-none focus:text-black"
                  >
                    Checkout Now
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}
