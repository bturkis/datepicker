/**
 * Inline SVG icons — removes need for external icon library.
 * Uses Lucide icon paths (24x24 viewBox).
 */
import { h, type FunctionalComponent } from "vue";

interface IconProps {
  size?: number | string;
  class?: string;
}

function createIcon(paths: string[]): FunctionalComponent<IconProps> {
  return (props) => {
    const size = props.size ?? 16;
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: props.class,
      },
      paths.map((d) => h("path", { d })),
    );
  };
}

export const IconCalendar = createIcon([
  "M8 2v4",
  "M16 2v4",
  "M3 10h18",
  "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18",
]);

export const IconChevronDown = createIcon(["M6 9l6 6 6-6"]);
export const IconChevronUp = createIcon(["M18 15l-6-6-6 6"]);
export const IconChevronLeft = createIcon(["M15 18l-6-6 6-6"]);
export const IconChevronRight = createIcon(["M9 18l6-6-6-6"]);
