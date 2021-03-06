export * from './utils/date';
export * from './utils/colors';
export * from './utils/dom';
export * from './utils/format';
export * from './utils/scroll';
export * from './utils/event';

// others utils
export function copyToClipboard(text: string): Promise<void>;
export function debounce<F extends (...args: any[]) => any>(
  fn: F,
  wait?: number,
  immediate?: boolean
): F & { cancel(): void };
export function exportFile(
  fileName: string,
  rawData: BlobPart,
  mimeType?: string
): true | Error;
export function extend<R>(deep: boolean, target: any, ...sources: any[]): R;
export function extend<R>(target: object, ...sources: any[]): R;
export function openURL(url: string): void;
export function throttle<F extends (...args: any[]) => any>(
  fn: F,
  limit: number
): F;
export function uid(): string;

export function morph<F extends () => any, R extends (end: 'to' | 'from') => any, E extends Element | string | (() => Element)>(
  elements: E | { from: E, to: E },
  logic?: F,
  options?: number | F | Partial<{
    waitFor: number | 'transitionend' | Promise<any>,

    duration: number,
    easing: string,
    delay: number,
    fill: string,

    style: string | Partial<CSSStyleDeclaration>,
    class: string,

    forceResize: boolean,
    forceCssAnimation: boolean,
    hideFromClone: boolean,
    keepToClone: boolean,

    tween: boolean,
    tweenFromOpacity: number,
    tweenToOpacity: number

    onReady: R
  }>
): () => boolean
