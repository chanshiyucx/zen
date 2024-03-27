/**
 * @description Get image original source
 * @param Image DOM element
 * @return Image original source
 */
const getOriginalSource = (el: HTMLElement): string | null => {
  if (el.dataset.original) {
    return el.dataset.original
  } else if (el.parentElement?.tagName === "A") {
    return el.parentElement.getAttribute("href")
  } else {
    return null
  }
}

/**
 * Test Case
 *
 * 1. data attribute
 * <img src="img/journey_thumbnail.jpg" data-original="img/journey.jpg" />
 *
 * 2. anchor link
 * <a href="demo/img/journey.jpg">
 *  <img src="demo/img/journey_thumbnail.jpg" />
 * </a>
 */
