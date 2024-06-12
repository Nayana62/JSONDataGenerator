# JSON Data Generator

## Overview

JSON Data Generator is a Visual Studio Code extension that simplifies the process of generating JSON data based on user input.

## Video Demo

Here's a video demonstration of how to use the JSON Data Generator extension:

<video width="640" height="360" controls>
  <source src="/src/assets/JSONDataGeneratorExtension.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- Quickly generate JSON data with customizable keys and data types.
- Supports various data types including numbers, strings, booleans, dates, and UUIDs.

## Installation

To install JSON Data Generator, follow these steps:

1. Launch Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "JSON Data Generator" in the Extensions view search box.
4. Click on the Install button next to the "JSON Data Generator" extension.

## Usage

1. Open a file in Visual Studio Code.
2. Invoke the Command Palette (`Ctrl+Shift+P`).
3. Search for "Generate JSON data" and select the "Generate JSON data" command.
4. Follow the prompts to specify the number of objects and define the keys in the desired format (`key:type`).
5. The generated JSON data will be inserted into the active editor.

## Example

For example, if you want to generate 5 objects with keys `id`, `name`, and `age`, you can input the following:

- Number of objects: `5`
- Keys: `id:number, name:string, age:number`

The extension will generate JSON data containing 5 objects with the specified keys and data types.

You can also generate JSON data with more specific formats:

- `id:number(10)`: Generates a number starting from 10 and increments for each object.
- `title:string(some text)`: Sets the title as "some text" for each object.
- `isActive:boolean(true)`: Sets the value of "isActive" key as `true` for each object.
- `date:date(D/M/Y)`: Generates a date in the format Day/Month/Year.
- `main.sub1:string`: Sets the value of "sub1" key nested under "main" as an empty string.
- `main.sub2:string`: Sets the value of "sub2" key nested under "main" as an empty string.

These formats provide more specific instructions for generating JSON data with different key-value combinations.

## Repository

The source code of this extension is available on [GitHub](https://github.com/Nayana62/JSONDataGenerator).

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/Nayana62/JSONDataGenerator).
