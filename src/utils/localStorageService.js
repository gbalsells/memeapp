
class StorageService{

  getItem(key){
    //Pedir el Item, no olvidar su conversión.
    var item = localStorage.getItem(key)
    item = JSON.parse(item)
    return item;
  }

  setItem(key, value){
    //Setear su metodo, no olvidar su conversión
    localStorage.setItem(key, JSON.stringify(value))
  }

}

export default StorageService;