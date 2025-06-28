import Hero from "../components/Hero";
import NewsletterForm from "../components/NewsletterForm";
import ResourceCard from "../components/ResourceCard";
import ProductCard from "../components/ProductCard";
import StorySection from "../components/StorySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsletterForm />
      <section id="resources" className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="my-6 border-t border-gray-300 w-3/4 mx-auto" />
          <h2 className="text-center text-gray-900 uppercase text-sm tracking-widest mb-6">
            The Path Beyond Anxiety
          </h2>
          <div className="space-y-4">
            <ResourceCard
              icon="🪷"
              title="Non-Dual Understanding"
              description="There is no separate self to be healed and no anxiety 'out there' to overcome. In the light of Advaita, both the sufferer and the suffering are appearances in the one consciousness that you are. Like waves arising from and dissolving back into the ocean, anxious thoughts emerge from and return to your essential nature. When this non-dual truth is recognized, the entire problem of anxiety is seen through. There was never anyone there to be anxious."
            />
            <ResourceCard
              icon="🧘"
              title="Self-Inquiry"
              description="Who is the one who feels anxious? Through the ancient practice of self-inquiry, we investigate the nature of the 'I' that claims to suffer. When you look deeply, you'll discover that thoughts arise in awareness, feelings appear in awareness, but awareness itself remains untouched. You are not the anxious mind, you are the consciousness in which anxiety appears and disappears. This direct seeing is the heart of Advaita Vedanta and the key to lasting freedom."
            />
            <ResourceCard
              icon="😌"
              title="Pure Being"
              description="Your true nature is sat-chit-ananda — existence, consciousness, bliss. This isn't something you become, it's what you've always been beneath the story of being a worried, anxious person. Anxiety is just a temporary modification of consciousness, while you remain as the eternal, unchanging awareness itself. In recognizing this, there's immediate relief. Not because anxiety disappears, but because you realize you were never bound by it."
            />
          </div>
        </div>
      </section>

      <section id="products" className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="my-6 border-t border-gray-300 w-3/4 mx-auto" />
          <h2 className="text-center text-gray-900 uppercase text-sm tracking-widest mb-6">
            Book a Session and Grow Spiritually
          </h2>
          <ProductCard
            icon="✨"
            title="Freedom Session"
            price="£60"
            description="A gentle 45-minute session to finding peace beyond anxious thoughts. We'll explore how Advaita Vedanta can reveal the natural calm that's already present within you, even when life feels overwhelming."
          />
        </div>
      </section>

      <StorySection />
      <Footer />
    </div>
  );
}
