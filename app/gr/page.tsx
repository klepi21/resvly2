import { Hero } from "@/components/sections/hero-gr";
import { Mockups } from "@/components/sections/mockups-gr";
import { Calendar, BarChart3, Users, Clock, Shield, Smartphone, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-black">
      <Hero />
      <Mockups />

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <GradientText>Όλα όσα Χρειάζεστε για να Πετύχετε</GradientText>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="w-12 h-12" />}
              title="Έξυπνος Προγραμματισμός"
              description="Έξυπνο σύστημα κρατήσεων που αποτρέπει τις διπλές κρατήσεις και βελτιστοποιεί αυτόματα το ημερολόγιό σας."
            />
            <FeatureCard 
              icon={<Smartphone className="w-12 h-12" />}
              title="Mobile Web App"
              description="Δώστε στους πελάτες σας την ελευθερία να κάνουν κρατήσεις οποιαδήποτε στιγμή, οπουδήποτε."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-12 h-12" />}
              title="Προηγμένα Analytics"
              description="Αποκτήστε πολύτιμες πληροφορίες για την απόδοση της επιχείρησής σας με λεπτομερείς αναφορές."
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12" />}
              title="Διαχείριση Πελατών"
              description="Χτίστε ισχυρότερες σχέσεις με ενσωματωμένες λειτουργίες CRM και προφίλ πελατών."
            />
            <FeatureCard 
              icon={<Clock className="w-12 h-12" />}
              title="24/7 Κρατήσεις"
              description="Μη χάσετε ποτέ μια ευκαιρία με δυνατότητες αυτοματοποιημένων κρατήσεων όλο το 24ωρο."
            />
            <FeatureCard 
              icon={<Shield className="w-12 h-12" />}
              title="Ασφαλές & Αξιόπιστο"
              description="Ασφάλεια επιχειρησιακού επιπέδου που διασφαλίζει την προστασία των δεδομένων σας."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-32 relative">
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <GradientText>Ιδανικό για Κάθε Επιχείρηση</GradientText>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <IndustryCard icon={<Store />} title="Κομμωτήρια" />
            <IndustryCard icon={<Store />} title="Ινστιτούτα Αισθητικής" />
            <IndustryCard icon={<Store />} title="Γυμναστήρια" />
            <IndustryCard icon={<Store />} title="Ιατρεία" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <GradientText>Απλή, Διάφανη Τιμολόγηση</GradientText>
          </h2>
          <p className="text-xl text-white/60 text-center mb-20 max-w-2xl mx-auto">
            Και παίρνουμε μόνο έως 5% από τα αναβαθμισμένα έσοδά σας
          </p>
          <div className="flex justify-center">
            <a href="mailto:info@resvly.gr">
              <Button size="lg" className="group bg-primary/90 hover:bg-primary/80 backdrop-blur-sm text-lg h-14 px-8">
                Κλείστε μια Ζωντανή Επίδειξη
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <GlassCard className="max-w-4xl mx-auto py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText>Έτοιμοι να Μεταμορφώσετε την Επιχείρησή σας;</GradientText>
            </h2>
            <p className="text-xl mb-12 text-white/60 max-w-2xl mx-auto">
              Ενταχθείτε στις χιλιάδες επιχειρήσεις που εμπιστεύονται το RESVLY για τη διαχείριση των κρατήσεών τους.
            </p>
            <a href="mailto:info@resvly.gr">
              <Button size="lg" className="group bg-primary/90 hover:bg-primary/80 backdrop-blur-sm text-lg h-14 px-8">
                Κλείστε μια Ζωντανή Επίδειξη
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <GlassCard glowEffect className="group">
      <div className="mb-6 relative">
        <div className="absolute -inset-2 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative text-primary">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">
        <GradientText>{title}</GradientText>
      </h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </GlassCard>
  );
}

function IndustryCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <GlassCard glowEffect className="group text-center py-8">
      <div className="mb-4 flex justify-center relative">
        <div className="absolute -inset-2 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative text-primary w-12 h-12">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold">
        <GradientText>{title}</GradientText>
      </h3>
    </GlassCard>
  );
}