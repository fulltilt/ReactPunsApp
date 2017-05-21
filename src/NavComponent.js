import React from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const NavComponent = ({ clickMenu, closeMenu, menuOpen, anchorEl }) => (
	<AppBar title="RxJS Pun App" 
		iconClassNameRight="muidocs-icon-navigation-expand-more" 
		onLeftIconButtonTouchTap={clickMenu}>

		<Popover
	    open={menuOpen}
	    anchorEl={anchorEl}
	    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	    targetOrigin={{horizontal: 'left', vertical: 'top'}}
	    onRequestClose={closeMenu}>
	    <Menu>
	      <MenuItem primaryText="Github" href="https://github.com"/>
	      <MenuItem primaryText="RxJS Docs" href="http://reactivex.io/rxjs" />
	    </Menu>
	  </Popover>
		
	</AppBar>
);

export default NavComponent;
	  