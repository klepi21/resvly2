import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-32 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium">Έως και 35% αύξηση εσόδων</span>
          </div>
          
          {/* Main Content */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <GradientText>Μεταμορφώστε την Επιχείρησή σας</GradientText>
            <br />
            <span className="text-4xl md:text-6xl opacity-80">με Έξυπνες Κρατήσεις</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-12 max-w-3xl leading-relaxed">
            Ενισχύστε την επιχείρησή σας με το RESVLY - Η ολοκληρωμένη πλατφόρμα κρατήσεων που βελτιστοποιεί τα ραντεβού, ενισχύει την εμπειρία των πελατών και αυξάνει τα έσοδά σας.
          </p>
          
          {/* CTA Button */}
          <div className="mb-20">
            <a href="mailto:info@resvly.gr">
              <Button size="lg" className="group bg-primary/90 hover:bg-primary/80 backdrop-blur-sm text-lg h-14 px-8">
                Κλείστε μια Ζωντανή Επίδειξη
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <GlassCard glowEffect className="text-center py-10">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl font-bold mb-2"><GradientText>30+</GradientText></h3>
                <p className="text-white/60">Ενεργές Επιχειρήσεις</p>
              </div>
            </GlassCard>
            <GlassCard glowEffect className="text-center py-10">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl font-bold mb-2"><GradientText>1M+</GradientText></h3>
                <p className="text-white/60">Κρατήσεις</p>
              </div>
            </GlassCard>
            <GlassCard glowEffect className="text-center py-10">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl font-bold mb-2"><GradientText>98%</GradientText></h3>
                <p className="text-white/60">Ικανοποίηση Πελατών</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}