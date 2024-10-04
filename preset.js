/**
 * to load the built addon in this test Storybook
 */

export const managerEntries = (entry = []) => {
  return [...entry, require.resolve("./dist/manager.js")];
};
