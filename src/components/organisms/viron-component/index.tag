viron-component.Component
  .Component__head
    .Component__headBasic
      .Component__name { opts.component.name }
      .Component__refresh(onClick="{ handleRefreshButtonClick }")
        viron-icon(type="reload")
      .Component__filter(if="{ opts.component.style === 'table' }" class="{ !!selectedTableColumns.length ? 'Component__filter--active' : '' }" onClick="{ handleFilterButtonClick }")
        viron-icon(type="filter")
      .Component__search(if="{ !!getParameterObjectsForSearch().length }" class="{ !isCurrentSearchRequestParametersEmpty() ? 'Component__search--active' : ''}" onClick="{ handleSearchButtonClick }")
        viron-icon(type="search")
    .Component__headSearch(if="{ !isCurrentSearchRequestParametersEmpty() }")
      .Component__searchQuery(each="{ val, key in currentSearchRequestParameters }") { key } : { val }
  .Component__body(ref="body")
    .Component__spinner(if="{ isPending }")
      viron-icon(type="loading")
    viron-pagination.Component__pagination.Component__pagination--head(if="{ !isPending &&  hasPagination }" currentPage="{ pagination.currentPage }" maxPage="{ pagination.maxPage }" size="{ paginationSize }" onChange="{ handlePaginationChange }")
    div(data-is="{ childComponentName }" if="{ !isPending && isValidData }" response="{ response }" schemaObject="{ schemaObject }" primaryKey="{ primaryKey }" tableLabels="{ tableLabels }" selectedTableColumns="{ selectedTableColumns }" rowActions="{ rowActions }" updater="{ updater }")
    .Component__alert(if="{ !isPending && !isValidData }")
      .Component__alertText { alertText }
    viron-pagination.Component__pagination.Component__pagination--tail(if="{ !isPending && hasPagination }" currentPage="{ pagination.currentPage }" maxPage="{ pagination.maxPage }" size="{ paginationSize }" onChange="{ handlePaginationChange }")
  .Component__tail(if="{ !!selfActions }")
    viron-component-action(each="{ action in selfActions }" action="{ action }" updater="{ parent.updater }")

  script.
    import '../../organisms/viron-pagination/index.tag';
    import '../../atoms/viron-icon/index.tag';
    import './action.tag';
    import './graph-bar.tag';
    import './graph-horizontal-bar.tag';
    import './graph-horizontal-stacked-bar.tag';
    import './graph-line.tag';
    import './graph-scatterplot.tag';
    import './graph-stacked-area.tag';
    import './graph-stacked-bar.tag';
    import './number.tag';
    import './table.tag';
    import script from './index';
    this.external(script);