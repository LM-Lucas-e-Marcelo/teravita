import { Instagram, Facebook, MapPin } from "lucide-react";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMapPin2Line,
} from "react-icons/ri";

export const SocialMedias = () => {
  return (
    <ul className="flex gap-3 text-white">
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.instagram.com/clinica.teravita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine size={30} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.facebook.com/clinica.teravita"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxLine size={30} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://wa.me/5521964441924"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappLine size={30} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.google.com/maps/place/Cl%C3%ADnica+de+Terapias+TeraVita/@-22.9266286,-43.2332379,15z/data=!4m6!3m5!1s0x997f8d5b95d6bb:0x7b506e811b13f4c2!8m2!3d-22.9266286!4d-43.2332379!16s%2Fg%2F11vws2fbv9?entry=tts&g_ep=EgoyMDI0MDYyNi4wKgBIAVAD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMapPin2Line size={30} />
        </a>
      </li>
    </ul>
  );
};
