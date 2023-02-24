import { readdirSync, Dirent } from "node:fs";

const getDirectories = (directoryPath: string, depth = 1): string[] => {
  const directories: string[] = [];

  const readDirectory = (dir: string, currentDepth: number) => {
    readdirSync(dir, { withFileTypes: true }).forEach((dirent: Dirent) => {
      if (dirent.isDirectory()) {
        const fullPath = `${dir}/${dirent.name}`;
        directories.push(fullPath);
        if (currentDepth < depth) {
          readDirectory(fullPath, currentDepth + 1);
        }
      }
    });
  };

  readDirectory(directoryPath, 1);
  return directories;
};

export default function () {
    const current = process.cwd();
    const directories = getDirectories(current + "/public/docs").map(s => s.slice((current + "/public/").length));
    return directories.sort();
}