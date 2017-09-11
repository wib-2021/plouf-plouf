'use strict';

const _ = require('lodash');
const randomstring = require("randomstring");
const Draw = require('../models/Draw');

module.exports = {
  create,
};

function create(data) {
  return Draw.create({
    slug: generateSlug(),
    values: JSON.stringify(data.values),
    drawnValue: _.sample(data.values),
  });
}

function generateSlug() {
  return randomstring.generate(7);
}
