/**
 * Author: Erl John Lydzustre
 * 
 * Comp 3612 Assignment #3
 * Instructor: Randy Connolly 
 */


const { response } = require('express');
const data_provider = require('./dataProvider.js');
const data = data_provider.dataPaintingsNested;

const handleAll = app => {
    app.get('/api/paintings', (req, resp) => { resp.json(data) })
};

const handleById = app => {
    app.get('/api/painting/:id', (req, resp) => {
        const matches = data.filter(u => u.paintingID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no paintings-nested for provided ID" });
    });
};

const handleByPaintingGalleryId = app => {
    app.get('/api/painting/gallery/:id', (req, resp) => {
        const matches = data.filter(u => u.gallery.galleryID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no paintings/gallery-nested for provided ID" });
    });
};

const handleByPaintingArtistId = app => {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const matches = data.filter(u => u.artist.artistID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no paintings/artist-nested for provided ID" });
    });
}

const handleByPaintingYearMinMax = app => {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const matches = data.filter(u => u.yearOfWork >= req.params.min && u.yearOfWork <= req.params.max);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no paintings/Year-nested for provided Min and Max" });
    });
}

const handleByPaintingTitleText = app => {
    app.get('/api/painting/title/:text', (req, resp) => {
        const matches = data.filter(u => u.title.toLowerCase() == req.params.text.toLowerCase());
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no painting/title-nested for provided text" });
    });
}

const handleByPaintingColorName = app => {
    app.get('/api/painting/color/:name', (req, resp) => {

        const matches = data.filter(u => 
             
            u.details.annotation.dominantColors.filter(
                w => w.name.toLowerCase() == req.params.name.toLowerCase()                           
            ).length  > 0 
        
        );

            /*{
                var dominantColor = u.details.annotation.dominantColors;
                return dominantColor.filter(o => o.web.toLowerCase() == `#${req.params.name.toLowerCase()}`);


            //console.log("annotation is ", u.details.annotation.dominantColors);
            //return false;
            });*/
            
            //u.details.annotation.dominantColors[].toLowerCase() == `#${req.params.name.toLowerCase()}`);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({ "message": "no painting/color-nested for provided name" });
    });
}


module.exports = {
            handleAll,
            handleById,
            handleByPaintingGalleryId,
            handleByPaintingArtistId,
            handleByPaintingYearMinMax,
            handleByPaintingTitleText,
            handleByPaintingColorName
        };