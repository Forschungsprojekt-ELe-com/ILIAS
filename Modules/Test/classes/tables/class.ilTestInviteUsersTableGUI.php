<?php

/**
 * This file is part of ILIAS, a powerful learning management system
 * published by ILIAS open source e-Learning e.V.
 *
 * ILIAS is licensed with the GPL-3.0,
 * see https://www.gnu.org/licenses/gpl-3.0.en.html
 * You should have received a copy of said license along with the
 * source code, too.
 *
 * If this is not the case or you just want to try ILIAS, you'll find
 * us at:
 * https://www.ilias.de
 * https://github.com/ILIAS-eLearning
 *
 *********************************************************************/

/**
*
* @author Helmut Schottmüller <ilias@aurealis.de>
* @version $Id$
*
* @ingroup ModulesTest
*/

class ilTestInviteUsersTableGUI extends ilTable2GUI
{
    public function __construct($a_parent_obj, $a_parent_cmd)
    {
        parent::__construct($a_parent_obj, $a_parent_cmd);

        global $DIC;
        $lng = $DIC['lng'];
        $ilCtrl = $DIC['ilCtrl'];

        $this->lng = $lng;
        $this->ctrl = $ilCtrl;
        $this->counter = 1;

        $this->setFormName('inviteusers');
        $this->setStyle('table', 'fullwidth');

        $this->addColumn('', 'f', '1%');
        $this->addColumn($this->lng->txt("login"), 'login', '');
        $this->addColumn($this->lng->txt("firstname"), 'firstname', '');
        $this->addColumn($this->lng->txt("lastname"), 'lastname', '');
        $this->addColumn($this->lng->txt("clientip"), 'clientip', '');

        $this->setTitle($this->lng->txt('search_users'), 'icon_usr.svg', $this->lng->txt('usr'));

        $this->setRowTemplate("tpl.il_as_tst_invite_users_row.html", "Modules/Test");

        $this->addMultiCommand('addParticipants', $this->lng->txt('add'));

        $this->setFormAction($this->ctrl->getFormAction($a_parent_obj, $a_parent_cmd));

        $this->setDefaultOrderField("login");
        $this->setDefaultOrderDirection("asc");
        $this->setPrefix('user_select');
        $this->setSelectAllCheckbox('user_select');

        $this->enable('header');
        $this->enable('sort');
        $this->enable('select_all');
    }

    public function fillRow(array $a_set): void
    {
        $this->tpl->setVariable("USER_ID", $a_set['usr_id']);
        $this->tpl->setVariable("LOGIN", $a_set['login']);
        $this->tpl->setVariable("FIRSTNAME", $a_set['firstname']);
        $this->tpl->setVariable("LASTNAME", $a_set['lastname']);
        $this->tpl->setVariable("CLIENT_IP", $a_set['clientip']);
    }
}
