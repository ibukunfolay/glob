export const PostData = (type, data) => {
  let url = "https://capital-equity.herokuapp.com/";

  return new Promise((resolve, reject) => {
    fetch(url + type, {
      method: "POST",
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
