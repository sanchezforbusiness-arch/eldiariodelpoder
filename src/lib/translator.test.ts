import { test, expect, mock } from "bun:test";

mock.module("./translate.functions", () => ({ hashText: (text: string) => text, translateTexts: () => Promise.resolve({ translations: {} }) }));
const { getInitialLang } = await import("./translator");

test("loading a Spanish URL never chooses the browser language or a stored translation", () => {
  const oldNavigator = Object.getOwnPropertyDescriptor(globalThis, "navigator");
  const oldStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: { language: "en-US", languages: ["en-US"] } });
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: () => "ar" } });
  try {
    expect(getInitialLang()).toBe("es");
  } finally {
    if (oldNavigator) Object.defineProperty(globalThis, "navigator", oldNavigator);
    else Reflect.deleteProperty(globalThis, "navigator");
    if (oldStorage) Object.defineProperty(globalThis, "localStorage", oldStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});