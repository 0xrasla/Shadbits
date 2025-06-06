/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DocsImport } from './routes/docs'
import { Route as BrowseImport } from './routes/browse'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const DocsRoute = DocsImport.update({
  id: '/docs',
  path: '/docs',
  getParentRoute: () => rootRoute,
} as any)

const BrowseRoute = BrowseImport.update({
  id: '/browse',
  path: '/browse',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/browse': {
      id: '/browse'
      path: '/browse'
      fullPath: '/browse'
      preLoaderRoute: typeof BrowseImport
      parentRoute: typeof rootRoute
    }
    '/docs': {
      id: '/docs'
      path: '/docs'
      fullPath: '/docs'
      preLoaderRoute: typeof DocsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/browse': typeof BrowseRoute
  '/docs': typeof DocsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/browse': typeof BrowseRoute
  '/docs': typeof DocsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/browse': typeof BrowseRoute
  '/docs': typeof DocsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/browse' | '/docs'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/browse' | '/docs'
  id: '__root__' | '/' | '/browse' | '/docs'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BrowseRoute: typeof BrowseRoute
  DocsRoute: typeof DocsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BrowseRoute: BrowseRoute,
  DocsRoute: DocsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/browse",
        "/docs"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/browse": {
      "filePath": "browse.tsx"
    },
    "/docs": {
      "filePath": "docs.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
