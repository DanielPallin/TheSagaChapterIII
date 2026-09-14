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

export default function Lore() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto space-y-24 py-12"
    >
      {/* world map */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-cinzel text-blood uppercase tracking-widest">
          The Known World
        </h1>
        <p className="max-w-2xl mx-auto text-parchment/70 italic">
          "From the frozen cliffs of Umber to the sun-scorched dunes of Medju Sesmet, 
          every corner of Zharuun whispers of what was lost beneath the tide."
        </p>
        
        <div className="relative w-full bg-black/40 border border-blood/20 rounded-sm overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 flex items-center justify-center text-blood/20 font-cinzel text-xl group-hover:text-blood/40 transition-colors -z-10">
            [ World Map Placeholder - Use WebP/AVIF ]
          </div>
          <img 
            src="/Territory-Map.jpg" 
            alt="Map of the World of Zharuun" 
            className="w-full h-auto block opacity-80 hover:opacity-100 transition-opacity duration-700" 
          /> 
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <article className="space-y-6">
          <h2 className="text-3xl font-cinzel text-parchment border-b border-blood/30 pb-2">
            The Pre-History
          </h2>
          <div className="space-y-4 text-lg text-parchment/80 leading-relaxed font-light">
            <p>
              Before the Great Flood, Zharuun was balanced by the <b className="text-parchment font-normal">Thirteen Pharaohs</b>, 
              divine monarchs who ruled through the star-bound weave of existence. 
              Their dominion was absolute, until the betrayal of the Outlanders.
            </p>
            <p>
              One by one, the Pharaohs were deceived and ensnared within golden sarcophagi, 
              then cast into the sunless abyss. 
            </p>
            <p>
              This crime shattered the world’s weave, causing the seas to rise 
              and swallow entire civilizations.
            </p>
          </div>
        </article>

        <article className="space-y-6 bg-blood/5 p-8 border-l-2 border-blood/50">
          <h2 className="text-3xl font-cinzel text-blood drop-shadow-[0_0_10px_rgba(138,3,3,0.3)]">
            The Drowned Court
          </h2>
          <div className="space-y-4 text-lg text-parchment/80 leading-relaxed font-light">
            <p>
              Hundreds of years have passed and history is fading. 
              To the modern world, they are but myths - dismissed as the ramblings of madmen.
            </p>
            <p className="italic text-parchment/90">
              "Scholars and mystics whisper about the Drowned Court" <br/>
              <span className="text-sm font-cinzel text-blood/70 not-italic tracking-widest">[Archive Fragment: 1021]</span>
            </p>
            <p className="italic text-parchment/90">
              "The weave feels vengeful" <br/>
              <span className="text-sm font-cinzel text-blood/70 not-italic tracking-widest">[Archive Fragment: 1025]</span>
            </p>
          </div>
        </article>
      </div>

      <div className="space-y-20 pt-12 border-t border-white/5">
        
        <FadeInSection>
          <article className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 border-l-4 border-blood/30 pl-6 space-y-2">
              <span className="text-blood font-cinzel tracking-[0.3em] text-sm">THE AFTERMATH - CHAPTER I</span>
              <h2 className="text-3xl md:text-4xl font-cinzel text-parchment">The Rebirth of Civilization</h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-lg text-parchment/80 leading-relaxed font-light">
              <p>
                Hundreds of years passed beneath receding tides. Slowly, the shattered remnants of life emerged. 
                The Dwarves of Thulmar unsealed their mountain gates, their craft and greed unbroken by the apocalypse. 
                Indebted to dwarven mercy, the Elves of Calethar retreated into the deep, secretive forests of the west.
              </p>
              <p>
                Beneath the waves, the Aquarians rebuilt their drowned city of Atlantara, while humanity scattered 
                across the barren continents, surviving wherever the unforgiving world allowed. 
                From this fractured world, a new order began to take root in the shadows.
              </p>
              <p>
              The survival of the druidic race remains a profound mystery, their endurance through the Great Flood defying all historical record. 
            </p>
            <p>
              Rumors persist of forbidden magic, ancient rituals, and even primordial oceanic beasts that rose from the depths to offer them sanctuary.
            </p>
            <p>
              Some claim they bargained with the shifting tides, while others whisper that they abandoned the star-bound weave entirely to embrace the crushing silence of the abyss.
            </p>
            </div>
          </article>
        </FadeInSection>

        <FadeInSection>
          <article className="grid md:grid-cols-12 gap-8 items-center bg-blood/5 p-8 border border-blood/10">
            <div className="md:col-span-7 space-y-4 text-lg text-parchment/80 leading-relaxed font-light order-2 md:order-1">
              <p>
                They were once servants, priests, and bankers. For centuries, the <strong>Rothmaiden Dynasty</strong> ruled from behind 
                veils, weaving a spiderweb of infiltration. Through their secret hand, the <em>Order of the Mason Graal</em>, 
                they controlled trade, history, and the very concept of faith.
              </p>
              <p>
                Now, their web is complete. They rule openly. The world bows to Supreme High Royals Drakon and Drakaina Rothmaiden, 
                who enforce their will through fear, debt, horror and manipulation.
              </p>
            </div>
            <div className="md:col-span-5 border-r-4 border-blood/50 pr-6 text-right space-y-2 order-1 md:order-2">
              <span className="text-blood font-cinzel tracking-[0.3em] text-sm">THE SHADOW DYNASTY - CHAPTER II</span>
              <h2 className="text-3xl md:text-4xl font-cinzel text-blood drop-shadow-[0_0_10px_rgba(138,3,3,0.3)]">Rise of the Rothmaidens</h2>
            </div>
          </article>
        </FadeInSection>

        <FadeInSection>
          <article className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 border-l-4 border-parchment/30 pl-6 space-y-2">
              <span className="text-parchment/50 font-cinzel tracking-[0.3em] text-sm">THE PRESENT ERA - CHAPTER III</span>
              <h2 className="text-3xl md:text-4xl font-cinzel text-parchment">The Age of Dominion</h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-lg text-parchment/80 leading-relaxed font-light">
              <p>
                Today, Zharuun exists in a state of fragile peace and open tyranny. In the north, Dwarves control the vital 
                exports through the Goldvein Consortium. To the south, the oceans conceal the mysteries of the Pearl of Atlantara.
              </p>
              <p>
                To maintain their iron grip, the Rothmaidens have commissioned their Blood Architect, Serken, to breed the <strong>Scaleborn</strong> - a genetic servant race designed for obedience, labor, and war.
              </p>
              <p className="italic text-parchment pt-4 border-t border-white/10 mt-4">
                You enter this world not as a chosen hero, but as an ordinary soul: a miner, a scholar, a refugee. 
                Your story begins in the center of open tyranny and fear, but 
                the freedom to choose what kind of world you will build from the ashes.
              </p>
            </div>
          </article>
        </FadeInSection>

      </div>

      {/* footer */}
      <div className="text-center opacity-30 font-cinzel tracking-[0.5em] text-sm pt-24 pb-12">
        VERITAS MANET — TRUTH REMAINS
      </div>
    </motion.section>
  );
}