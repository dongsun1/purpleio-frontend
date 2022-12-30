import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full justify-between mx-auto" style={{ minHeight: '100vh', width: '600px' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
