import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import "@reactflow/node-resizer/dist/style.css";

export function Square({ selected }: NodeProps) {
  return (
    <div className="bg-violet-500 rounded min-w-[200px] min-h-[200px] w-full h-full">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="w-3 h-3 bg-white border-2 border-blue-400"
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 box-dots"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 box-dots"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 box-dots"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 box-dots"
      />
    </div>
  );
}
