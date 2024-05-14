import ArticleCategoriesController from './domains/article-categories/controller.js';
import ArticleSubcategoriesController from './domains/article-subcategories/controller.js';
import ArticlesController from './domains/articles/controller.js';
import BanksController from './domains/banks/controller.js';
import BillsController from './domains/bills/controller.js';
import ClientsController from './domains/clients/controller.js';
import ContractsController from './domains/contracts/controller.js';
import InvoicesController from './domains/invoices/controller.js';
import PurchasesController from './domains/purchases/controller.js';
import RegionsController from './domains/regions/controller.js';
import SettingsController from './domains/settings/controller.js';

const pathsToControllers = {
  "article-categories": new ArticleCategoriesController(),
  "article-subcategories": new ArticleSubcategoriesController(),
  "articles": new ArticlesController(),
  "banks": new BanksController(),
  "bills": new BillsController(),
  "clients": new ClientsController(),
  "contracts": new ContractsController(),
  "invoices": new InvoicesController(),
  "purchases": new PurchasesController(),
  "regions": new RegionsController(),
  "settings": new SettingsController(),
}

const routes = {};

for (let [path, controller] of Object.entries(pathsToControllers)) {
  routes[`get:${path}`] = [controller, 'index'];
  routes[`post:${path}/create`] = [controller, 'create'];
  routes[`get:${path}/{id}`] = [controller, 'show'];
  routes[`post:${path}/{id}`] = [controller, 'update'];
  routes[`delete:${path}/{id}`] = [controller, 'destroy'];
}

export default routes;
