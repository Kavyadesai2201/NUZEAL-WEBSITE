import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Itinerary from '@/components/Itinerary';
import Events from '@/components/Events';
import Leaderboard from '@/components/Leaderboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Itinerary />
      <Events />
      <Leaderboard />
      <Footer />
    </main>
  );
};

export default Index;
