export type PartOfSpeechType = {
  en: {
    [key: string]: string;
  };
};

export const PartOfSpeech: PartOfSpeechType = {
  en: {
    "vtr.": "Transitive Verb",
    "n.": "Noun",
    "num.": "Number",
    "pn.": "Pronoun",
    "adv.": "Adverb",
    "adj.": "Adjective",
    "vin.": "Intransitive Verb",
    "inter.": "Interrogative",
    "part.": "Particle",
    "adp.": "Adposition",
    "adv., n.": "Adverb, Noun",
    "vtrm.": "Transitive Modal Verb",
    "vim.": "Intransitive Modal Verb",
    "conj.": "Conjunction",
    "sbd.": "Subordinator",
    "n., intj.": "Noun, Interjection",
    "intj.": "Interjection",
    "part., intj.": "Particle, Interjection",
    "prop.n.": "Proper Noun",
    "vin., intj.": "Intransitive Verb, Interjection",
    "adj., n.": "Adjective, Noun",
    "adj., adv.": "Adjective, Adverb",
    "adj., intj.": "Adjective, Interjection",
    "adv., intj.": "Adverb, Interjection",
    "ph.": "Phrase",
    "adj., conj.": "Adjective, Conjunction",
    "inter., intj.": "Interrogative, Interjection",
    "adv., conj.": "Adverb, Conjunction",
    "vin., vtr.": "Intransitive Or Transitive Verb",
  },
};
