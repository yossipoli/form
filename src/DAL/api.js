class api {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._data);
      }, 2000);
    });
  }

  set data(newData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this._data = newData;
        localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);
    });
  }

  getItem(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._data[id]);
      }, 2000);
    });
  }

  addItem(newItem) {
    return new Promise((resolve) => {
      setTimeout(() => {
        newItem.id = Object.keys(this._data).length + 1;
        this._data[newItem.id] = newItem;
        localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);
    });
  }

  setItem(id, newItemData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        newItemData.id= id
        this._data[id] = newItemData;
        localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);
    });
  }

  removeItem(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        delete this._data[id];
        localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);
    });
  }
}

const data = {
  1: {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    address: "My House 29, New York",
    course: "Java Script",
    gender: "Male",
    agree: true,
  },
  2: {
    id: 2,
    name: "Dan",
    email: "dan@gmail.com",
    address: "Home 14, Tel-Aviv",
    course: "CSS",
    gender: "Male",
    agree: true,
  },
  3: {
    id: 3,
    name: "Lior",
    email: "lior@gmail.com",
    address: "My House 3, Some City",
    course: "HTML",
    gender: "Female",
    agree: true,
  },
};

const APIdata = JSON.parse(localStorage.getItem("data")) || data;
const Students = new api(APIdata);

export default Students;
