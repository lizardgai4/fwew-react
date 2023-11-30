import { ListMenu } from "@/types/list";

export const List: ListMenu = {
  WhatValues: [
    { value: "pos", description: "part of speech is, has, etc." },
    { value: "word", description: "starts with, ends with, has, etc." },
    { value: "words", description: "in order of release, first or last" },
    { value: "syllables", description: "number of syllables" },
    { value: "stress", description: "stressed syllable position" },
    { value: "length", description: "length of the word in phonemes" },
  ],
  CondValues: {
    pos: [
      { value: "starts", description: "starts with" },
      { value: "ends", description: "ends with" },
      { value: "is", description: "is" },
      { value: "has", description: "has" },
      { value: "like", description: "is like" },
      { value: "not-starts", description: "does not start with" },
      { value: "not-ends", description: "does not end with" },
      { value: "not-is", description: "is not" },
      { value: "not-has", description: "does not have" },
      { value: "not-like", description: "is not like" },
    ],
    word: [
      { value: "starts", description: "starts with" },
      { value: "ends", description: "ends with" },
      { value: "has", description: "has" },
      { value: "like", description: "is like" },
      { value: "not-starts", description: "does not start with" },
      { value: "not-ends", description: "does not end with" },
      { value: "not-has", description: "does not have" },
      { value: "not-like", description: "is not like" },
    ],
    words: [
      { value: "first", description: "oldest words" },
      { value: "last", description: "newest words" },
    ],
    syllables: [
      { value: "<", description: "less than" },
      { value: "<=", description: "less than or equal to" },
      { value: "=", description: "equal to" },
      { value: ">=", description: "greater than or equal to" },
      { value: ">", description: "greater than" },
      { value: "!=", description: "not equal to" },
    ],
    stress: [
      { value: "<", description: "less than" },
      { value: "<=", description: "less than or equal to" },
      { value: "=", description: "equal to" },
      { value: ">=", description: "greater than or equal to" },
      { value: ">", description: "greater than" },
      { value: "!=", description: "not equal to" },
    ],
    length: [
      { value: "<", description: "less than" },
      { value: "<=", description: "less than or equal to" },
      { value: "=", description: "equal to" },
      { value: ">=", description: "greater than or equal to" },
      { value: ">", description: "greater than" },
      { value: "!=", description: "not equal to" },
    ],
  },
};

export const WhatValues = List.WhatValues.map((item) => item.value);
