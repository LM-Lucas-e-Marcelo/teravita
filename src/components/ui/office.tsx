import office1 from "@/assets/office/office1.jpg";
import office2 from "@/assets/office/office2.jpg";
import office3 from "@/assets/office/office3.jpg";
import office4 from "@/assets/office/office4.jpg";
import office5 from "@/assets/office/office5.jpg";
import office6 from "@/assets/office/office6.jpg";
import office7 from "@/assets/office/office7.jpg";
import office8 from "@/assets/office/office8.jpg";
import office9 from "@/assets/office/office9.jpg";
import office10 from "@/assets/office/office10.jpg";

export const Office = () => {
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
        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="space-y-4">
            <div className="aspect-square rounded-xl bg-primary/10 overflow-hidden">
              <img
                src={office1}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src={office2}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/2] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src={office3}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src={office4}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/2] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src={office5}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src={office6}
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/4] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src={office7}
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/2] rounded-xl bg-secondary/20 overflow-hidden">
              <img
                src={office8}
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-secondary/20 overflow-hidden">
              <img
                src={office9}
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/2] rounded-xl bg-muted/40 overflow-hidden">
              <img
                src={office10}
                alt="Recepção"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
