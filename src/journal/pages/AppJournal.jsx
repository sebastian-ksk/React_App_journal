import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const AppJournal = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        similique asperiores doloremque nam, sit quos alias exercitationem nobis
        odit ipsam odio mollitia, unde quia reiciendis eaque explicabo enim!
        Quo, alias.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
