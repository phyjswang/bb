import { createContext } from "react";

interface FilePreviewScrollPosition {
  scrollTop: number;
}

export const FilePreviewScrollPositionContext =
  createContext<FilePreviewScrollPosition | null>(null);

const panelStateFilePreviewScrollPositions = new Map<
  string,
  Map<string, FilePreviewScrollPosition>
>();

export function getPanelStateFilePreviewScrollPositions(
  panelStateId: string,
): Map<string, FilePreviewScrollPosition> {
  let positions = panelStateFilePreviewScrollPositions.get(panelStateId);
  if (positions === undefined) {
    positions = new Map();
    panelStateFilePreviewScrollPositions.set(panelStateId, positions);
  }
  return positions;
}
