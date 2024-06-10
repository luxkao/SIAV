export default {
  loading: 'Loading',
  apply: 'Apply',
  ok: 'OK',
  publish: 'Publish',
  cancel: 'Cancel',
  yes: 'Yes',
  no: 'No',
  open: 'Open',
  close: 'Close',
  new: 'New',
  classic: 'Classic',
  widgetLoadError: 'Fail to load',
  notPublishError: 'This item is not published. Please open this item in Experience Builder, then click <b>&nbsp;Publish&nbsp;</b> to publish it.',
  versionUpdateMsg: 'New updates are available. Click Reload to get the latest updates.',
  userLocaleChangeMsg: 'The user locale has changed. Click Reload to refresh the page.',
  doUpdate: 'Reload',
  search: 'Search',
  delete: 'Delete',
  about: 'About',

  neverUnsupportedBrowserTitle: 'Unsupported browser',
  neverUnsupportedBrowserOnlineContent: 'You are using a browser that is not supported by [ArcGIS Experience Builder]. Please use the latest version of <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, or <edge-link>Microsoft Edge</edge-link>. Provide your feedback through <feedback-link>GeoNet, the Esri Community</feedback-link>.',
  neverUnsupportedBrowserEnterpriseContent: 'You are using a browser that is not supported [ArcGIS Experience Builder]. Please use the latest version of <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, or <edge-link>Microsoft Edge</edge-link>.',

  message_StringSelectionChange: 'String selection changes',
  message_ExtentChange: 'Extent changes',
  message_DataSourceFilterChange: 'Data filtering changes',
  message_DataRecordsSelectionChange: 'Record selection changes',
  message_DataRecordSetChange: 'Records created',
  message_DataSourcesChange: 'Data added',
  message_SelectDataRecord: 'Select data record',
  message_LocationChange: 'Location change',
  message_ButtonClick: 'Button click',

  actions: 'Actions',
  noActions: 'No available actions',
  selectedData: 'Selected ({count})',
  allData: 'All data ({count})',
  allDataWithoutCount: 'All data',
  loadedData: 'Loaded ({count})',
  currentData: 'Current',
  export: 'Export',
  exportAll: 'Export all',
  exportSelected: 'Export selected',
  largeWarningTitle: 'Are you sure you want to export all data records? ',
  largeWarningContent: 'Exporting this large dataset will take time.',
  tooLargeWarningTitle: 'You can only export the first {max} records.',
  tooLargeWarningContent: 'Dataset export is limited to the first {max} records.',
  dataAction_ExportJson: 'Export to JSON',
  dataAction_ExportCSV: 'Export to CSV',
  dataAction_ExportGeoJson: 'Export to GeoJSON',
  dataAction_ExportItem: 'Export to Item',
  dataAction_SetFilter: 'Set filter',
  dataAction_DataStatistics: 'Statistics',
  pleaseSelectAField: 'Please select a field',
  countLabel: 'Number of values',
  countEmptyLabel: 'Number of empty values',
  sumLabel: 'Sum of values',
  minLabel: 'Minimum',
  maxLabel: 'Maximum',
  avgLabel: 'Average',
  stddevLabel: 'Standard deviation',
  error: 'Error',
  messageAction_SelectDataRecord: 'Select data records',
  messageAction_FilterDataRecord: 'Filter data records',
  action_addedData: 'Added: {label}',

  icon: 'Icon',
  small: 'Small',
  low: 'Low',
  high: 'High',
  large: 'Large',
  short: 'Short',
  medium: 'Medium',
  long: 'Long',
  full: 'Full',

  // concepts
  experience: 'Experience',
  template: 'Template',
  widget: 'Widget',
  section: 'Section',
  view: 'View',
  page: 'Page',
  dialog: 'Window',
  layout: 'Layout',
  theme: 'Theme',
  dataSource: 'Datasource',
  block: 'Block',
  screenGroup: 'Screen group',
  screen: 'Screen',
  grid: 'Grid',

  dialogConfirmationDefaultText: 'I agree to the above terms and conditions',
  dialogPreventDisplayAgainDefaultText: 'Don\'t show this again',

  // privilege and license
  noEditPrivilegesError: 'Your account does not have permission to create or modify data.',
  noEditContentPrivilegesError: 'Your account does not have permission to create or modify content.',
  essentialAppsLicenseErrorForApp: 'Your account is not licensed to use an app that is not public. Please ask your organization administrator to assign you a user type that includes Essential Apps or an add-on Essential Apps license.',
  essentialAppsLicenseErrorForBuilder: 'Your account is not licensed for Experience Builder. Please ask your organization administrator to assign you a user type that includes Essential Apps or an add-on Essential Apps license.',
  roleError: 'Experience Builder Developer Edition requires a level 2 ArcGIS account to work. Please login with an account that has level 2 privileges.',
  roleError2: 'Experience Builder Developer Edition requires an ArcGIS organization account with a user type that includes privileges to create content.',
  invalidResourceExperience: 'This is not a supported item.',
  invalidResourceItem: 'Item does not exist or is inaccessible.',
  invalidResourcePermission: 'Sorry, you do not have permissions to access this application.',
  invalidResourcePermissionForReadOnly: 'Sorry, you only have view permission to this application.',
  dataSourceCreateError: 'Data is inaccessible.',
  blockedByAdminErrorForApp: 'Your organization has blocked access to this application. Please contact your administrator for details.',
  blockedByAdminErrorForBuilder: 'Your organization has blocked access to Experience Builder. Please contact your administrator for details.',
  goToAnotherExperienceBtn: 'Go to another experience',
  switchAccoutBtn: 'Switch account',
  switch: 'Switch',

  // sign-in error
  signInErrorDefault: 'Sorry, you do not have permission to access this resource.',
  signInErrorsDefault: 'Sorry, you do not have permission to access ({names}).',
  signInErrorEnterCredential: 'Sorry, you do not have permission to access this resource. Click to enter credential.',
  signInErrorCannotEnterCredential: 'Sorry, your current account does not have permission to access this resource.',
  signInErrorTryAgain: 'Sorry, you do not have permission to access this resource. Please try again.',
  signInErrorInvalidToken: 'Invalid credential. Please login again.',
  signInBannerListWarning: 'Sorry, you don’t have access to the resources from the following servers or organizations. Click Sign in to provide credentials. Click Ignore to avoid loading the resource until you refresh the app.',
  signInBannerIgnore: 'Ignore',
  signInBannerIgnoreAll: 'Ignore all',

  //in upgrade
  upgradedFrom: 'Upgraded from previous config',

  versionIsHigh: 'Oops.. It seems this experience is built with a higher version of ArcGIS Experience Builder. Please upgrade to the latest version to view.',
  badVersion: 'Oops.. It seems the version of this experience is incorrect. Please check its configuration file.',

  // set client id for ArcGIS Enterprise
  setClientIdMessage1: 'This service is hosted on an ArcGIS Enterprise that the Experience Builder not registered with. Please provide Client ID to {register} first.',
  registerText: 'register',
  arcgisEnterpriseText: 'ArcGIS Enterprise',
  setClientIdMessage2: 'Provide the Client ID for Experience Builder registered in the ArcGIS Enterprise you specify above',

  experienceVersionRemind: 'This experience is in higher version. Incompatible contents may not work.',
  templateVersionRemind: 'This template is in higher version. Incompatible contents may not work.',
  publishedExperienceVersionRemind: 'The published version of this experience is in higher version. Incompatible contents may not work.',
  publishedTemplateVersionRemind: 'The published version of this template is in higher version. Incompatible contents may not work.',
  draftTemplateVersionRemind: 'The draft version of this template is in higher version. Incompatible contents may not work.',
  draftExperienceVersionRemind: 'The draft version of this experience is in higher version. Incompatible contents may not work.',

  // data source types
  featureLayer: 'Feature Layer',
  featureSet: 'Feature Set',
  featureService: 'Feature Service',
  mapService: 'Map Service',
  groupLayer: 'Group Layer',
  map: 'Map',
  simpleLocal: 'Simple Local',
  webMap: 'Web Map',
  webScene: 'Web Scene',
  csv: 'CSV',
  sceneService: 'Scene Service',
  sceneLayer: 'Scene Layer',
  imageService: 'Image Service',
  vectorTileService: 'Vector Tile Service',
  wfsLayer: 'WFS Layer',
  wmsLayer: 'WMS Layer',
  wmtsLayer: 'WMTS Layer',
  kml: 'KML',
  geojson: 'GeoJSON',
  outputView: '{dataSourceLabel} output view',
  buildingScene: 'Building Scene Layer',
  buildingGroup: 'Building Group Layer',
  buildingComponent: 'Building Component Layer'
}
