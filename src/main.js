import Presenter from './presenter/presenter.js';
import PointModel from './model/way-point-model.js';

const pointModel = new PointModel;

const presenter = new Presenter(pointModel);
presenter.init();

