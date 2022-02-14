export const GetData = (type, data) => {
  let url = "http://127.0.0.1:8000/api/v1/";

  return new Promise((resolve, reject) => {
    fetch(url + type, {
      method: "GET",
      body: JSON.stringify(data),

      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then(function (response) {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
