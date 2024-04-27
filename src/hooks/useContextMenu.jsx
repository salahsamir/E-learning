import { useEffect, useState } from "react";

function useContextMenu() {
  const [points, setPoints] = useState([0, 0]);
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (e) => {
    const activeCtxMenu = document.querySelector(".active-ctx-menu");
    if (activeCtxMenu) activeCtxMenu.classList.remove("active-ctx-menu");
    e.preventDefault();
    setPoints([e.clientX, e.clientY]);
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
  return { points, showMenu, setShowMenu, handleContextMenu };
}

export default useContextMenu;
