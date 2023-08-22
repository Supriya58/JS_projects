//axios using .then and .catch
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Response: ", res);
//   })
//   .catch((e) => {
//     console.log("Error! ", e);
//   });

//axios using async and await
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log("Response:", res.data);
  } catch (e) {
    console.log("Error", e);
  }
};
getStarWarsPerson(6);
