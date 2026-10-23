import type { ReactNode } from "react";

type MobileScreenProps = {
  name: string;
  nodeId: string;
  children: ReactNode;
};

export function MobileScreen({ name, nodeId, children }: MobileScreenProps) {
  return (
    <div className="ao-device-stage" data-theme="light">
      <div
        className="ao-device"
        data-name={name}
        data-node-id={nodeId}
      >
        {children}
      </div>
    </div>
  );
}
