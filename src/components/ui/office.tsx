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
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHAufGAQ9yB8nj2yk16dxYYRLz9KjbX4azk_e8ph8iRxBGSOiej4Fi8lQnWv2CrB4VODBPKRcgwPUTSc5zO2sxau7qrysaPbNIjn0M2ZxnA9ZnacKC-BbMYOiarv-SthsiaSLqig?key=BfO5PGwMP_lQDnMw4kIPwV_E"
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/2] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/2] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHAufGAQ9yB8nj2yk16dxYYRLz9KjbX4azk_e8ph8iRxBGSOiej4Fi8lQnWv2CrB4VODBPKRcgwPUTSc5zO2sxau7qrysaPbNIjn0M2ZxnA9ZnacKC-BbMYOiarv-SthsiaSLqig?key=BfO5PGwMP_lQDnMw4kIPwV_E"
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl bg-primary/10 overflow-hidden">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Consultório"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/4] rounded-xl bg-accent/20 overflow-hidden">
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHAufGAQ9yB8nj2yk16dxYYRLz9KjbX4azk_e8ph8iRxBGSOiej4Fi8lQnWv2CrB4VODBPKRcgwPUTSc5zO2sxau7qrysaPbNIjn0M2ZxnA9ZnacKC-BbMYOiarv-SthsiaSLqig?key=BfO5PGwMP_lQDnMw4kIPwV_E"
                alt="Sala de terapia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/2] rounded-xl bg-secondary/20 overflow-hidden">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-secondary/20 overflow-hidden">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                alt="Espaço infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="aspect-[4/2] rounded-xl bg-muted/40 overflow-hidden">
              <img
                src="https://inpaonline.com.br/wp-content/uploads/2024/12/terapia-infantil-1024x597.jpg"
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
