import { useEffect } from "react";

const usePageTitle = title => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
};

export default usePageTitle;
