import { services } from "@/data/servicesData";
import Image from "next/image";
import {Anton,Merriweather} from "next/font/google";

const anton = Anton({
  subsets:["latin"],
  weight:"400",
});

const merriweather = Merriweather({
  subsets:["latin"],
  weight:"400",
});

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetails({ params }: ServicePageProps) {
  
  const { slug } = await params;  

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h1 className="text-center text-red-500 mt-20">Service Not Found</h1>;
  }

  return (
    <div className="p-5 bg-white pt-2 md:pt-3 md:px-4 md:mr-4 pb-2 mr-2 px-1  lg:pt-2 lg:pb-2 lg:mr-8 lg:h-full text-black">
      <h1 className={anton.className + " text-4xl font-bold mt-5 md:mt-5  "}>{service.title}</h1>
      <p className={merriweather.className + " mt-4 text-lg  "}>{service.description}</p>

      <div className="mt-6">
        <Image 
          src={service.image}
          alt={service.title}
          width={1200}
          height={800}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
