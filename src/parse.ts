import * as marked from 'marked';

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

// TODO: Fix this function
function getMDMetadata(tokens: any): any {
  let ret = {};
  for (let key of Object.keys(tokens.links)) {
    ret[key.split('_metadata_')[1]] = tokens.links[key].title;
  }
  return ret
}

export function parse(content: string) : { html: string, metadata: any } {
  var html = marked(content);
  var tokens = marked.lexer(content);
  let metadata = getMDMetadata(tokens);

  return {
    html: html,
    metadata: metadata,
  }
}
