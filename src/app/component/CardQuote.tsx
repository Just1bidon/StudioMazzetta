import Image from "next/image";
import { amita } from "../fonts";

type CardProps = {
  title: string;
  subtitle: string;
  quote: string;
  author?: string;
  phone?: string;
  email?: string;
  photoUrl?: string;
};

export default function CardQuote({
  title,
  subtitle,
  quote,
  phone,
  email,
  photoUrl,
  author,
}: CardProps) {
  return (
    <div className="w-[1225px] bg-white py-[30px] px-[100px] rounded-lg shadow-md flex justify-center items-center gap-36">
      <div className={`flex-shrink-0 flex flex-col justify-between ${photoUrl ? "w-3/7" : "w-full"}`}>
        <h2 className={`${amita.className} text-3xl mb-1`}>{title}</h2>
        <h3 className="text-[#243662] italic mb-8">{subtitle}</h3>
        <div className="flex h-min relative">
          <div className="w-[50px]">
            <Image
              src="/Guillemet.png"
              alt="quote-left"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
          </div>
          <p className={`${photoUrl ? "w-[467px]" : "w-full"} px-5 my-6 text-justify`}>{quote}</p>
          {author && (
            <p className="absolute bottom-0 right-[75px] text-right text-sm italic text-gray-900">
              - {author} -
            </p>
          )}
          <div className="w-[50px] flex items-end">
            <Image
              src="/Guillemet.png"
              alt="quote-right"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rotate-180 b-0"
            />
          </div>
        </div>
        {(phone || email) && (
          <div className="mt-6 w-min">
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
      {photoUrl && (
        <div className="w-[312px] h-[400px] flex-shrink-0">
          <Image
            src={photoUrl}
            alt="profile photo"
            width={312}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
