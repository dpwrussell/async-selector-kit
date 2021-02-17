import { createAsyncSelectorResults } from "./createAsyncSelectorResults";
import { createSelector } from 'reselect';

let createdCount = 0;


export function createThrottledSelectorResults<State, SyncReturn>(
  selectors: [],
  func: () => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, SyncReturn, Props>(
  selectors: [],
  func: () => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, SyncReturn>(
  selectors: [(state: State) => R1],
  func: (val1: R1) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1],
  func: (val1: R1) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2],
  func: (val1: R1, val2: R2) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2],
  func: (val1: R1, val2: R2) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3],
  func: (val1: R1, val2: R2, val3: R3) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3],
  func: (val1: R1, val2: R2, val3: R3) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4],
  func: (val1: R1, val2: R2, val3: R3, val4: R4) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4],
  func: (val1: R1, val2: R2, val3: R3, val4: R4) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, R9, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, R9, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];


export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, SyncReturn>(
  selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9, (state: State) => R10],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State) => SyncReturn,
    () => boolean,
  ];

export function createThrottledSelectorResults<State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, SyncReturn, Props>(
  selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9, (state: State, props: Props) => R10],
  func: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): [
    (state: State, props: Props) => SyncReturn,
    () => boolean,
  ];



export function createThrottledSelectorResults(selectors, func, throttleFunc, id?: string) {
  id = id || 'CREATE_THROTTLED_SELECTOR_' + (++createdCount);
  const DEFAULT_VALUE = {};
  const [getAsyncValue, waiting] = createAsyncSelectorResults({
    async: async (...params) => {
      return func(...params);
    },
    throttle: throttleFunc,
    defaultValue: DEFAULT_VALUE,
    id
  }, selectors);

  const regularSelector = createSelector(selectors, func);

  let prev: any = DEFAULT_VALUE;
  const getValue = state => {
    if (getAsyncValue(state) === DEFAULT_VALUE) {
      if (prev !== DEFAULT_VALUE) return prev;
      prev = regularSelector(state);
      return prev;
    } else {
      return getAsyncValue(state);
    }
  }
  return [getValue as any, waiting as any];
}