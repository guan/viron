import application from './application';
import components from './components';
import current from './current';
import viron from './viron';
import drawers from './drawers';
import endpoints from './endpoints';
import layout from './layout';
import location from './location';
import menu from './menu';
import modals from './modals';
import oas from './oas';
import page from './page';
import popovers from './popovers';
import toasts from './toasts';
import ua from './ua';

const constants = {
  APPLICATION: 'APPLICATION',
  APPLICATION_ISLAUNCHED: 'APPLICATION_ISLAUNCHED',
  APPLICATION_ISNAVIGATING: 'APPLICATION_ISNAVIGATING',
  APPLICATION_ISNETWORKING: 'APPLICATION_ISNETWORKING',
  APPLICATION_ISDRAGGING: 'APPLICATION_ISDRAGGING',
  APPLICATION_ENDPOINT_FILTER_TEXT: 'APPLICATION_ENDPOINT_FILTER_TEXT',
  COMPONENTS: 'COMPONENTS',
  COMPONENTS_PARAMETER_OBJECTS: 'COMPONENTS_PARAMETER_OBJECTS',
  COMPONENTS_ONE: 'COMPONENTS_ONE',
  COMPONENTS_ONE_RESPONSE: 'COMPONENTS_ONE_RESPONSE',
  COMPONENTS_ONE_SCHEMA_OBJECT: 'COMPONENTS_ONE_SCHEMA_OBJECT',
  COMPONENTS_ONE_PARAMETER_OBJECTS: 'COMPONENTS_ONE_PARAMETER_OBJECTS',
  COMPONENTS_ONE_ACTIONS: 'COMPONENTS_ONE_ACTIONS',
  COMPONENTS_ONE_ACTIONS_SELF: 'COMPONENTS_ONE_ACTIONS_SELF',
  COMPONENTS_ONE_ACTIONS_ROW: 'COMPONENTS_ONE_ACTIONS_ROW',
  COMPONENTS_ONE_HAS_PAGINATION: 'COMPONENTS_ONE_HAS_PAGINATION',
  COMPONENTS_ONE_AUTO_REFRESH_SEC: 'COMPONENTS_ONE_AUTO_REFRESH_SEC',
  COMPONENTS_ONE_PAGINATION: 'COMPONENTS_ONE_PAGINATION',
  COMPONENTS_ONE_TABLE_LABELS: 'COMPONENTS_ONE_TABLE_LABELS',
  COMPONENTS_ONE_TABLE_COLUMNS: 'COMPONENTS_ONE_TABLE_COLUMNS',
  COMPONENTS_ONE_PRIMARY_KEY: 'COMPONENTS_ONE_PRIMARY_KEY',
  CURRENT: 'CURRENT',
  VIRON: 'VIRON',
  VIRON_EXISTENCE: 'VIRON_EXISTENCE',
  VIRON_PAGES: 'VIRON_PAGES',
  VIRON_PAGES_ID_OF: 'VIRON_PAGES_ID_OF',
  VIRON_NAME: 'VIRON_NAME',
  VIRON_DASHBOARD: 'VIRON_DASHBOARD',
  VIRON_MANAGE: 'VIRON_MANAGE',
  DRAWERS: 'DRAWERS',
  ENDPOINTS: 'ENDPOINTS',
  ENDPOINTS_BY_ORDER: 'ENDPOINTS_BY_ORDER',
  ENDPOINTS_BY_ORDER_FILTERED: 'ENDPOINTS_BY_ORDER_FILTERED',
  ENDPOINTS_COUNT: 'ENDPOINTS_COUNT',
  ENDPOINTS_WITHOUT_TOKEN: 'ENDPOINTS_WITHOUT_TOKEN',
  ENDPOINTS_ONE: 'ENDPOINTS_ONE',
  ENDPOINTS_ONE_BY_URL: 'ENDPOINTS_ONE_BY_URL',
  LAYOUT_TYPE: 'LAYOUT_TYPE',
  LAYOUT_IS_DESKTOP: 'LAYOUT_IS_DESKTOP',
  LAYOUT_IS_MOBILE: 'LAYOUT_IS_MOBILE',
  LAYOUT_SIZE: 'LAYOUT_SIZE',
  LAYOUT_COMPONENTS_GRID_COLUMN_COUNT: 'LAYOUT_COMPONENTS_GRID_COLUMN_COUNT',
  LOCATION: 'LOCATION',
  LOCATION_NAME: 'LOCATION_NAME',
  LOCATION_ROUTE: 'LOCATION_ROUTE',
  MENU_ENABLED: 'MENU_ENABLED',
  MODALS: 'MODALS',
  OAS_CLIENT: 'OAS_CLIENT',
  OAS_SPEC: 'OAS_SPEC',
  OAS_ORIGINAL_SPEC: 'OAS_ORIGINAL_SPEC',
  OAS_APIS: 'OAS_APIS',
  OAS_FLAT_APIS: 'OAS_FLAT_APIS',
  OAS_API: 'OAS_API',
  OAS_API_BY_PATH_AND_METHOD: 'OAS_API_BY_PATH_AND_METHOD',
  OAS_PATH_ITEM_OBJECT: 'OAS_PATH_ITEM_OBJECT',
  OAS_PATH_ITEM_OBJECT_METHOD_NAME_BY_OPERATION_ID: 'OAS_PATH_ITEM_OBJECT_METHOD_NAME_BY_OPERATION_ID',
  OAS_OPERATION_OBJECT: 'OAS_OPERATION_OBJECT',
  OAS_OPERATION_OBJECTS_AS_ACTION: 'OAS_OPERATION_OBJECTS_AS_ACTION',
  OAS_OPERATION_ID: 'OAS_OPERATION_ID',
  OAS_PARAMETER_OBJECTS: 'OAS_PARAMETER_OBJECTS',
  OAS_RESPONSE_OBJECT: 'OAS_RESPONSE_OBJECT',
  OAS_SCHEMA_OBJECT: 'OAS_SCHEMA_OBJECT',
  PAGE: 'PAGE',
  PAGE_ID: 'PAGE_ID',
  PAGE_NAME: 'PAGE_NAME',
  PAGE_COMPONENTS: 'PAGE_COMPONENTS',
  PAGE_COMPONENTS_TABLE: 'PAGE_COMPONENTS_TABLE',
  PAGE_COMPONENTS_NOT_TABLE: 'PAGE_COMPONENTS_NOT_TABLE',
  PAGE_COMPONENTS_COUNT: 'PAGE_COMPONENTS_COUNT',
  POPOVERS: 'POPOVERS',
  TOASTS: 'TOASTS',
  UA: 'UA',
  UA_IS_SAFARI: 'UA_IS_SAFARI',
  UA_IS_EDGE: 'UA_IS_EDGE',
  UA_IS_FIREFOX: 'UA_IS_FIREFOX',
  UA_USING_BROWSER: 'UA_USING_BROWSER'
};

export default {
  [constants.APPLICATION]: application.all,
  [constants.APPLICATION_ISLAUNCHED]: application.isLaunched,
  [constants.APPLICATION_ISNAVIGATING]: application.isNavigating,
  [constants.APPLICATION_ISNETWORKING]: application.isNetworking,
  [constants.APPLICATION_ISDRAGGING]: application.isDragging,
  [constants.APPLICATION_ENDPOINT_FILTER_TEXT]: application.endpointFilterText,
  [constants.COMPONENTS]: components.all,
  [constants.COMPONENTS_PARAMETER_OBJECTS]: components.parameterObjectsEntirely,
  [constants.COMPONENTS_ONE]: components.one,
  [constants.COMPONENTS_ONE_RESPONSE]: components.response,
  [constants.COMPONENTS_ONE_SCHEMA_OBJECT]: components.schemaObject,
  [constants.COMPONENTS_ONE_PARAMETER_OBJECTS]: components.parameterObjects,
  [constants.COMPONENTS_ONE_ACTIONS]: components.actions,
  [constants.COMPONENTS_ONE_ACTIONS_SELF]: components.selfActions,
  [constants.COMPONENTS_ONE_ACTIONS_ROW]: components.rowActions,
  [constants.COMPONENTS_ONE_HAS_PAGINATION]: components.hasPagination,
  [constants.COMPONENTS_ONE_AUTO_REFRESH_SEC]: components.autoRefreshSec,
  [constants.COMPONENTS_ONE_PAGINATION]: components.pagination,
  [constants.COMPONENTS_ONE_TABLE_LABELS]: components.tableLabels,
  [constants.COMPONENTS_ONE_TABLE_COLUMNS]: components.tableColumns,
  [constants.COMPONENTS_ONE_PRIMARY_KEY]: components.primaryKey,
  [constants.CURRENT]: current.all,
  [constants.VIRON]: viron.all,
  [constants.VIRON_EXISTENCE]: viron.existence,
  [constants.VIRON_PAGES]: viron.pages,
  [constants.VIRON_PAGES_ID_OF]: viron.pageIdOf,
  [constants.VIRON_NAME]: viron.name,
  [constants.VIRON_DASHBOARD]: viron.dashboard,
  [constants.VIRON_MANAGE]: viron.manage,
  [constants.DRAWERS]: drawers.all,
  [constants.ENDPOINTS]: endpoints.all,
  [constants.ENDPOINTS_BY_ORDER]: endpoints.allByOrder,
  [constants.ENDPOINTS_BY_ORDER_FILTERED]: endpoints.allByOrderFiltered,
  [constants.ENDPOINTS_COUNT]: endpoints.count,
  [constants.ENDPOINTS_WITHOUT_TOKEN]: endpoints.allWithoutToken,
  [constants.ENDPOINTS_ONE]: endpoints.one,
  [constants.ENDPOINTS_ONE_BY_URL]: endpoints.oneByURL,
  [constants.LAYOUT_TYPE]: layout.type,
  [constants.LAYOUT_IS_DESKTOP]: layout.isDesktop,
  [constants.LAYOUT_IS_MOBILE]: layout.isMobile,
  [constants.LAYOUT_SIZE]: layout.size,
  [constants.LAYOUT_COMPONENTS_GRID_COLUMN_COUNT]: layout.componentsGridColumnCount,
  [constants.LOCATION]: location.all,
  [constants.LOCATION_NAME]: location.name,
  [constants.LOCATION_ROUTE]: location.route,
  [constants.MENU_ENABLED]: menu.enabled,
  [constants.MODALS]: modals.all,
  [constants.OAS_CLIENT]: oas.client,
  [constants.OAS_SPEC]: oas.spec,
  [constants.OAS_ORIGINAL_SPEC]: oas.originalSpec,
  [constants.OAS_APIS]: oas.apis,
  [constants.OAS_FLAT_APIS]: oas.flatApis,
  [constants.OAS_API]: oas.api,
  [constants.OAS_API_BY_PATH_AND_METHOD]: oas.apiByPathAndMethod,
  [constants.OAS_PATH_ITEM_OBJECT]: oas.pathItemObject,
  [constants.OAS_PATH_ITEM_OBJECT_METHOD_NAME_BY_OPERATION_ID]: oas.pathItemObjectMethodNameByOperationId,
  [constants.OAS_OPERATION_OBJECT]: oas.operationObject,
  [constants.OAS_OPERATION_OBJECTS_AS_ACTION]: oas.operationObjectsAsAction,
  [constants.OAS_OPERATION_ID]: oas.operationId,
  [constants.OAS_PARAMETER_OBJECTS]: oas.parameterObjects,
  [constants.OAS_RESPONSE_OBJECT]: oas.responseObject,
  [constants.OAS_SCHEMA_OBJECT]: oas.schemaObject,
  [constants.PAGE]: page.all,
  [constants.PAGE_ID]: page.id,
  [constants.PAGE_NAME]: page.name,
  [constants.PAGE_COMPONENTS]: page.components,
  [constants.PAGE_COMPONENTS_TABLE]: page.componentsTable,
  [constants.PAGE_COMPONENTS_NOT_TABLE]: page.componentsNotTable,
  [constants.PAGE_COMPONENTS_COUNT]: page.componentsCount,
  [constants.POPOVERS]: popovers.all,
  [constants.TOASTS]: toasts.all,
  [constants.UA]: ua.all,
  [constants.UA_IS_SAFARI]: ua.isSafari,
  [constants.UA_IS_EDGE]: ua.isEdge,
  [constants.UA_IS_FIREFOX]: ua.isFirefox,
  [constants.UA_USING_BROWSER]: ua.usingBrowser
};

export {
  constants
};
