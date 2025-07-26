import mini1 from "@/assets/office/mini1.jpg";
import mini2 from "@/assets/office/mini2.jpg";
import mini3 from "@/assets/office/mini3.jpg";
import mini4 from "@/assets/office/mini4.jpg";
import mini5 from "@/assets/office/mini5.jpg";
import mini6 from "@/assets/office/mini6.jpg";
import mini7 from "@/assets/office/mini7.jpg";
import mini8 from "@/assets/office/mini8.jpg";
import mini9 from "@/assets/office/mini9.jpg";
import mini10 from "@/assets/office/mini10.jpg";
import { OfficePreviewModal } from "./office-preview";
import { useState } from "react";

export const Office = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-r from-primary/80 to-teravita-500/80"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="space-y-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nosso Espaço
          </h2>
          <p className="text-lg text-white max-w-[700px]">
            Nosso consultório foi cuidadosamente planejado para proporcionar
            conforto, acolhimento e bem-estar. Cada detalhe do espaço foi
            pensado para tornar a experiência terapêutica mais tranquila e
            segura.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <div className="space-y-4">
            <div
              onClick={() => handleImageClick(mini1)}
              className="aspect-square rounded-xl bg-primary/10 overflow-hidden cursor-pointer"
            >
              <img
                src={mini1}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini2)}
              className="aspect-[4/3] rounded-xl bg-accent/20 overflow-hidden cursor-pointer"
            >
              <img
                src={mini2}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div
              onClick={() => handleImageClick(mini3)}
              className="aspect-[4/2] rounded-xl bg-primary/10 overflow-hidden cursor-pointer"
            >
              <img
                src={mini3}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini4)}
              className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden cursor-pointer"
            >
              <img
                src={mini4}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini5)}
              className="aspect-[4/2] rounded-xl bg-accent/20 overflow-hidden cursor-pointer"
            >
              <img
                src={mini5}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div
              onClick={() => handleImageClick(mini6)}
              className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden cursor-pointer"
            >
              <img
                src={mini6}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini7)}
              className="aspect-[4/4] rounded-xl bg-accent/20 overflow-hidden cursor-pointer"
            >
              <img
                src={mini7}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div
              onClick={() => handleImageClick(mini8)}
              className="aspect-[4/2] rounded-xl bg-secondary/20 overflow-hidden cursor-pointer"
            >
              <img
                src={mini8}
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini9)}
              className="aspect-[4/3] rounded-xl bg-secondary/20 overflow-hidden cursor-pointer"
            >
              <img
                src={mini9}
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div
              onClick={() => handleImageClick(mini10)}
              className="aspect-[4/2] rounded-xl bg-muted/40 overflow-hidden cursor-pointer"
            >
              <img
                src={mini10}
                alt="Recepção"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <OfficePreviewModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ""}
        onClose={handleCloseModal}
      />
    </section>
  );
};
