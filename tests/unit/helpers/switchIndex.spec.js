import { switchIndex } from "@/helpers/switchIndex";

describe("helpers/switchIndex", () => {
  it("should switch indexes correctly", () => {
    const items = [{ id: 0 }, { id: 3 }, { id: 6 }];
    const index1 = 0;
    const index2 = 2;

    const newItems = switchIndex(items, index1, index2);

    expect(newItems[index1].id).toEqual(items[index2].id);
    expect(newItems[index2].id).toEqual(items[index1].id);
  });
});
