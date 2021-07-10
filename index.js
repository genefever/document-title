'use strict';
let { useRef, useEffect } = require('react');

function useDocumentTitle(title, retainOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const defaultTitleRef = defaultTitle.current;
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitleRef;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

module.exports = useDocumentTitle;
