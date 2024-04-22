declare namespace JSX {
  interface MouseWheel {
    releaseOnEdges?: boolean,
    forceToAxis?: boolean,
  }

  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      navigation?: boolean;
      pagination?: boolean;
      scrollbar?: boolean;
      class?: string;
      direction?: string;
      mousewheel?: MouseWheel
    };
    'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      // Add more properties
    };
  }
}

declare module 'kv-storage-polyfill/dist/kv-storage-polyfill.mjs';

declare module 'jsonwebtoken-esm';

declare module 'simplecrypt';