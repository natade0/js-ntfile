import NTFile from "../src/NTFile.js";

NTFile.exec('npx rollup -c "./scripts/rollup.config.js"');

const name = "NTFile";
const input = "./src/NTFile.js";

const srcCode = NTFile.loadTextFile(input);
const mmatchData = srcCode.match(/\/\*\*[\s\S]*?\*\//);

if (mmatchData !== null) {
	const fileList = ["./build/cjs/" + name + ".min.js", "./build/esm/" + name + ".min.js"];
	const text = mmatchData[0].trim() + "\n";
	for (const fileurl of fileList) {
		NTFile.saveTextFile(fileurl, text + NTFile.loadTextFile(fileurl));
	}
}
