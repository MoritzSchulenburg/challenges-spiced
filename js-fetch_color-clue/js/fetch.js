import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  // console.log(colorApiUrl);

  try {
    const response = await fetch(colorApiUrl);
    if (response.ok) {
      console.log("bad request");
    } else {
      console.log("goood!");
      const data = await response.json();
      console.log("data", data.name.value);
      console.log("data", data.name.closest_name_hex);
      const name = data.name.value;
      const closest_hex
      setColorToGuess(arg1,arg2)
    }
  } catch (error) {
    console.log(error);
  }
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the closest named color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
}
