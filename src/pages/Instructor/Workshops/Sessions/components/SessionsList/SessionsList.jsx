import { Link } from "@mui/material";
import CustomTable from "../../../../../../Components/CustomTable/CustomTable";
import SessionsMenu from "../SesssionMenu/SessionsMenu";
import useGetParams from "../../../../../../hooks/useGetParams";

const SessionName = ({ name, url }) => {
  return (
    <Link to={url} sx={{ fontWeight: "600" }}>
      {name}
    </Link>
  );
};
const headCells = [
  {
    id: "sessionName",
    disablePadding: false,
    label: "Session Name",
  },
  {
    id: "duration",
    disablePadding: false,
    label: "Duration",
  },
  {
    id: "totalParticipants",
    disablePadding: false,
    label: "Total Participants",
  },
  {
    id: "sessionDate",
    disablePadding: false,
    label: "Date",
  },
  {
    id: "sessionStatus",
    disablePadding: false,
    label: "Status",
  },
  {
    id: "settings",
    disablePadding: false,
    label: "",
    disableSorting: true,
  },
];
function SessionsList({
  sessionsList,
  loadingSessionsList,
  errorSessionsList,
  setSessionsList,
}) {
  const params = useGetParams();
  function createData(
    id,
    sessionName,
    duration,
    totalParticipants,
    sessionDate,
    sessionStatus
  ) {
    return {
      id,
      sessionName: (
        <SessionName
          name={sessionName}
          url={`/instructor/workshops/${params[0]}/live/${id}`}
        />
      ),
      duration,
      totalParticipants,
      sessionDate,
      sessionStatus,
      settings: (
        <SessionsMenu
          key={id}
          id={id}
          title={sessionName}
          setItems={setSessionsList}
        />
      ),
    };
  }
  const rows = sessionsList.map((_, index, arr) => {
    const item = arr[arr.length - index - 1];
    return createData(
      item._id,
      item.roomName,
      item.duration || 0,
      item.totalPart || 0,
      item.sessionDate || "None",
      item.status || "Draft"
    );
  });
  return (
    <CustomTable
      title={"Sessions List"}
      rows={rows || []}
      headCells={headCells}
      showCheckbox={false}
      loading={loadingSessionsList}
      error={errorSessionsList}
    />
  );
}

export default SessionsList;
