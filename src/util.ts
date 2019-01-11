import * as fs from 'fs';
import * as glob from 'glob';
import { Directory, Page } from './decls';

function makedir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function getFiles(directories: Array<string>): Array<Directory> {
  return directories.map((directory) => {
    return {
      name: directory,
      files: glob.sync(directory + '/*.md').map(file => new Page(file)),
    }
  })
}

export {
  makedir,
  getFiles,
}
