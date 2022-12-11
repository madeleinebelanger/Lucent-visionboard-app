const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Manifestation= require('../models/Manifestation')
const path = require("path")


module.exports = {

  getManifestation: async (req, res) => {
    try {
      const manifestation = await Manifestation.find({ userId: req.user.id });
      res.render("workshop.ejs", { manifestation: manifestation, user: req.user });
      console.log(manifestation) 

    } catch (err) {
      console.log(err);
    }
  },

  createManifestation: async (req, res) => {
    try{
        await Manifestation.create({
          whatToManifest: req.body.whatToManifest,
          manifestationObstacles: req.body.manifestationObstacles,
          manifestationAction: req.body.manifestationAction,
 

        });
        console.log('Your manifesation has been logged!')
        res.redirect('/profile')
        console.log(req.body.whatToManifest)
        console.log(req.body.manifestationObstacles)
        console.log(req.body.manifestationAction)

    }catch(err){
        console.log(err)
    }
},


//   deleteGratitude: async (req, res)=>{
//     const gratitudeLog = await Gratitude.findById({ _id: req.params.id });

//     try {
//       gratitudeLog.remove()
//       res.redirect("/gratitude");



//     } catch (err) {
//       res.redirect("/gratitude");
//     }
//   },



}







