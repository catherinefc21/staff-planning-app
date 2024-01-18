import Papa from "papaparse";

async function readCSVFile(file) {
  const response = await fetch(file);
  const reader = response.body.getReader();
  const result = await reader.read();
  const text = new TextDecoder("utf-8").decode(result.value);
  return Papa.parse(text, { header: true }).data;
}

export default readCSVFile;
