class Session {
  get(key) {
    let data = localStorage.getItem(key);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    }
  }

  set(key, value) {
    if (typeof value == "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  has(key) {
    let data = localStorage.getItem(key);

    if (data) {
      return true;
    }

    return false;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  destroy() {
    localStorage.clear();
  }
}

export default new Session();
