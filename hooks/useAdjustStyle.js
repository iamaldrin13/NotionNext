import { isBrowser } from '@/lib/utils';
import { useEffect } from 'react';

/**
 * Hook to adjust styles dynamically.
 * Prevents callout images from overflowing their container.
 */
const useAdjustStyle = () => {
  /**
   * Adjusts images within callouts to prevent overflow.
   * Finds all elements with class "notion-callout-text", and for each image container inside,
   * if the image width exceeds the callout width minus a margin, sets its width to 100%.
   */
  const adjustCalloutImg = () => {
    const callOuts = document.querySelectorAll('.notion-callout-text');
    callOuts.forEach((callout) => {
      const images = callout.querySelectorAll('figure.notion-asset-wrapper.notion-asset-wrapper-image > div');
      const calloutWidth = callout.offsetWidth;
      images.forEach((container) => {
        const imageWidth = container.offsetWidth;
        if (imageWidth + 50 > calloutWidth) {
          container.style.setProperty('width', '100%');
        }
      });
    });
  };

  /**
   * React effect hook that invokes adjustCalloutImg on mount and resizes.
   * Registers the adjustCalloutImg function to run on window resize and cleans up on unmount.
   */
  useEffect(() => {
    if (isBrowser) {
      adjustCalloutImg();
      window.addEventListener('resize', adjustCalloutImg);
      return () => {
        window.removeEventListener('resize', adjustCalloutImg);
      };
    }
  }, []);
};

export default useAdjustStyle;
