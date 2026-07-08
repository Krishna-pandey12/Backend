// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(id,callback){
    Favourite.getFavourites((favourites)=>{
      // registeredHomes.push(this);
      if(favourites.includes(id)){
        callback("home is already markd favourite")
      }else{
        favourites.push(id);
        fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
      }
      // fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),(error)=>{
      //   console.log("File writing Concluded",error);
      // }); 
    });

  }
  static getFavourites(callback){
    fs.readFile(favouriteDataPath,(err,data)=>{
      callback(!err ? JSON.parse(data):[]);
    })
  }

};