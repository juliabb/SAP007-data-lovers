export const filterGender = (data, condition) => {
  const genderResults = data.filter(
    (Characters) => Characters.gender.toLowerCase() === condition.toLowerCase()
  );
  return genderResults;
};

export const filterSpecies = (data, condition) => {
  const resultSpecies = data.filter(
    (Characters) => Characters.species.toLowerCase() === condition.toLowerCase()
  );
  return resultSpecies;
};

export const searchName = (data, condition) => {
  const screenSearch = data.filter((Characters) =>
    Characters.name.toLowerCase().includes(condition.toLowerCase())
  );
  return screenSearch;
};

export const orderResults = (data, orderScreen) => {
  const newArr = [...data];
  if (orderScreen === "AZ") {
    return newArr.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return newArr.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const percentage = (total, portion) => {
  const resultPercentage = Math.round((portion * 100) / total);
  return resultPercentage;
};
