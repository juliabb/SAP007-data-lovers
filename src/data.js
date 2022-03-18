export const filterGender = (data, condition) =>
  data.filter(
    (characters) => characters.gender.toLowerCase() === condition.toLowerCase()
  );
export const filterSpecies = (data, condition) =>
  data.filter(
    (characters) => characters.species.toLowerCase() === condition.toLowerCase()
  );
export const searchName = (data, condition) =>
  data.filter((characters) =>
    characters.name.toLowerCase().includes(condition.toLowerCase())
  );
export const orderResults = (data, orderScreen) => {
  const newArr = [...data];
  if (orderScreen === "AZ") {
    return newArr.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return newArr.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};
export const percentage = (total, portion) =>
  Math.round((portion * 100) / total);
