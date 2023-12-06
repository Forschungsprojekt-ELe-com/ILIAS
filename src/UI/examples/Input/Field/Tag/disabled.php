<?php
/**
 * Example show how to create and render a disabled tag input field and attach it to a
 * form. This example does not contain any data processing.
 */
function disabled()
{
    //Step 0: Declare dependencies
    global $DIC;
    $ui = $DIC->ui()->factory();
    $renderer = $DIC->ui()->renderer();

    //Step 1: Define the tag input field
    $tag_input = $ui->input()
        ->field()
        ->tag(
            "Basic Tag",
            ['Interesting', 'Boring', 'Animating', 'Repetitious'],
            "Just some tags"
        )->withDisabled(true)->withValue(["Boring", "Animating"]);

    //Step 2: Define the form and attach the section.
    $form = $ui->input()->container()->form()->standard("#", [$tag_input]);

    //Step 3: Render the form with the text input field
    return $renderer->render($form);
}
