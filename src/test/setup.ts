import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: () => {},
});

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];

  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe = (element: Element) => {
    this.callback(
      [
        {
          time: 0,
          target: element,
          isIntersecting: true,
          intersectionRatio: 1,
          boundingClientRect: element.getBoundingClientRect(),
          intersectionRect: element.getBoundingClientRect(),
          rootBounds: null,
        } as IntersectionObserverEntry,
      ],
      this,
    );
  };

  unobserve = () => {};
  disconnect = () => {};
  takeRecords = () => [];
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});
Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});
