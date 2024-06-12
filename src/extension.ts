import * as vscode from "vscode";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "jsondatagenerator.JSONgenerate",
    async () => {
      const count = await vscode.window.showInputBox({
        prompt: "Number of objects",
      });
      const keys = await vscode.window.showInputBox({
        prompt:
          "Enter keys in format: key:type, separated by commas. For example: id:uuid, title:string",
      });

      if (count && keys) {
        const numObjects = parseInt(count);
        if (isNaN(numObjects) || numObjects <= 0) {
          vscode.window.showErrorMessage(
            "Please enter a valid number of objects."
          );
          return;
        }
        const keyArray = keys.split(",").map((key) => key.trim());
        const resultArray = generateArrayOfObjects(numObjects, keyArray);
        const editor = vscode.window.activeTextEditor;

        if (editor) {
          editor.edit((editBuilder) => {
            editBuilder.insert(
              editor.selection.active,
              JSON.stringify(resultArray, null, 2)
            );
          });
        }
      } else {
        vscode.window.showErrorMessage("Please provide valid input.");
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function generateArrayOfObjects(count: number, keys: string[]): any[] {
  const resultArray = [];
  resultArray.push(`//${keys}`);
  for (let i = 0; i < count; i++) {
    const obj: any = {};
    keys.forEach((key) => {
      const [keyName, keyTypeWithVal] = key.includes(":")
        ? key.split(":")
        : [key, null];
      const [keyType, val] =
        keyTypeWithVal === null ? [null, null] : keyTypeWithVal.split("(");
      const value = val ? val.replace(")", "") : null;

      const nestedKeys = keyName.split(".");
      let currentObj = obj;
      for (let j = 0; j < nestedKeys.length - 1; j++) {
        const nestedKey = nestedKeys[j];
        currentObj[nestedKey] = currentObj[nestedKey] || {};
        currentObj = currentObj[nestedKey];
      }
      const finalKey = nestedKeys[nestedKeys.length - 1];

      switch (keyType) {
        case "number":
          currentObj[finalKey] = value ? parseInt(value) + i : i + 1;
          break;
        case "string":
          currentObj[finalKey] = value ? value : "";
          break;
        case "boolean":
          currentObj[finalKey] = value ? value === "true" : false;
          break;
        case "date":
          currentObj[finalKey] = value
            ? moment().format(value)
            : new Date().toISOString();
          break;
        case "uuid":
          currentObj[finalKey] = uuidv4();
          break;
        default:
          currentObj[finalKey] = null;
          break;
      }
    });
    resultArray.push(obj);
  }
  return resultArray;
}
