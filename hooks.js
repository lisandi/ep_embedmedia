var path = require('path');
var express = require('express');
var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_embedmedia/templates/editbarButtons.ejs", {}, module);
  return cb();
}

exports.eejsBlock_modals = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_embedmedia/templates/modals.ejs", {}, module);
  return cb();
}

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_embedmedia/templates/scripts.ejs", {}, module);
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_embedmedia/templates/styles.ejs", {}, module);
  return cb();
}
