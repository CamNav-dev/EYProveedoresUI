'use client';
import Image from 'next/image';
import Button from '@/pages/Landing/Buttons/button';
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter();
  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');};
  return (
    <section className="max-container padding-container flex flex-col lg:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20max-container flex flex-col lg:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 px-4 lg:px-8">
      {/* Columna para texto y botones */}
      <div className="flex-1 flex flex-col justify-start mx-20">
        <h1 className="bold-52 lg:bold-88">EasyConnect</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequuntur dolore, nam sed provident ex voluptatibus accusantium voluptas voluptatem minus laudantium error similique neque asperiores quia illum, placeat, fuga aliquid!
        </p>
        
        {/* Botones y cualquier otro contenido aquí */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            label="Registrarse"
            variant="btn_yellow"
            onClick={handleSignUp}
          />
          <Button
            label="Iniciar sesion"
            variant="btn_yellow"
            onClick={handleLogin}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/supplier2.png" 
          alt="Descripción de la imagen"
          width={500} 
          height={500} 
          objectFit="contain" 
        />
      </div>
    </section>
  );
}

export default Hero;
