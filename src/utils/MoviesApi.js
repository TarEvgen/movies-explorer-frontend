class MoviesApi {
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
  
    getAllCards() {
      return fetch(`${this._url}`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => {
        return this._checkRes(res);
      });
    }

    _checkRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Произошла ошибка");
    }
  }




  
  export const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "content-type": "application/json",
      
    },
  });