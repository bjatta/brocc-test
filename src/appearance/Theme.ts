const dayTheme = {
  backgroundColor: "white",
  color: "black",
};

const nightThemde = {
  backgroundColor: "black",
  color: "lightgray",
};

const hour = new Date().getHours();

const isDay = hour > 8 && hour < 18;

export default isDay ? dayTheme : nightThemde;
