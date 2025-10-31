import AiSection from '@/components/ai-section';
import BookMeetingSection from '@/components/book-meeting';
import Features from '@/components/features';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Hero from '@/components/hero/hero';
import TrustSection from '@/components/hero/TrustSection';
import PlanSection from '@/components/plains';
import ProcessSection from '@/components/process';
import Testimonials from '@/components/Testimonials';

function LandingPage() {
  return (
    <div className="W-[100%]">
      <div className="w-full sticky top-0 left-0 z-50">
        <Header />
      </div>
      <Hero />
      <TrustSection />
      <Features />
      <AiSection />
      <ProcessSection />
      <Testimonials />
      <PlanSection />
      <BookMeetingSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
