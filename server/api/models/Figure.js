/**
 * Figure.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    isbn:{
      type:'string',
      primaryKey:true,
      required:true,
    },
    price:{
      type:'string',
      required:true
    },
    name:{
      type:'string',
      required:true
    },
    size:{
      type:'string',
      required:true
    },
    type:{
      type:'string',
      enum:['game figure','collectable','action']
    },
    material:{
      type:'string',
      enum:['plush','vinyl','plastic','die-cast','metal']
    },
    brand:{
      model:'Brand'
    },
    quanity:{
      type:'integer',
      required:true
    },
    lineitems:{
      collection:'LineItem',
      via:'figure_id'
    },
    tags:{
      collection:'itemTag',
      via:'item',
      through:'tagged_figure'
    },
  }
};
