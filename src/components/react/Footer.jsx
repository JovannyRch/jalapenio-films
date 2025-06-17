import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer class="min-h-[100px] mx-auto p-4 bg-white flex justify-center">
      <div class="container p-8 text-black font-arimo">
        <div class="flex flex-col md:flex-row justify-center items-center gap-2 font-md md:text-md text-sm">
          <div class="font-3xl">© Jalapeño Films {year}</div>
          <div class="hidden md:block h-6 w-[0.7px] bg-black"></div>
          <div class="cursor-pointer">Términos y condiciones</div>
          <div class="hidden md:block h-6 w-[0.7px] bg-black"></div>
          <div class="cursor-pointer">Políticas de privacidad</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
