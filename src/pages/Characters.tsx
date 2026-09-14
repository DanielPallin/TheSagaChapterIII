import { motion } from 'framer-motion';

// character data
const CHARACTERS = [
    // --- HOUSE ROTHMAIDEN & ALLIES ---
    {
      id: "drakon",
      name: "Drakon Rothmaiden",
      lineage: "House Rothmaiden",
      description: "Supreme High Royal who rules openly. His private rituals and whispered prayers are said to invoke 'the gods beyond', entities of thought and hunger that seep into their blood.",
      image: "/images/Drakon-Rothmaiden.png"
    },
    {
      id: "drakaina",
      name: "Drakaina Rothmaiden",
      lineage: "House Rothmaiden",
      description: "Under Supreme High Royals Drakon and Drakaina Rothmaiden, the family stands revealed, no longer content to rule from the shadows. Their ascension marks the end of subtlety and the beginning of dominion.",
      image: "/images/Drakaina-Rothmaiden.png"
    },
    {
      id: "vasuki",
      name: "Vasuki Rothmaiden",
      lineage: "House Rothmaiden",
      description: "A dark scion of the Rothmaiden bloodline, executing the family's will with silent, terrifying precision.",
      image: "/images/Vasuki-Rothmaiden.png"
    },

    // --- COUNCIL ---
    {
        id: "serken",
        name: "Serken",
        lineage: "The Blood Architect",
        description: "The Blood Architect whose experiments promised miracles. He creates the Scaleborn, humanoid hybrids of stone essence, alchemical infusion, and blood.",
        image: "/images/Serken.png"
      },
      {
        id: "varrek",
        name: "Starwatcher Varrek",
        lineage: "The Rothmaiden Council",
        description: "Court astrologer and fiercely loyal servant to the Rothmaidens. He reads the star-bound weave not for enlightenment, but to anticipate and crush any threats to the dynasty's rule.",
        image: "/images/Varrek.png"
      },
      {
        id: "azrakel",
        name: "Blood Seer Azrakel",
        lineage: "The Rothmaiden Council",
        description: "The enigmatic Court Wizard of the High Council. He delves into forbidden magics and whispers with entities beyond the veil to maintain the Rothmaidens' absolute power.",
        image: "/images/Azrakel.png"
      },
      {
        id: "skar",
        name: "Warlord Skar",
        lineage: "The Rothmaiden Council",
        description: "The ruthless Officer of War and Foreign Policy. Sitting upon the High Council, he commands the empire's legions and Scaleborn forces, enforcing the Crown's iron dominion across Zharuun.",
        image: "/images/Skar.png"
      },
  
    // --- HOUSE SERPENTIS & GOLDVEIN ---
    {
      id: "seldric",
      name: "Coinfather Seldric",
      lineage: "House Serpentis",
      description: "A trade oligarch of House Serpentis who believes that gold flows to the patient hand. Head of the Goldvein Consortium.",
      image: "/images/Coinfather-Seldric-Serpentis.png"
    },
    {
      id: "selaris",
      name: "Coinmother Selaris",
      lineage: "House Serpentis",
      description: "A master of the black-ledger banks. House Serpentis controls the World Bank's global transactions, using dwarven credibility as a mask for their own network of speculation and espionage.",
      image: "/images/Coinmother-Selaris.png"
    },
    {
      id: "khadrin",
      name: "Khadrin Goldvein",
      lineage: "House Goldvein / Serpentis",
      description: "The half-human son of Farin Goldvein and Sarah Serpentis. He became both heir and weapon, serving as a living contract binding dwarven labor to human ambition.",
      image: "/images/Khadrin-Goldvein.png"
    },
  
    // --- HOUSE CORNWELL & DORN ---
    {
      id: "leoric",
      name: "Leoric Cornwell",
      lineage: "House Cornwell",
      description: "The patriarch of House Cornwell, known as the Strong Quiet Hand. His strength lies not in swords, but in patience, lineage, and soil.",
      image: "/images/Leoric-Cornwell.png"
    },
    {
      id: "fiona",
      name: "Fiona Cornwell",
      lineage: "House Cornwell",
      description: "A cultivator from Harrowstead, where the soil runs black and rich. She knows that while gold feeds greed, it is grain that feeds nations.",
      image: "/images/Fiona-Cornwell.png"
    },
    {
      id: "aelfred",
      name: "Aelfred Dorn",
      lineage: "House Dorn",
      description: "King of Castle Dorn, who rules in silence and is hollow as the halls he walks. Consumed by remorse, he despises the Rothmaiden dynasty but obeys them to save innocent lives.",
      image: "/images/Aelfred.png"
    },
  
    // --- HOUSE QASMET ---
    {
      id: "rathuun",
      name: "Rathuun",
      lineage: "House Qasmet",
      description: "Blinded by pride and wounded by rejection, Rathuun killed his own wife, blaming her blood for their son’s defiance. Her death marked the turning point of the dynasty’s rulership.",
      image: "/images/Rathuun.png"
    },
    {
      id: "ishra",
      name: "Ishra",
      lineage: "Seraphate Viziers",
      description: "Ishra serves as the oracle of the Seraphate Viziers. Her age and wisdom is superior to the Empress herself, and she is said to have been a guiding hand in the rise of Meziras power.",
      image: "/images/Ishra.png"
    },
    {
      id: "mezira",
      name: "Empress Mezira",
      lineage: "House Qasmet",
      description: "Only sixteen, she was crowned Empress of Sesmet after the death of Rathuuns wife. Bound in secret oaths to the Seraphate Viziers, she wove her influence quietly through the palace corridors.",
      image: "/images/Mezira-Qasmet.png"
    },
    {
      id: "zaruna",
      name: "High Vizier Zaruna",
      lineage: "Seraphate Viziers",
      description: "The secret lover of Empress Mezira who rose to become High Vizier. Beneath the marble and gold of Qasmet's palaces, the true rulers are Mezira and sorceresses of the Seraphate Viziers.",
      image: "/images/High-Vizier-Zaruna.png"
    },
  
    // --- AQUARIANS (HOUSE MARINTHOS) ---
    {
      id: "nerevion",
      name: "Tide-Emperor Nerevion",
      lineage: "House Marinthos",
      description: "An Abyssal Descendant of House Marinthos. He listens to the Pearl of Atlantara, a living relic that binds every Aquarian mind in quiet communion.",
      image: "/images/Tide-Emperor-Nerevion.png"
    },
    {
      id: "saphire",
      name: "Tide-Empress Saphire",
      lineage: "House Marinthos",
      description: "A leader of House Marinthos. For the Aquarians, leadership is a sacred burden, not a crown.",
      image: "/images/Tide-Empress-Saphire.png"
    },
    {
      id: "aqirion",
      name: "Aqirion",
      lineage: "House Marinthos",
      description: "An Aquarian who moves through the depths with the grace of the current itself.",
      image: "/images/Aqirion.png"
    },
    {
      id: "coralia",
      name: "Coralia",
      lineage: "House Marinthos",
      description: "An Aquarian from Atlantara, a radiant city of coral domes, glass spires, and drifting light.",
      image: "/images/Coralia.png"
    },
  
    // --- DRUIDS, ELVES & SCALEBORN ---
    {
      id: "cernarion",
      name: "Cernarion",
      lineage: "House Drunveil",
      description: "One of the rare Dryadborn. He is a druid born of both flesh and forest, whose veins carry the pulse of nature itself.",
      image: "/images/Cernarion-the-Dryadborn.png"
    },
    {
      id: "talon",
      name: "Talon",
      lineage: "House Drunveil",
      description: "Elder of the druids.",
      image: "/images/Talon.png"
    },
    {
      id: "eily",
      name: "Eily",
      lineage: "House Drunveil",
      description: "Grand daughter of Talon Drunveil.",
      image: "/images/Eily.png"
    },
    {
      id: "selvor",
      name: "Selvor",
      lineage: "House Elarion",
      description: "The ruler of the elven city.",
      image: "/images/Selvor.png"
    },
    {
      id: "aethen",
      name: "Aethen",
      lineage: "House Elarion",
      description: "One of three sons of Selvor and Elathra.",
      image: "/images/Aethen.png"
    },
    {
      id: "elfie",
      name: "Elfie",
      lineage: "House Elarion",
      description: "Princess Elfie is the youngest daughter of Selvor and Elathra.",
      image: "/images/Elfie.png"
    },
    {
      id: "sb-23",
      name: "Subject SB-23",
      lineage: "Scaleborn",
      description: "The newest and most successful of Blood Architect Serken's creations. They serve as elite soldiers, laborers, and slaves for the Rothmaiden legions.",
      image: "/images/SB-23.png"
    },
  ];

// cards
const CharacterCard = ({ character, index }: { character: typeof CHARACTERS[0], index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index % 3 * 0.2 }} // Skapar en snygg domino-effekt per rad
    className="bg-abyss border border-blood/20 group relative overflow-hidden flex flex-col"
  >
    {/* 1:1 AR */}
    <div className="relative aspect-square w-full overflow-hidden bg-black/50">
      <div className="absolute inset-0 flex items-center justify-center text-blood/20 font-cinzel text-sm -z-10">
        [ Visual Concept ]
      </div>
      <img 
        src={character.image} 
        alt={`Concept art of ${character.name}`} 
        loading="lazy" // many pics :D
        decoding="async"
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      {}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-abyss to-transparent" />
    </div>

    {/* text */}
    <div className="p-6 grow flex flex-col justify-start relative z-10 -mt-8">
      <span className="text-blood text-xs tracking-[0.3em] font-cinzel uppercase mb-1">
        {character.lineage}
      </span>
      <h3 className="text-2xl font-cinzel text-parchment mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {character.name}
      </h3>
      <p className="text-parchment/70 font-light leading-relaxed">
        {character.description}
      </p>
    </div>
  </motion.article>
);

export default function Characters() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto space-y-16 py-12"
    >
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-cinzel text-blood uppercase tracking-widest">
          Conceptual Entities
        </h1>
        <p className="text-lg text-parchment/80 leading-relaxed font-light">
          A visual exploration of the bloodlines, tyrants, and survivors that shape Zharuun. 
          These AI-generated conceptual manifestations represent the faces behind the lore.
        </p>
        <div className="flex justify-center pt-4" aria-hidden="true">
          <div className="w-24 h-px bg-linear-to-r from-transparent via-blood to-transparent opacity-60" />
        </div>
      </header>

      {/* responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CHARACTERS.map((char, idx) => (
          <CharacterCard key={char.id} character={char} index={idx} />
        ))}
      </div>
      
    </motion.section>
  );
}