import { Link } from "@mui/material";
import CustomTable from "../../../../../Components/CustomTable/CustomTable";
import WorkshopMenu from "../WorkshopMenu/WorkshopMenu";

const WorkshopName = ({ name, url }) => {
  return (
    <Link to={url} sx={{ fontWeight: "600" }}>
      {name}
    </Link>
  );
};
const headCells = [
  {
    id: "workshopName",
    disablePadding: false,
    label: "Workshop Name",
  },
  {
    id: "totalSessions",
    disablePadding: false,
    label: "Total Sessions",
  },
  {
    id: "totalStudents",
    disablePadding: false,
    label: "Total Students",
  },
  {
    id: "nextSession",
    disablePadding: false,
    label: "Next Session",
  },
  {
    id: "workshopStatus",
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
function WorkshopsList({
  workshopsList,
  loadingWorkshopsList,
  errorWorkshopsList,
  setWorkshopsList,
}) {
  console.log(workshopsList);
  function createData(
    id,
    workshopName,
    totalSessions,
    totalStudents,
    nextSession,
    workshopStatus
  ) {
    return {
      id,
      workshopName: (
        <WorkshopName name={workshopName} url={`/instructor/workshops/${id}`} />
      ),
      totalSessions,
      totalStudents,
      nextSession,
      workshopStatus,
      settings: (
        <WorkshopMenu key={id} id={id} setWorkshopsList={setWorkshopsList} />
      ),
    };
  }
  const rows = workshopsList.map((_, index, arr) => {
    const item = arr[arr.length - index - 1];
    return createData(
      item._id,
      item.title,
      item.totalSessions || 0,
      item.totalStudents || 0,
      item.nextSession || "None",
      item.status || "Draft"
    );
  });
  return (
    <CustomTable
      title={"Workshops List"}
      rows={rows || []}
      headCells={headCells}
      showCheckbox={false}
      loading={loadingWorkshopsList}
      error={errorWorkshopsList}
    />
  );
}

export default WorkshopsList;
