import { Box } from "@mui/material";
import React, { useRef } from "react";
import Message from "./Message";
import { useGetMessages } from "api/global/messages.tsx";
import useGetParams from "hooks/useGetParams";
import MessageSkelton from "./MessageSkelton";

const MessagesList = () => {
  const params = useGetParams();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetMessages({
      chatId: params[0],
    });
  const messages = data?.pages.flatMap((page) => page);
  const observer = useRef();
  const lastItemRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        !isFetchingNextPage && hasNextPage && fetchNextPage();
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column-reverse",
        gap: "0.5em",
        overflowY: "scroll",
        p: "1em",
        height: "100%",
        // "& > :first-of-type": {
        //   mt: "auto !important",
        // },
      }}
    >
      {messages?.map((message, index) => (
        <Message
          key={"mm" + index}
          message={message}
          ref={messages?.length === index + 1 ? lastItemRef : null}
        />
      ))}
      {(isFetchingNextPage || !messages) && (
        <>
          {!messages && (
            <>
              <MessageSkelton isLocal />
              <MessageSkelton />
            </>
          )}
          <MessageSkelton isLocal />
          <MessageSkelton />
          <MessageSkelton isLocal />
        </>
      )}
    </Box>
  );
};

export default MessagesList;
