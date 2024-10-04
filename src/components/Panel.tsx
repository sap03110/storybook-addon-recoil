import React, { useEffect } from "react";
import { AddonPanel } from "@storybook/components";
import { useParameter } from "@storybook/manager-api";
import { addons } from "@storybook/preview-api";

const Panel = ({ active }: { active: boolean }) => {
  const channel = addons.getChannel();
  const currentValues = useParameter("recoil", {});

  useEffect(() => {
    console.log("TODO", currentValues);
  }, [currentValues]);

  useEffect(() => {
    channel.emit(EVENTS.STATE_CHANGED, newState);
  }, [newState]);

  return (
    <AddonPanel active={active}>
      <div style={{ position: "relative" }}>
        <div
          // color={convert(themes.normal).color.green}
          style={{ padding: "20px" }}
        >
          <ul style={{ display: "flex", flex: "1 1" }}>
            <div>{JSON.stringify(currentValues, null, 2)}</div>
            {Object.entries(currentValues).map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <input
                  value={JSON.stringify(value)}
                  onChange={({ target }) => {
                    setCurrentValues((prev) => ({
                      ...prev,
                      [key]: JSON.parse(target.value),
                    }));
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AddonPanel>
  );
};

export default Panel;
