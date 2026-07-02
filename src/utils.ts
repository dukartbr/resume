import { useState, useLayoutEffect } from 'react';

type windowSizeRes = 'sm' | 'md' | 'full'

function useWindowResize(): windowSizeRes {
	const [windowSize, setWindowSize] = useState<windowSizeRes>('full')

  useLayoutEffect(() => {
    function updateSize() {
			if (window.innerWidth >1460) {
				setWindowSize('full')
			} else if (window.innerWidth > 1080){
				setWindowSize('md')
			} else {
				setWindowSize('sm')
			}
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
	return windowSize
}

export { useWindowResize }