import { makeDecorator } from "@storybook/preview-api";
import { useEffect } from "react";
import { RecoilRoot, useRecoilCallback, type RecoilState } from "recoil";
import { RecoilMockState } from "./types";

const Wrapper = ({
  newState,
  children,
}: {
  children: unknown;
  newState: RecoilMockState;
}) => {
  const updateState = useRecoilCallback(
    ({ set, snapshot }) =>
      () => {
        if (!newState) return;

        const stores = Array.from(
          snapshot.getNodes_UNSTABLE(),
        ) as RecoilState<unknown>[];

        for (const state of stores) {
          const key = state.key;
          const newValue = newState[key];
          if (!state || !newValue) continue;

          set(state, newValue);
        }
      },
    [newState],
  );

  useEffect(updateState, [updateState]);

  return <>{children}</>;
};

export const withRecoil = makeDecorator({
  name: "withRecoil",
  parameterName: "recoil",
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => (
    <RecoilRoot>
      <Wrapper newState={parameters}>{getStory(context)}</Wrapper>
    </RecoilRoot>
  ),
});
export default withRecoil;
