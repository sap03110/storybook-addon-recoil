import type { StoryContext, Decorator } from "@storybook/react";
import React, { Fragment, useEffect } from "react";
import { RecoilRoot, useRecoilCallback, type RecoilState } from "recoil";
import { RecoilMockState } from "../types";

const Wrapper = ({
  newState,
  children,
}: {
  children: any;
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

  return <Fragment>{children}</Fragment>;
};

export const withRecoil = (
  Story: Parameters<Decorator>[0],
  { parameters }: StoryContext,
) => (
  <RecoilRoot>
    <Wrapper newState={parameters.recoil}>
      <Story />
    </Wrapper>
  </RecoilRoot>
);
export default withRecoil;
