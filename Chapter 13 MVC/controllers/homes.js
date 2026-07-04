const Home = require("../models/home");
const registeredHomes = [];
exports.getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to Airbnb',
    currentPage: "addHome"
  });
};



exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const {houseName,price,location,rating,photoUrl}=req.body;
  const home=new Home(houseName,price,location,rating,photoUrl
  
  )
  home.save();
  
  res.render('homeAdded', {
    pageTitle: 'Home Added Successfully'
  });
};
 exports.getHomes=(req, res, next) => {
  const homes=Home.fetchAll();
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
}
exports.registeredHomes = registeredHomes;