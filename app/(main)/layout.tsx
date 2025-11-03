import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundLoader from '@/components/BackgroundLoader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundLoader />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

