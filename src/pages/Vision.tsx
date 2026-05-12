import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay }}
  >
    {children}
  </motion.div>
);

export default function Vision() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto space-y-32 py-16 px-6"
    >
      {/* hero */}
      <header className="text-center space-y-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl md:text-8xl font-cinzel text-blood uppercase tracking-[0.2em] drop-shadow-[0_0_20px_rgba(138,3,3,0.5)]">
            The Vision
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-cinzel text-parchment/60 italic tracking-widest">
            "You are not chosen — you become."
          </p>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl text-parchment/80 font-light leading-relaxed">
          <p>
            The Saga: Chapter III – is more than a game; it is a mythic dark-fantasy simulation of survival, consequence, and the inevitable cycle of rebirth. 
            Powered by <strong>Unreal Engine 5</strong>, we are crafting a world where the boundary between cinematic immersion and mechanical depth vanishes.
          </p>
          <p>
            In the shadow of the Rothmaiden Dominion, you do not start as a hero of legend. You begin as a survivor—a miner, a scholar, or a refugee—clinging to life in a world that has already forgotten its gods. Your journey is not about following a prophecy, but about reclaiming the will to exist.
          </p>
        </div>
      </header>

      {/* philosophies */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-cinzel text-parchment uppercase tracking-widest">Moral Architecture</h2>
          <p className="text-blood font-cinzel tracking-widest text-sm">The Four Pillars of the Philosophy System</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "The Tyrant",
              path: "Dominance & Order",
              desc: "Rule through fear and absolute dominance. Utilize forced labor and the exploitation of the Scaleborn to achieve exceptional short-term stability. In a world of chaos, you are the only stable variable—but remember, a throne built on fear is surrounded by silent daggers.",
              color: "border-blood/40 bg-blood/5"
            },
            {
              title: "The Leader",
              path: "Responsibility & Trust",
              desc: "Choose to act for others and bear the heavy weight of leadership. Prioritize people over pure efficiency and build a haven through presence and consistency. Alliances form naturally through trust, but the emotional burden of your people's failures is yours alone to carry.",
              color: "border-parchment/40 bg-parchment/5"
            },
            {
              title: "The Builder",
              path: "Systems & Accumulation",
              desc: "Focus on structures, trade, and the flow of resources. Hoard wealth and infrastructure while delegating responsibility to specialists. While your settlement grows wealthy and attracts the finest craftsmen, your people remain replaceable—and they know it.",
              color: "border-blood/20 bg-white/5"
            },
            {
              title: "The Isolationist",
              path: "Withdrawal & Adaptation",
              desc: "Reject grand alliances and favor the shadows of concealment. Use the environment as your defense and prioritize self-reliance over expansion. You gain extreme self-sufficiency and resistance to collapse, but your culture risks stagnation in its silence.",
              color: "border-parchment/20 bg-black/40"
            }
          ].map((philosophy, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className={`p-8 border h-full flex flex-col justify-between transition-all duration-500 hover:border-blood ${philosophy.color}`}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-cinzel text-blood uppercase">{philosophy.title}</h3>
                  <p className="text-xs font-cinzel tracking-widest opacity-50 uppercase">{philosophy.path}</p>
                  <p className="text-parchment/80 font-light leading-relaxed">{philosophy.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* UE5*/}
      <FadeInSection>
        <div className="relative group overflow-hidden border border-blood/30 bg-black">
          <div className="absolute inset-0 bg-linear-to-t from-abyss via-transparent to-transparent z-10" />
          <div className="p-12 md:p-20 relative z-20 space-y-8 text-center">
            <h2 className="text-4xl md:text-6xl font-cinzel text-blood uppercase tracking-[0.3em]">
              The Vessel: Unreal Engine 5
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-parchment/90 font-light leading-relaxed">
              We leverage the full power of UE5 to bring the oppressive atmosphere of Zharuun to life. 
              From the claustrophobic darkness of the <strong>Varngard Mines</strong> to the hyper-realistic, 
              ancient canopies of <strong>Calethar</strong>, every frame is designed to evoke dread and wonder. 
              The Saga is a living world simulation where dynamic weather, lighting, and environmental storytelling 
              react to the legacy you build.
            </p>
            <div className="flex justify-center pt-6 space-x-12 opacity-50 font-cinzel text-xs tracking-[0.5em] uppercase">
              <span>Nanite Fidelity</span>
              <span>Lumen Shadows</span>
              <span>Procedural Vistas</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* systems */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <FadeInSection>
          <div className="space-y-6">
            <h2 className="text-3xl font-cinzel text-parchment border-b border-blood/30 pb-4 uppercase tracking-widest">
              Rebuilding the Wreckage
            </h2>
            <div className="space-y-6 text-parchment/80 font-light leading-relaxed">
              <p>
                Your settlement is the heart of your narrative. Through an extensive basebuilding system, you transform your philosophy into physical form. Structures unlock new storylines, NPC relationships, and global influence.
              </p>
              <p>
                Recruit specialized companions—scholars, blacksmiths, and mystics—who bring their own moral alignments and ideologies to your society. As you rise from a survivor to a leader, every ally you trust and every wall you raise defines the civilization that will inherit the world.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-3xl font-cinzel text-blood border-b border-white/10 pb-4 uppercase tracking-widest">
              Lived Lore
            </h2>
            <div className="space-y-6 text-parchment/80 font-light leading-relaxed">
              <p>
                The story of Zharuun is not told through static text, but through discovery and reconstruction. Lore fragments, ancient relics, and whispers from the shadows are your primary weapons.
              </p>
              <p>
                Uncover the truth behind the Great Flood. As the Drowned Court stirs beneath the tide, slavery grows and the monarchs manipulation, your understanding of history's original flaw, freedom itself will determine your destiny.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* final */}
      <footer className="text-center pt-20">
        <div className="inline-block px-10 py-6 border border-blood/20 bg-blood/5">
          <p className="font-cinzel text-parchment/40 text-sm tracking-[1em] uppercase">
            The Age of Dominion begins here.
          </p>
        </div>
      </footer>
    </motion.section>
  );
}