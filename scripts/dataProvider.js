/**
 * Author: Erl John Lydzustre
 * 
 * Comp 3612 Assignment #3
 * Instructor: Randy Connolly 
 */

const path = require('path');
const fs = require('fs');

// Artists
const jsonPathArtists = path.join(__dirname, '../data', 'artists.json');
const jsonDataArtists = fs.readFileSync(jsonPathArtists, 'utf8');
const dataArtists = JSON.parse(jsonDataArtists);

// Galleries
const jsonPathGalleries = path.join(__dirname, '../data', 'galleries.json');
const jsonDataGalleries = fs.readFileSync(jsonPathGalleries, 'utf8');
const dataGalleries = JSON.parse(jsonDataGalleries);

// Paintings-nested
const jsonPathPaintingsNested = path.join(__dirname, '../data', 'paintings-nested.json');
const jsonDataPaintingsNested = fs.readFileSync(jsonPathPaintingsNested, 'utf8');
const dataPaintingsNested = JSON.parse(jsonDataPaintingsNested);

module.exports = {dataArtists, dataGalleries, dataPaintingsNested};