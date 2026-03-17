import { amita } from "../fonts";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="hidden lg:block absolute bottom-[-50px] top-[-50px] lg:right-0 -z-10 bg-[#F8F9FC] lg:w-1/2 lg:h-[calc(100%-20px)] transition-all duration-500 ease-in-out">
        <Image
          src="/IMG_landscape/Porto-Vecchio/PortoVecchio10.JPG"
          alt="Fond de contact"
          layout="fill"
          className="object-cover filter brightness-50 blur-sm scale-110 transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Fond blanc incliné */}
      <div className="absolute -z-5 bg-[#F8F9FC] w-[50px] lg:w-[200px] h-[1500px] lg:h-screen top-0 rotate-90 lg:rotate-3 left-[33%] azerty:left-[38%] -translate-y-44 lg:translate-y-0 transition-all duration-500 ease-in-out"></div>

      <div className="relative flex flex-col items-center px-10 pt-16 sm:p-16">
        <div className="w-full lg:w-[1225px] max-w-6xl lg:flex justify-center items-center gap-[40px] azerty:gap-[200px] transition-all duration-500 ease-in-out">
          {/* Informations de contact */}
          <div className="flex flex-col items-start space-y-6 text-[#243662] w-full lg:w-1/2 transition-all duration-500 ease-in-out">
            <div>
              <h1
                className={`${amita.className} text-4xl text-black mb-4 transition-all duration-500 ease-in-out`}
              >
                Me contacter
              </h1>
              <p className="text-lg text-[#243662] italic -mt-4 transition-all duration-500 ease-in-out">
                Amélie
              </p>
            </div>
            <div>
              <p className="text-black transition-all duration-500 ease-in-out">
                Je suis là pour répondre à toutes vos questions.
              </p>
              <p className="text-black transition-all duration-500 ease-in-out">
                N’hésitez pas à me contacter !
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 transition-all duration-500 ease-in-out">
              <Image
                src="/icons/email.svg"
                alt="Email Icon"
                width={30}
                height={30}
                className="transition-all duration-500 ease-in-out"
              />
              <div>
                <p className="text-[#243662] font-bold transition-all duration-500 ease-in-out">
                  E-mail
                </p>
                <a
                  href="mailto:studio.mazzetta2a@gmail.com"
                  className="text-black transition-all duration-500 ease-in-out"
                >
                  studio.mazzetta2a@gmail.com
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662] transition-all duration-500 ease-in-out"></div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center space-x-4 transition-all duration-500 ease-in-out">
              <Image
                src="/icons/phone.svg"
                alt="Phone Icon"
                width={30}
                height={30}
                className="transition-all duration-500 ease-in-out"
              />
              <div>
                <p className="text-[#243662] font-bold transition-all duration-500 ease-in-out">
                  Téléphone <span className="text-sm">(Amélie)</span>
                </p>
                <a
                  href="tel:+33622543281"
                  className="text-black transition-all duration-500 ease-in-out"
                >
                  06 22 54 32 81
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662] transition-all duration-500 ease-in-out"></div>
              </div>
            </div>

            {/* Réservation */}
            <div className="flex items-center space-x-4 transition-all duration-500 ease-in-out">
              <Image
                src="/icons/Icons_AirBnb.svg"
                alt="Reservation Icon"
                width={30}
                height={30}
                className="transition-all duration-500 ease-in-out"
              />
              <div>
                <p className="text-[#243662] font-bold transition-all duration-500 ease-in-out">
                  Réserver
                </p>
                <a
                  href="https://airbnb.com/"
                  className="text-black transition-all duration-500 ease-in-out"
                >
                  Réservation sur Airbnb
                </a>
                <div className="w-[200px] h-[2px] bg-[#243662] transition-all duration-500 ease-in-out"></div>
              </div>
            </div>
          </div>

          {/* Rectangle placeholder pour remplacer le formulaire de contact pour conserver la structure */}
          <div
            aria-hidden="true"
            className="relative hidden md:block h-[560px] w-full lg:w-1/3 mt-40 lg:mt-0"
          >
          </div>
        </div>
      </div>
    </main>
  );
}
