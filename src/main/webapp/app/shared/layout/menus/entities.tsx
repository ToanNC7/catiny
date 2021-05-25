import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import {Translate, translate} from 'react-jhipster';
import {NavDropdown} from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{maxHeight: '80vh', overflow: 'auto'}}
  >
    <MenuItem icon="asterisk" to="/message-group">
      <Translate contentKey="global.menu.entities.messageGroup" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/message-content">
      <Translate contentKey="global.menu.entities.messageContent" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
