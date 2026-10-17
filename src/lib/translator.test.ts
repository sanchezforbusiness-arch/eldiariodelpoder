import { test } from "node:test";
import assert from "node:assert/strict";
import { getInitialLang } from "./translator";

test("loading a Spanish URL never chooses the browser language or a stored translation", () => {
  const oldNavigator = Object.getOwnPropertyDescriptor(globalThis, "navigator");
  const oldStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "navigator", { configurable: true, value: { language: "en-US", languages: ["en-US"] } });
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: () => "ar" } });
  try {
    assert.equal(getInitialLang(), "es");
  } finally {
    if (oldNavigator) Object.defineProperty(globalThis, "navigator", oldNavigator);
    else Reflect.deleteProperty(globalThis, "navigator");
    if (oldStorage) Object.defineProperty(globalThis, "localStorage", oldStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});