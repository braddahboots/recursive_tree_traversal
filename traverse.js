
/*global require, module,  __dirname */
/*jslint node: true */

'use strict';
// var traverse = {};

function Traverse(data){
  this.tree = data.root;
}
/*
 * build the methods via prototype
 * the first one is free
 * uncomment the code below, then remove this comment
 */

// return all names from obj list
Traverse.prototype.getAllNames = function() {
  var names = [];
  function recursive(obj) {
    names.push(obj.name);
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  return names;
};

// return all ages from obj list
Traverse.prototype.getAllAges = function() {
  var ages = [];
  function recursive(obj) {
    ages.push(obj.age);
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  return ages;
};

// return the names from all obj with leafs
Traverse.prototype.getLeafNames = function() {
  var leafNames = [];
  function recursive(obj) {
    if(obj.is_leaf) {
      leafNames.push(obj.name);
    }
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  return leafNames;
};

// return the ages from all obj with leafs
Traverse.prototype.getLeafAges = function() {
  var leafAges = [];
  function recursive(obj) {
    if(obj.is_leaf) {
      leafAges.push(obj.age);
    }
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  return leafAges;
};

// return the parent names of all non-leaf objs
Traverse.prototype.findAllParentsNames = function() {
  var parentName = [];
  function recursive(obj) {
    if(!obj.is_leaf) {
      parentName.push(obj.name);
    }
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  return parentName;
};

// return the parent ages of all non-lfea objs
Traverse.prototype.findAllParentsAges = function() {
  var parentAges = [];
  function recursive(obj) {
    if(!obj.is_leaf) {
      parentAges.push(obj.age);
    }
    if(obj.has_children) {
      obj = obj.children;
      for(var i = 0; i < obj.length; i++) {
        recursive(obj[i]);
      }
    }
  }
  recursive(this.tree);
  console.log(parentAges);
  return parentAges;

};

// return the single object by
Traverse.prototype.findName = function(str) {
  var nodeObj;
  function recursive(obj) {
   if(obj.name === str) {
    nodeObj = obj;
   }
   if(obj.has_children) {
    obj = obj.children;
    for(var i = 0; i < obj.length; i++) {
      recursive(obj[i]);
    }
   }
  }
  recursive(this.tree);
  return nodeObj;
};

Traverse.prototype.findAge = function() {

};

/* exports the Class Traverse */
module.exports = Traverse;