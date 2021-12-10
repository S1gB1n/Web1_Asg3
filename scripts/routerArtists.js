/**
 * Author: Erl John Lydzustre
 * 
 * Comp 3612 Assignment #3
 * Instructor: Randy Connolly 
 */

const { response } = require('express');
const data_provider = require('./dataProvider.js');
const data = data_provider.dataArtists;

const handleAll = app => {
    app.get('/api/artists', (req, resp) => {resp.json(data)}) 
};

const handleByArtistsCountry = app => {
    app.get('/api/artists/:country', (req, resp) => {
        const matches = data.filter(u => u.Nationality.toLowerCase() == req.params.country.toLowerCase());
        if(matches.length > 0)
            resp.json(matches);
        else   
            resp.json({"message": "no artists for provided country"});
    });
};


module.exports = {
    handleAll, handleByArtistsCountry
};