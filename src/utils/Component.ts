export default class Component {
  /**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier (ou comme premier)
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Object} attributes
   * @returns domElement
   */
  createMarkup(
    markupname: string,
    text: string,
    parent: HTMLElement,
    attributes: Record<string, any> = {},
    prepend: boolean = false
  ): HTMLElement {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    if (prepend) {
      parent.prepend(markup);
    } else {
      parent.appendChild(markup);
    }

    for (let key in attributes) {
      markup.setAttribute(key, attributes[key]);
    }
    return markup;
  }
}
