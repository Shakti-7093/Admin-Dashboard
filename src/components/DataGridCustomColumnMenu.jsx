import {
    GridColumnMenuContainer,
    GridFilterInputMultipleSingleSelect,
  } from "@mui/x-data-grid";
import { GridColumnMenuHideItem } from "@mui/x-data-grid";
  
  const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props;
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        <GridFilterInputMultipleSingleSelect onClick={hideMenu} column={currentColumn} />
        <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
      </GridColumnMenuContainer>
    );
  };
  
  export default CustomColumnMenu;