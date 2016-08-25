/*'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Project Schema
 */

var SpecSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  swagger: {
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, { strict: false });

mongoose.model('Spec', SpecSchema);