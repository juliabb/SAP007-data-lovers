import {
  filterGender,
  filterSpecies,
  searchName,
  orderResults,
  percentage,
} from "../src/data.js";
const sampleCharacters = [
  {
    name: "Million Ants",
    species: "Animal",
    gender: "Male",
  },

  {
    name: "Pickle Rick",
    species: "unknown",
    gender: "Male",
  },

  {
    name: "Beth's Mytholog",
    species: "Mytholog",
    gender: "Female",
  },

  {
    name: "Duck With Muscles",
    species: "Parasite",
    gender: "Male",
  },
];

describe("filterGender", () => {
  it("It should be a function", () => {
    expect(typeof filterGender).toBe("function");
  });

  it("It should filter female gender", () => {
    const expected = filterGender(sampleCharacters, "Female");
    expect(expected).toEqual([
      {
        name: "Beth's Mytholog",
        species: "Mytholog",
        gender: "Female",
      },
    ]);
  });
});

describe("filterSpecies", () => {
  it("It should be a function", () => {
    expect(typeof filterSpecies).toBe("function");
  });

  it("It should filter by animal species", () => {
    const expected = filterSpecies(sampleCharacters, "Animal");
    expect(expected).toEqual([
      {
        name: "Million Ants",
        species: "Animal",
        gender: "Male",
      },
    ]);
  });
});

const charactersNames = [
  { name: "Rich Plutonian" },
  { name: "Cronenberg Morty" },
  { name: "Doom-Nomitron" },
  { name: "Million Ants" },
  { name: "Synthetic Laser Eels" },
  { name: "Hamster In Butt" },
];

const orderAZ = [
  { name: "Cronenberg Morty" },
  { name: "Doom-Nomitron" },
  { name: "Hamster In Butt" },
  { name: "Million Ants" },
  { name: "Rich Plutonian" },
  { name: "Synthetic Laser Eels" },
];

const orderZA = [
  { name: "Synthetic Laser Eels" },
  { name: "Rich Plutonian" },
  { name: "Million Ants" },
  { name: "Hamster In Butt" },
  { name: "Doom-Nomitron" },
  { name: "Cronenberg Morty" },
];

describe("searchName", () => {
  it("It should be a function", () => {
    expect(typeof searchName).toBe("function");
  });

  it("It should filter by name", () => {
    const expected = searchName(charactersNames, "Hamster");
    expect(expected).toEqual([{ name: "Hamster In Butt" }]);
  });
});

describe("orderResults", () => {
  it("It should be a function", () => {
    expect(typeof orderResults).toBe("function");
  });

  it("It should sort by AZ", () => {
    expect(orderResults(charactersNames, "AZ")).toStrictEqual(orderAZ);
  });
  it("It should sort by ZA", () => {
    expect(orderResults(charactersNames, "ZA")).toStrictEqual(orderZA);
  });
});

describe("percentage", () => {
  it("It should be a function", () => {
    expect(typeof percentage).toBe("function");
  });

  it("It should return 75% of males characters ", () => {
    const expected = percentage(sampleCharacters.length, 3);
    expect(expected).toEqual(75);
  });
});
