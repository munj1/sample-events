import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({
  title,
  date,
  image,
  description,
  location,
  id,
}) {
  const router = useRouter();

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 w-60vw ">
      <div className="-ml-4 -mt-4 grid grid-cols-2 items-center gap-6">
        <div className="ml-4 mt-4 col-span-2 sm:col-span-1">
          <Image
            className="object-center"
            src={image}
            alt="place"
            width={800}
            height={400}
            layout={"responsive"}
            objectFit="cover"
          />
        </div>
        <div className="ml-4 mt-4 col-span-2 sm:col-span-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-900 mt-3">{description}</p>

          <button
            type="button"
            className="mt-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => router.push(`/events/${id}`)}
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}
