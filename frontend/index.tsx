import { exportComponent } from "./utils/export-component";

export const SortableTree = exportComponent(
  import("./ui/tree/internal/SortableTree"),
  "SortableTree"
);
