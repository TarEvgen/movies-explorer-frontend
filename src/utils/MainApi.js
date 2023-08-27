export const BASE_URL = "https://api.tarasov.nomoreparties.sbs";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name:name,  email: email, password: password }),
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
      headers: { 'content-type': 'application/json',
       Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }).then((res) => {
      return getResponseData(res);
    });
  }


function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject("Произошла ошибка");
  }