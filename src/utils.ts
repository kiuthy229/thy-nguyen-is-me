export const getImageUrl = (path: string): string => {
  try {
    if (!path) {
      throw new Error("Path is undefined or empty");
    }
    const url = new URL(`../assets/${path}`, import.meta.url).href;
    console.log(url);
    return url;
  } catch (error) {
    console.error("Error generating image URL:", error);
    return "";
  }
};