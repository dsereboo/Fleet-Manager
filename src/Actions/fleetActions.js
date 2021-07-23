export const getCars = () => {
    return (dispatch, state, { getFirestore }) => {
      //async call to firebase to create project and return the result
      const db = getFirestore();
      //add data to firestore collection using the firestore object
      db.collection("fleet").doc("vehicles").collection("cars")
        .onSnapshot((response) => {
          let cars = [];
          response.forEach((item) => {
            cars.push({ ...item.data(), id:item.id });
          });
          dispatch({ type: "GET_CARS", payload: cars });
        }, (err) => {
          //Log for an error
          console.log(err);
        })
    };
  };