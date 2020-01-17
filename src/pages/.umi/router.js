import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/list/:id',
        exact: true,
        component: require('../list/$id.js').default,
      },
      {
        path: '/user',
        exact: true,
        component: require('../user.js').default,
      },
      {
        path: '/detail',
        exact: false,
        component: require('../detail/_layout.js').default,
        routes: [
          {
            path: '/detail/detail',
            exact: true,
            component: require('../detail/detail.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('D:/manager/-/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/login',
        exact: false,
        component: require('../login/_layout.js').default,
        routes: [
          {
            component: () =>
              React.createElement(
                require('D:/manager/-/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/main',
        exact: false,
        component: require('../main/_layout.js').default,
        routes: [
          {
            path: '/main/product',
            exact: true,
            component: require('../main/product/index.js').default,
          },
          {
            path: '/main/product/models/pIndex',
            exact: true,
            component: require('../main/product/models/pIndex.js').default,
          },
          {
            path: '/main/product/proAdd',
            exact: true,
            component: require('../main/product/proAdd.js').default,
          },
          {
            path: '/main/product/proEdit',
            exact: true,
            component: require('../main/product/proEdit.js').default,
          },
          {
            path: '/main/product/proType',
            exact: true,
            component: require('../main/product/proType.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('D:/manager/-/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('D:/manager/-/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('D:/manager/-/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
