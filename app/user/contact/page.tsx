"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {Anton,Merriweather} from "next/font/google";

const anton = Anton({
  subsets:["latin"],
  weight:"400",
});

const merriweather = Merriweather({
  subsets:["latin"],
  weight:"400",
});


const Contact = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalMessage = `
Hello Sumedh, I would like to enquire about your culinary services.

Name: ${name}
WhatsApp: ${whatsapp}

Message:
${message}

Regards,
${name}
    `;

    const url = `https://wa.me/7208631101?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(url, "_blank");

    setName("");
    setWhatsapp("");
    setMessage("");
  };

  return (
    <>
      <div style={{ backgroundImage: "url('/bg3.png')" }} className="h-full w-full">
        <div className="pr-2 md:pr-4 lg:pr-8 h-full md:h-full lg:h-full w-full">
          <div className="bg-white h-full w-full flex flex-col ">
            
            
           <div className="relative w-full h-full py-3 px-2">

  <div className="relative">
  <Image
    src="/contactus.jpg"
    alt="contact"
    height={1500}
    width={3550}
    className="h-[50vh] w-full py-3 px-2 brightness-100"
  />

  {/* TEXT ON IMAGE */}
  <div className="absolute inset-0 flex flex-col lg:pt-40 md:pt-120 md:pl-8 pt-80 justify-start lg:pl-30 pl-5">
    <h1 className="text-white text-4xl font-bold ">CONTACT</h1> 
    <h4 className="text-white text-LG font-MEDIUM mt-1">HOME / CONTACT</h4>
  </div>
</div>


</div>


            
            <div className="grid grid-cols-1 grid-rows-2 gap-2 text-black lg:mt-15 ">
              <div className="flex flex-col justify-center items-center">
                <span className={anton.className + " lg:text-5xl md:text-5xl text-3xl font-bold text-gray-800" }>Contact Information</span>
                <div className="w-50 h-0.5 bg-yellow-400 my-2"></div>
                <span className={merriweather.className + " lg:text-2xl md:text-2xl text-[14px] md:text-[22px] md:px-5 text-center mt-8"}>
                  Get in touch for menu enquiries, private dining, and catering services.
                </span>
              </div>

              
              <div className="bg-white sm:flex md:flex-col lg:flex-row xs:flex-col lg:justify-center lg:items-center  lg:mt-25 lg:mr-20 ">

                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-1 ">

                  <div className="row-span-2 font-bold text-xl flex justify-end pt-2 ">
                  <MapPin className="w-16 h-10  text-amber-600" />
                  </div>
                  
                  <div className={anton.className + " text-xl"}>Address</div>
                  <div className={merriweather.className + " col-start-2"}>Aum Shree Apartments, Karanjade</div> 
                </div>

                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-1  mt-4">
                  <div className="row-span-2 font-bold text-xl flex justify-end pt-2 ">
                  <Phone className="w-16 h-10 text-green-600" /></div>
                  <div className={anton.className + " text-xl"}>Phone</div>
                  <div className={merriweather.className + " col-start-2"}>+91 7208631101</div>
                </div>

                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-1 mr-10 mt-4">
                  <div className="row-span-2 font-bold text-xl flex justify-end pt-2   ">
                  <Mail className="w-16 h-10 text-blue-600" />
                  </div>
                  <div className={anton.className + " text-xl"}>Mail</div>
                  <div className={merriweather.className + " col-start-2"}>sumedhmhtr28@gmail.com</div>
                </div>

              </div>
            </div>

            
            <div className="p-4 mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT DIV — WHATSAPP FORM */}
                <div className=" bg-black p-6 rounded-xl shadow-md border text-white border-gray-200">

                  <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Name */}
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) setName(value);
                      }}
                      className="p-3 border-b-2 text-white border-gray-400 bg-transparent outline-none"
                      required
                    />

                    {/* WhatsApp */}
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      maxLength={10}
                      value={whatsapp}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9]*$/.test(value)) setWhatsapp(value);
                      }}
                      className="p-3 border-b-2 text-white  border-gray-400 bg-transparent outline-none"
                      required
                    />

                    {/* Message */}
                    <textarea
                      rows={4}
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-3 border-b-2 border-gray-400 bg-transparent outline-none"
                      required
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Send on WhatsApp
                    </button>

                  </form>
                </div>

                {/* RIGHT DIV — GOOGLE MAP */}
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9882537428157!2d73.10021940962568!3d18.976126155028368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9de714ee919%3A0xca4bd46914a223f5!2sAum%20Shree%20Apartments!5e0!3m2!1sen!2sin!4v1764730998067!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    className="w-full h-full lg:h-full"
                  ></iframe>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
