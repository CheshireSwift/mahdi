/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
}

export interface Query {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */
  sitePage?: SitePage | null
  sitePlugin?: SitePlugin | null
  site?: Site | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePageGroupConnectionConnection | null)[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  jsonName?: string | null
  internalComponentName?: string | null
  path?: string | null
  component?: string | null
  componentChunkName?: string | null
  pluginCreator?: SitePlugin | null
  pluginCreatorId?: string | null
  componentPath?: string | null
  internal?: Internal_4 | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  resolve?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: PluginOptions_2 | null
  nodeAPIs?: (string | null)[] | null
  browserAPIs?: (string | null)[] | null
  ssrAPIs?: (string | null)[] | null
  pluginFilepath?: string | null
  packageJson?: PackageJson_2 | null
  internal?: Internal_5 | null
}

export interface PluginOptions_2 {
  name?: string | null
  short_name?: string | null
  start_url?: string | null
  background_color?: string | null
  theme_color?: string | null
  display?: string | null
  icon?: string | null
  path?: string | null
  pathCheck?: boolean | null
}

export interface PackageJson_2 {
  name?: string | null
  description?: string | null
  version?: string | null
  main?: string | null
  license?: string | null
  dependencies?: (Dependencies_2 | null)[] | null
  devDependencies?: (DevDependencies_2 | null)[] | null
  peerDependencies?: (PeerDependencies_2 | null)[] | null
  keywords?: (string | null)[] | null
}

export interface Dependencies_2 {
  name?: string | null
  version?: string | null
}

export interface DevDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface PeerDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface Internal_5 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface Internal_4 {
  type?: string | null
  contentDigest?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePluginGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (SitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  siteMetadata?: SiteMetadata_2 | null
  port?: Date | null
  host?: string | null
  pathPrefix?: string | null
  polyfill?: boolean | null
  buildTime?: Date | null
  internal?: Internal_6 | null
}

export interface SiteMetadata_2 {
  title?: string | null
}

export interface Internal_6 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[]
  order?: SitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null
  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null
  path?: SitePageConnectionPathQueryString_2 | null
  component?: SitePageConnectionComponentQueryString | null
  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null
  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null
  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null
  componentPath?: SitePageConnectionComponentPathQueryString | null
  id?: SitePageConnectionIdQueryString_2 | null
  internal?: SitePageConnectionInternalInputObject_2 | null
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null
  id?: SitePageConnectionPluginCreatorIdQueryString | null
  name?: SitePageConnectionPluginCreatorNameQueryString | null
  version?: SitePageConnectionPluginCreatorVersionQueryString | null
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null
  parent?: SitePageConnectionPluginCreatorParentQueryString | null
  internal?: SitePageConnectionPluginCreatorInternalInputObject | null
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePageConnectionPluginCreatorPluginOptionsIconQueryString | null
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null
  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null
  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null
  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null
  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null
  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null
  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null
  description?: SitePageConnectionInternalDescriptionQueryString | null
  owner?: SitePageConnectionInternalOwnerQueryString_2 | null
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[]
  order?: SitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null
  id?: SitePluginConnectionIdQueryString_2 | null
  name?: SitePluginConnectionNameQueryString_2 | null
  version?: SitePluginConnectionVersionQueryString_2 | null
  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null
  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null
  internal?: SitePluginConnectionInternalInputObject_2 | null
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginConnectionPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginConnectionPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginConnectionPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginConnectionPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginConnectionPluginOptionsIconQueryString_2 | null
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null
  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null
  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null
  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null
  type?: SitePluginConnectionInternalTypeQueryString_2 | null
  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null
  id?: SitePagePluginCreatorIdQueryString | null
  name?: SitePagePluginCreatorNameQueryString | null
  version?: SitePagePluginCreatorVersionQueryString | null
  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null
  parent?: SitePagePluginCreatorParentQueryString | null
  internal?: SitePagePluginCreatorInternalInputObject | null
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePagePluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePagePluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePagePluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePagePluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePagePluginCreatorPluginOptionsIconQueryString | null
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null
  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null
  main?: SitePagePluginCreatorPackageJsonMainQueryString | null
  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null
  type?: SitePagePluginCreatorInternalTypeQueryString | null
  owner?: SitePagePluginCreatorInternalOwnerQueryString | null
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null
  contentDigest?: SitePageInternalContentDigestQueryString_2 | null
  description?: SitePageInternalDescriptionQueryString | null
  owner?: SitePageInternalOwnerQueryString_2 | null
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsInputObject_2 {
  name?: SitePluginPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginPluginOptionsIconQueryString_2 | null
  path?: SitePluginPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null
  description?: SitePluginPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginPackageJsonVersionQueryString_2 | null
  main?: SitePluginPackageJsonMainQueryString_2 | null
  license?: SitePluginPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null
  type?: SitePluginInternalTypeQueryString_2 | null
  owner?: SitePluginInternalOwnerQueryString_2 | null
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteSiteMetadataInputObject_2 {
  title?: SiteSiteMetadataTitleQueryString_2 | null
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePortQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteHostQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null
  type?: SiteInternalTypeQueryString_2 | null
  owner?: SiteInternalOwnerQueryString_2 | null
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
}
export interface AllSitePageQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePageConnectionSort | null
  filter?: FilterSitePage | null
}
export interface AllSitePluginQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePluginConnectionSort | null
  filter?: FilterSitePlugin | null
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null
  internalComponentName?: SitePageInternalComponentNameQueryString | null
  path?: SitePagePathQueryString_2 | null
  component?: SitePageComponentQueryString | null
  componentChunkName?: SitePageComponentChunkNameQueryString | null
  pluginCreator?: SitePagePluginCreatorInputObject | null
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
  componentPath?: SitePageComponentPathQueryString | null
  id?: SitePageIdQueryString_2 | null
  internal?: SitePageInternalInputObject_2 | null
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null
  id?: SitePluginIdQueryString_2 | null
  name?: SitePluginNameQueryString_2 | null
  version?: SitePluginVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
  packageJson?: SitePluginPackageJsonInputObject_2 | null
  internal?: SitePluginInternalInputObject_2 | null
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null
  port?: SitePortQueryString_2 | null
  host?: SiteHostQueryString_2 | null
  pathPrefix?: SitePathPrefixQueryString_2 | null
  polyfill?: SitePolyfillQueryBoolean_2 | null
  buildTime?: SiteBuildTimeQueryString_2 | null
  id?: SiteIdQueryString_2 | null
  internal?: SiteInternalInputObject_2 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePluginGroupEnum | null
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    allSitePage?: AllSitePageResolver<
      SitePageConnection | null,
      any,
      Context
    > /** Connection to all SitePage nodes */
    allSitePlugin?: AllSitePluginResolver<
      SitePluginConnection | null,
      any,
      Context
    > /** Connection to all SitePlugin nodes */
    sitePage?: SitePageResolver<SitePage | null, any, Context>
    sitePlugin?: SitePluginResolver<SitePlugin | null, any, Context>
    site?: SiteResolver<Site | null, any, Context>
  }

  export type AllSitePageResolver<
    R = SitePageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePageArgs>
  export interface AllSitePageArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePageConnectionSort | null
    filter?: FilterSitePage | null
  }

  export type AllSitePluginResolver<
    R = SitePluginConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePluginArgs>
  export interface AllSitePluginArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePluginConnectionSort | null
    filter?: FilterSitePlugin | null
  }

  export type SitePageResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePageArgs>
  export interface SitePageArgs {
    jsonName?: SitePageJsonNameQueryString | null
    internalComponentName?: SitePageInternalComponentNameQueryString | null
    path?: SitePagePathQueryString_2 | null
    component?: SitePageComponentQueryString | null
    componentChunkName?: SitePageComponentChunkNameQueryString | null
    pluginCreator?: SitePagePluginCreatorInputObject | null
    pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
    componentPath?: SitePageComponentPathQueryString | null
    id?: SitePageIdQueryString_2 | null
    internal?: SitePageInternalInputObject_2 | null
  }

  export type SitePluginResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePluginArgs>
  export interface SitePluginArgs {
    resolve?: SitePluginResolveQueryString_2 | null
    id?: SitePluginIdQueryString_2 | null
    name?: SitePluginNameQueryString_2 | null
    version?: SitePluginVersionQueryString_2 | null
    pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
    nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
    browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
    ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
    pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
    packageJson?: SitePluginPackageJsonInputObject_2 | null
    internal?: SitePluginInternalInputObject_2 | null
  }

  export type SiteResolver<
    R = Site | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SiteArgs>
  export interface SiteArgs {
    siteMetadata?: SiteSiteMetadataInputObject_2 | null
    port?: SitePortQueryString_2 | null
    host?: SiteHostQueryString_2 | null
    pathPrefix?: SitePathPrefixQueryString_2 | null
    polyfill?: SitePolyfillQueryBoolean_2 | null
    buildTime?: SiteBuildTimeQueryString_2 | null
    id?: SiteIdQueryString_2 | null
    internal?: SiteInternalInputObject_2 | null
  }
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePageDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePageGroupEnum | null
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating, are there more items? */
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    jsonName?: JsonNameResolver<string | null, any, Context>
    internalComponentName?: InternalComponentNameResolver<
      string | null,
      any,
      Context
    >
    path?: PathResolver<string | null, any, Context>
    component?: ComponentResolver<string | null, any, Context>
    componentChunkName?: ComponentChunkNameResolver<string | null, any, Context>
    pluginCreator?: PluginCreatorResolver<SitePlugin | null, any, Context>
    pluginCreatorId?: PluginCreatorIdResolver<string | null, any, Context>
    componentPath?: ComponentPathResolver<string | null, any, Context>
    internal?: InternalResolver<Internal_4 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type JsonNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalComponentNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentChunkNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentPathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_4 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    resolve?: ResolveResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    pluginOptions?: PluginOptionsResolver<PluginOptions_2 | null, any, Context>
    nodeAPIs?: NodeApIsResolver<(string | null)[] | null, any, Context>
    browserAPIs?: BrowserApIsResolver<(string | null)[] | null, any, Context>
    ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>
    pluginFilepath?: PluginFilepathResolver<string | null, any, Context>
    packageJson?: PackageJsonResolver<PackageJson_2 | null, any, Context>
    internal?: InternalResolver<Internal_5 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ResolveResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginOptionsResolver<
    R = PluginOptions_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BrowserApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SsrApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginFilepathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PackageJsonResolver<
    R = PackageJson_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_5 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PluginOptions_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    short_name?: ShortNameResolver<string | null, any, Context>
    start_url?: StartUrlResolver<string | null, any, Context>
    background_color?: BackgroundColorResolver<string | null, any, Context>
    theme_color?: ThemeColorResolver<string | null, any, Context>
    display?: DisplayResolver<string | null, any, Context>
    icon?: IconResolver<string | null, any, Context>
    path?: PathResolver<string | null, any, Context>
    pathCheck?: PathCheckResolver<boolean | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ShortNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StartUrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BackgroundColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ThemeColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DisplayResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IconResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathCheckResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PackageJson_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    main?: MainResolver<string | null, any, Context>
    license?: LicenseResolver<string | null, any, Context>
    dependencies?: DependenciesResolver<
      (Dependencies_2 | null)[] | null,
      any,
      Context
    >
    devDependencies?: DevDependenciesResolver<
      (DevDependencies_2 | null)[] | null,
      any,
      Context
    >
    peerDependencies?: PeerDependenciesResolver<
      (PeerDependencies_2 | null)[] | null,
      any,
      Context
    >
    keywords?: KeywordsResolver<(string | null)[] | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MainResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LicenseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DependenciesResolver<
    R = (Dependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevDependenciesResolver<
    R = (DevDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PeerDependenciesResolver<
    R = (PeerDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type KeywordsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Dependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace DevDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PeerDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_5Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_4Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePluginGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePluginDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePluginGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePluginGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    siteMetadata?: SiteMetadataResolver<SiteMetadata_2 | null, any, Context>
    port?: PortResolver<Date | null, any, Context>
    host?: HostResolver<string | null, any, Context>
    pathPrefix?: PathPrefixResolver<string | null, any, Context>
    polyfill?: PolyfillResolver<boolean | null, any, Context>
    buildTime?: BuildTimeResolver<Date | null, any, Context>
    internal?: InternalResolver<Internal_6 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SiteMetadataResolver<
    R = SiteMetadata_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PortResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PortArgs>
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type HostResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathPrefixResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PolyfillResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BuildTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BuildTimeArgs>
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type InternalResolver<
    R = Internal_6 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SiteMetadata_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_6Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
