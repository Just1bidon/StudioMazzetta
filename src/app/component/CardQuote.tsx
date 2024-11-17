import Image from "next/image";
import { amita } from "../fonts";

type CardProps = {
  title: string;
  subtitle: string;
  quote?: string;
  quote2?: string;
  author?: string;
  phone?: string;
  email?: string;
  photoUrl?: string;
};

export default function CardQuote({
  title,
  subtitle,
  quote,
  quote2,
  phone,
  email,
  photoUrl,
  author,
}: CardProps) {
  return (
    <div className="w-full xl:w-[1225px] bg-white py-8 sm:py-4 xl:py-[30px] px-4 md:px-[100px] lg:px-[30px] xl:px-[100px] rounded-lg shadow-md flex justify-center items-center md:gap-12 xl:gap-36">
      <div
        className={`flex flex-col justify-between ${
          photoUrl ? "w-3/7" : "w-full"
        }`}
      >
        {/* Title */}
        <h2 className={`${amita.className} text-3xl mb-1`}>{title}</h2>
        {/* Subtitle */}
        <h3 className="text-[#243662] italic mb-3 xl:mb-8">{subtitle}</h3>
        {/* Quote */}
        <div className="flex h-min relative">
          <Image
            src="/icons/Guillemet.png"
            alt="quote-left"
            width={50}
            height={50}
            className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]"
          />
          <div className="hidden sm:flex flex-col py-10">
            {quote &&
              quote.split("\n").map((line, index) => (
                <p key={index} className="px-2 md:px-5 text-justify">
                  {line}
                </p>
              ))}
            {author && (
              <p className="absolute bottom-0 right-[75px] text-right text-sm italic text-gray-900">
                - {author} -
              </p>
            )}
          </div>
          <div className="flex sm:hidden flex-col py-6">
            {quote2 &&
              quote2.split("\n").map((line, index) => (
                <p key={index} className="px-2 md:px-5 text-justify">
                  {line}
                </p>
              ))}
            {author && (
              <p className="absolute bottom-0 right-[75px] text-right text-sm italic text-gray-900">
                - {author} -
              </p>
            )}
          </div>
          <Image
            src="/icons/Guillemet.png"
            alt="quote-right"
            width={50}
            height={50}
            className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rotate-180 mt-auto"
          />
        </div>
        {(phone || email) && (
          <div className="mt-6 w-min">
            {/* Phone */}
            {phone && (
              <div className="flex items-center mb-2">
                <Image
                  src="/icons/phone.svg"
                  alt="phone-icon"
                  width={20}
                  height={20}
                />
                <span className="ml-2">{phone}</span>
              </div>
            )}
            {/* Email */}
            {email && (
              <div className="flex items-center">
                <Image
                  src="/icons/email.svg"
                  alt="email-icon"
                  width={20}
                  height={20}
                />
                <span className="ml-2">{email}</span>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Owner Profil Picture */}
      {photoUrl && (
        <div className="max-lg:hidden w-[200px] xl:w-[312px] xl:h-[400px]">
          <Image
            src={photoUrl}
            alt="profil photo"
            width={312}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
