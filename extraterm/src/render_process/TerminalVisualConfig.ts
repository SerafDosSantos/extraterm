/*
 * Copyright 2019 Simon Edwards <simon@simonzone.com>
 *
 * This source code is licensed under the MIT license which is detailed in the LICENSE.txt file.
 */
import { TerminalTheme } from '@extraterm/extraterm-extension-api';
import { ConfigCursorStyle } from '../Config';
import { LigatureMarker } from 'extraterm-ace-terminal-renderer';

export interface TerminalVisualConfig {
  cursorStyle: ConfigCursorStyle;
  cursorBlink: boolean;
  fontFamily: string;
  fontSizePx: number;
  fontFilePath: string;
  devicePixelRatio: number;
  terminalTheme: TerminalTheme;
  transparentBackground: boolean;
  useLigatures: boolean;
  ligatureMarker: LigatureMarker;
}

export interface AcceptsTerminalVisualConfig {
  setTerminalVisualConfig(newTerminalVisualConfig: TerminalVisualConfig): void;
}

export function isAcceptsTerminalVisualConfig(instance: any): instance is AcceptsTerminalVisualConfig {
  if (instance === null || instance === undefined) {
    return false;
  }
  return (<AcceptsTerminalVisualConfig> instance).setTerminalVisualConfig !== undefined;
}

export function injectTerminalVisualConfig(instance: any, terminalVisualConfig: TerminalVisualConfig): void {
  if (isAcceptsTerminalVisualConfig(instance)) {
    instance.setTerminalVisualConfig(terminalVisualConfig);
  }
}
