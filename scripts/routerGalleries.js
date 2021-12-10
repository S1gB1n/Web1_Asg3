/**
 * Author: Erl John Lydzustre
 * 
 * Comp 3612 Assignment #3
 * Instructor: Randy Connolly 
 */

const { response } = require('express');
const data_provider = require('./dataProvider.js');
const data = data_provider.dataGalleries;

const handleAll = app => {
    app.get('/api/galleries', (req, resp) => {resp.json(data)}) 
};

const handleByGalleriesCountry = app => {
    app.get('/api/galleries/:country', (req, resp) => {
        const matches = data.filter(u => u.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());
        if(matches.length > 0)
            resp.json(matches);
        else   
            resp.json({"message": "no galleries for provided country"});
    });
};


module.exports = {
    handleAll, handleByGalleriesCountry
};