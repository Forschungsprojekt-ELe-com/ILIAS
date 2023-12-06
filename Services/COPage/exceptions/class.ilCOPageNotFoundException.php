<?php
/* Copyright (c) 1998-2009 ILIAS open source, Extended GPL, see docs/LICENSE */

require_once 'Services/Exceptions/classes/class.ilException.php';

/**
 * Page not found exception
 *
 * @author Alex Killing <alex.killing@gmx.de>
 * @version $Id$
 *
 */
class ilCOPageNotFoundException extends ilException
{
    /**
     * Constructor
     *
     * A message is not optional as in build in class Exception
     *
     * @param string $a_message message
     */
    public function __construct($a_message)
    {
        parent::__construct($a_message);
    }
}
