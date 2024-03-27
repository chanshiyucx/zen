/**
 * @description Convert string to dom element
 * @param String to be converted
 * @return Converted dom element
 */
const convertStringToHTML = (htmlString: string): HTMLElement => {
  const parser = new DOMParser()
  const html = parser.parseFromString(htmlString, "text/html")
  return html.body
}

// Test Case
const htmlString = `
    <a href="demo/img/journey.jpg">
      <img src="demo/img/journey_thumbnail.jpg" />
    </a>
`
console.log(convertStringToHTML(htmlString))
