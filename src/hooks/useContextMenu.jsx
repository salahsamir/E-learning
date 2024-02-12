import { useEffect, useState } from "react";

function useContextMenu() {
  const [points, setPoints] = useState([0, 0]);
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPoints([e.pageX, e.pageY]);
    setShowMenu(true);
  };

  useEffect(() => {
    const handleClick = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showMenu]);
  return { points, showMenu, handleContextMenu };
}

export default useContextMenu;
