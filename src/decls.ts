import * as marked from 'marked';
import * as fs from 'fs';
import { parse } from './parse';

export interface Metadata {
  title: string;
  date: Date;
  tags: Array<string>
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
// TODO: Should this be here
export class Page {
  filename: string;
  path: string;
  metadata: Metadata;
  htmlbody: string;

  constructor (path: string) {
    this.path = path;
    this.filename = this.path.split('/')[1];
    let content = fs.readFileSync(path, 'utf-8');

    let parsed = parse(content);
    this.htmlbody = parsed.html;
    let metadata = parsed.metadata;

    this.metadata = {
      title: metadata.title,
      date: new Date(metadata.date),
      tags: metadata.tags.split(','),
    }
  }

  get htmlpath(): string {
    return this.path.split('.')[0] + '.html';
  }
}

export interface Directory {
  name: string;
  files: Array<Page>;
}
