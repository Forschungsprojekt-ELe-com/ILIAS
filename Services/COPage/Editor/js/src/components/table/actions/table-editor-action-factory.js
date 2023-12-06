/* Copyright (c) 1998-2020 ILIAS open source, Extended GPL, see docs/LICENSE */

import EditorAction from "../../../actions/editor-action.js";
import ACTIONS from "./table-action-types.js";

/**
 * COPage action factory
 *
 */
export default class TableEditorActionFactory {

  //COMPONENT = "Table";

  /**
   * @type {EditorActionFactory}
   */
  //editorActionFactory;

  /**
   *
   * @param {EditorActionFactory} editorActionFactory
   */
  constructor(editorActionFactory) {
    this.COMPONENT = "Table";
    this.editorActionFactory = editorActionFactory;
  }

  /**
   * @returns {EditorAction}
   */
  editCell(tablePcid, tableHierid, row, column) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.EDIT_CELL, {
      tablePcid: tablePcid,
      tableHierid: tableHierid,
      row: row,
      column: column
    });
  }

  saveReturn(content) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.SAVE_RETURN, {
      content: content
    });
  }

  /**
   * @returns {EditorAction}
   */
  colBefore(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.COL_BEFORE, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  colAfter(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.COL_AFTER, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  colLeft(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.COL_LEFT, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  colRight(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.COL_RIGHT, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  colDelete(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.COL_DELETE, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  rowBefore(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.ROW_BEFORE, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  rowAfter(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.ROW_AFTER, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  rowUp(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.ROW_UP, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  rowDown(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.ROW_DOWN, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  rowDelete(nr, cellPcid, tablePcid) {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.ROW_DELETE, {
      nr: nr,
      cellPcid: cellPcid,
      tablePcid: tablePcid
    });
  }

  /**
   * @returns {EditorAction}
   */
  autoSave() {
    return this.editorActionFactory.action(this.COMPONENT, ACTIONS.AUTO_SAVE);
  }

}