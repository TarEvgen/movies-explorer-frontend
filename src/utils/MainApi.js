export const BASE_URL = "https://api.tarasov.nomoreparties.sbs";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const loadDataUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return getResponseData(res);
  });
};

export const editProfile = (inputData) => {
  console.log(inputData, "inputData");
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: inputData.name,
      email: inputData.email,
    }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const getCheckToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return getResponseData(res);
  });
};

export const saveCard = (card, userId) => {
  console.log(userId, "JSON.stringify(card)");
  console.log(
    {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: card.image.formats.thumbnail.url,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      //owner: userId,
    },
    "JSON.stringify(card)"
  );
  //console.log(JSON.parse(card), 'JSON.stringify(card)')

  // if (!isLiked) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },

    body: JSON.stringify({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: card.image.formats.thumbnail.url,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    }),
  }).then((res) => {
    console.log(res);
    return getResponseData(res);
  });
  //  } else {
  /*   return fetch(`${BASE_URL}/movies/${cardId}`, {
        method: 'DELETE',
        headers:  { 'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      }).then((res) => {
        return getResponseData(res);
      });
    }*/
};

export const getSaveCardsMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return getResponseData(res);
  });
};

export const deleteCard = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return getResponseData(res);
  });
};

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject("Произошла ошибка");
}
