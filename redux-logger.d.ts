/// <reference path="typings/main.d.ts" />

import {IMiddleware} from 'redux';

declare module reduxLogger {

  type LoggerPredicate = (getState: () => any, action: any) => boolean;

  type StateToString = (state: any) => string;
  type ActionToString = (action: any) => string;
  type ErrorToString = (error: any, prevState: any) => string;

  interface ColorsObject {
    title?: boolean | ActionToString;
    prevState?: boolean | StateToString;
    action?: boolean | ActionToString;
    nextState?: boolean | StateToString;
    error?: boolean | ErrorToString;
  }

  interface LevelObject {
    prevState?: string | boolean | StateToString;
    action?: string | boolean | ActionToString;
    nextState?: string | boolean | StateToString;
    error?: string | boolean | ErrorToString;
  }

  interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject;
    duration?: boolean;
    timestamp?: boolean;
    colors?: ColorsObject;
    logger?: any;
    logErrors?: boolean;
    collapsed?: boolean | LoggerPredicate;
    predicate?: LoggerPredicate;
    stateTransformer?: (state: any) => any;
    actionTransformer?: (action: any) => any;
    errorTransformer?: (error: any) => any;
  }

  // Trickery to get TypeScript to accept that our anonymous, non-default export is a function.
  // see https://github.com/Microsoft/TypeScript/issues/3612 for more
  namespace createLogger {}
  function createLogger<TState>(options?: ReduxLoggerOptions): IMiddleware<TState>;
  export = createLogger;
}

export = reduxLogger;