import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  comics:DS.hasMany('comic'),
  trades:DS.hasMany('trade'),
  figures:DS.hasMany('figure'),
  apparels:DS.hasMany('apparel'),
  games:DS.hasMany('game')
});
