import axios from "axios";

export const getImages = async (searchTerm = "code") => {
  try {
    const r = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchTerm}`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001b0e0d52bc159442599cdeaf256d463ac",
        },
      }
    );
    return r.data.photos;
  } catch (e) {
    console.log(e);
  }
};
