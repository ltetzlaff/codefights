function htmlEndTagByStartTag(startTag: string): string {
  return startTag.match(/<\w+/)[0].replace(/</, "</") + ">"
}
