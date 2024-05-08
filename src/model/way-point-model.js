import {points} from '../mock/way-points.js';
import {destinations} from '../mock/destinations.js';
import {offers} from '../mock/offers.js';

export default class PointModel {
  constructor() {
    this.points = [];
    this.destinations = [];
    this.offers = [];
  }

  getPoints() {
    this.points = points;
    return this.points;
  }

  getDestinations() {
    this.destinations = destinations;
    return this.destinations;
  }

  getOffers() {
    this.offers = offers;
    return this.offers;
  }
}
