import Image from "next/image";
import NavBar from "@/app/component/Navbar";
import { amita } from "../fonts";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="hidden lg:block absolute bottom-[-50px] top-[-50px] lg:right-0 -z-10 bg-[#F8F9FC] lg:w-1/2 lg:h-[calc(100%-20px)]">
        <img
          src="/IMG_2275.JPG"
          alt="Fond de contact"
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      {/* Fond blanc incliné */}
      <div className="absolute -z-5 bg-[#F8F9FC] w-[50px] lg:w-[200px] h-[1500px] lg:h-screen top-0 rotate-90 lg:rotate-3 left-[33%] azerty:left-[38%]"></div>

      <div className="relative flex flex-col items-center p-16">
        <div className="w-full lg:w-[1225px] max-w-6xl lg:flex justify-center items-center gap-[40px] azerty:gap-[200px]">
          {/* Informations de contact */}
          <div className="flex flex-col items-start space-y-6 text-[#243662] w-full lg:w-1/2">
            <div>
              <h1 className={`${amita.className} text-4xl text-black mb-4`}>
                Nous contacter
              </h1>
              <p className="text-lg text-[#243662] italic -mt-4">
                Amélie et Eric
              </p>
            </div>
            <div>
              <p className="text-black">
                Nous sommes là pour répondre à toutes vos questions.
              </p>
              <p className="text-black">N’hésitez pas à nous contacter !</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <img
                src="/icons/email.svg"
                alt="Email Icon"
                width={30}
                height={30}
              />
              <div>
                <p className="text-[#243662] font-bold">E-mail</p>
                <a
                  href="mailto:studio.mazzetta2a@gmail.com"
                  className="text-black"
                >
                  studio.mazzetta2a@gmail.com
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662]"></div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center space-x-4">
              <img
                src="/icons/phone.svg"
                alt="Phone Icon"
                width={30}
                height={30}
              />
              <div>
                <p className="text-[#243662] font-bold">
                  Téléphone <span className="text-sm">(Amélie)</span>
                </p>
                <a href="tel:+33622543281" className="text-black">
                  06 22 54 32 81
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662]"></div>
              </div>
            </div>

            {/* Réservation */}
            <div className="flex items-center space-x-4">
              <img
                src="/Icons_AirBnb.svg"
                alt="Reservation Icon"
                width={30}
                height={30}
              />
              <div>
                <p className="text-[#243662] font-bold">Réserver</p>
                <a href="https://airbnb.com/" className="text-black">
                  Réservation sur Airbnb
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662]"></div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="relative bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3 mt-40 lg:mt-0">
            {/* Image de fond visible en dessous de 1024px */}
            <div className="lg:hidden absolute top-[-50px] bottom-[-50px] left-1/2 transform -translate-x-1/2 -z-10 bg-[#F8F9FC] w-screen h-[calc(100%+100px)]">
              <img
                src="/IMG_2275.JPG"
                alt="Fond de contact"
                className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
              />
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre prénom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  placeholder="Votre message"
                />
              </div>
              <button
                type="submit"
                className="bg-[#243662] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-800"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
