import { FEATURES } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 mb-24">
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex justify-center lg:justify-start py-24">
          <Image
            src="/supplier.jpg"
            alt="phone"
            width={430} // Este valor se puede ajustar para controlar el tamaño de la imagen.
            height={250} // Este valor se puede ajustar para controlar el tamaño de la imagen.
            className="feature-phone"
          />
        </div>

        <div className="z-20 w-full lg:w-1/2 flex flex-col">
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features
