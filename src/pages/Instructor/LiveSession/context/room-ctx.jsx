import { createContext, useContext, useState } from "react";
const roomCtx = createContext({
  focusedParticipant: null,
  setFocusedParticipant: (participant) => {},
});

export const RoomContextProvider = ({ children }) => {
  const [focusedParticipant, setFocusedParticipant] = useState(null);
  return (
    <roomCtx.Provider value={{ setFocusedParticipant, focusedParticipant }}>
      {children}
    </roomCtx.Provider>
  );
};

export const useRoomContext = () => {
  const context = useContext(roomCtx);
  if (!context) {
    throw new Error("useRoomContext must be used within a RoomContextProvider");
  }
  return context;
};

export default roomCtx;
