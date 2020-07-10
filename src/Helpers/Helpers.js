import he from 'he'

export function htmlDecode(input) {
  // let textArea = document.createElement('textarea')
  // textArea.innerHTML = input
  // return textArea.value
  return he.decode(input)
}

export function strip_tags(str) {
    str = str.toString();
    return str.replace(/<\/?[^>]+>/gi, '');
}