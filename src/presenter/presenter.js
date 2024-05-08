import CreatingFormView from '../view/creating-form-view.js';
import FilterView from '../view/filter-view.js';
import SortingView from '../view/sorting-view.js';
import WayPointView from '../view/way-point-view.js';
import TripInfoView from '../view/trip-info-view.js';
import {render, RenderPosition} from '../render';

export default class Presenter {

  constructor(pointModel) {
    this.pageHeaderElement = document.querySelector('.page-header');
    this.tripMainElement = this.pageHeaderElement.querySelector('.trip-main');
    this.tripControlsFiltersElement = this.pageHeaderElement.querySelector('.trip-controls__filters');
    this.pageMainElement = document.querySelector('.page-main');
    this.tripEventsElement = this.pageMainElement.querySelector('.trip-events');
    this.pointModel = pointModel;
    this.wayPointList = document.createElement('ul');
    this.wayPointList.classList.add('trip-events__list');
    this.tripEventsElement.appendChild(this.wayPointList);
  }

  renderTripInfoView () {
    render (new TripInfoView(), this.tripMainElement, RenderPosition.AFTERBEGIN);
  }

  renderTripFilter () {
    render (new FilterView(), this.tripControlsFiltersElement, RenderPosition.AFTERBEGIN);
  }

  renderSortFilter () {
    render (new SortingView(), this.tripEventsElement, RenderPosition.AFTERBEGIN);
  }

  renderWayPoint () {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();
    points.forEach((point) => {
      render (new WayPointView(point, destinations, offers), this.wayPointList);
    });
  }

  renderCreatingForm () {
    render (new CreatingFormView(), this.wayPointList, RenderPosition.AFTERBEGIN);
  }

  init() {
    this.renderTripInfoView();
    this.renderTripFilter();
    this.renderSortFilter();
    this.renderWayPoint();
    this.renderCreatingForm();
  }
}
