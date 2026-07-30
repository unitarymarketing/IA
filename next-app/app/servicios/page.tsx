import ServicesGrid from '@/components/ServicesGrid';

export const metadata = {
  title: 'Nuestros Servicios - Unitary Marketing AI',
  description: 'Conoce nuestros servicios de Automatización, Marketing Digital, Desarrollo Web y Diseño de Portfolios.',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black">
      <ServicesGrid />
    </main>
  );
}
