import * as mustache from 'mustache';
import { makedir, getFiles } from './util';
import * as fs from 'fs';

makedir('dist');
makedir('dist/notes');

let config = {
  title: "notes",
  directories: ["notes"],
}

let dirs = getFiles(config.directories)
var notetemplate = fs.readFileSync('templates/page.html', 'utf-8')
var indextemplate = fs.readFileSync('templates/index.html', 'utf-8')

console.log(dirs[0].files.map(file => file.metadata.title))

let files = dirs[0].files;

fs.writeFile("dist/index.html", mustache.render(
  indextemplate,
  { 
    title: config.title,
    dirs: files,
  }),
  (err) => console.log(err)
);

files.forEach((file) => {
  var html = mustache.render(notetemplate, {
    title: file.metadata.title,
    body: file.htmlbody,
  })

  fs.writeFile("dist/" + file.htmlpath, html, (err) =>  {
    console.log(err);
  })
})
