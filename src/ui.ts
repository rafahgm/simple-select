import { createElement } from "./utils";
import "./styles/ui.scss";

class UI {
  container: HTMLDivElement;
  options?: Option[];

  constructor(element: HTMLSelectElement, options?: Option[]) {
    this.options = options;
    // Coloca o select dentro do container
    this.container = <HTMLDivElement>createElement("div", "simpleselect");
    this.container.tabIndex = 0;
    element.insertAdjacentElement("beforebegin", this.container);
    this.container.appendChild(element);

    // Cria select
    const select = createElement("div", "simpleselect__control");
    this.container.appendChild(select);

    // Cria o display do valor
    const valueContainer = createElement(
      "div",
      "simpleselect__value-container"
    );
    const singleValue = createElement("div", "simpleselect__value-single");
    const searchInput = createElement("input", "simpleselect__search");

    valueContainer.appendChild(singleValue);
    valueContainer.appendChild(searchInput);
    select.appendChild(valueContainer);

    // Cria controles do select
    const indicators = createElement("div", "simpleselect__indicators");
    const clearIndicator = createElement("div", [
      "simpleselect__indicator",
      "simpleselect__clear-indicator",
    ]);
    clearIndicator.insertAdjacentHTML(
      "beforeend",
      '<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>'
    );
    indicators.appendChild(clearIndicator);

    const separator = createElement("div", "simpleselect__indicator-separator");
    indicators.appendChild(separator);

    const dropdownIndicator = createElement("div", [
      "simpleselect__indicator",
      "simpleselect__clear-indicator",
    ]);
    dropdownIndicator.insertAdjacentHTML(
      "beforeend",
      '<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>'
    );
    indicators.appendChild(dropdownIndicator);

    select.appendChild(indicators);
  }

  open() {
    console.log(this);
    // Checa se já não está aberto
    if (!this.container.querySelector(".simpleselect__menu")) {
      // Cria menu
      const menu = createElement("div", "simpleselect__menu");
      const menuList = createElement("div", "simpleselect__menu-list");

      if (this.options) {
        this.options.forEach((opt) => {
          if (opt.value != "") {
            const option = createElement("div", "simpleselect__option");
            option.textContent = opt.label;
            menuList.appendChild(option);
          }
        });
      }

      menu.appendChild(menuList);
      this.container.appendChild(menu);
    }
  }

  close() {
    this.container.querySelector(".simpleselect__menu").remove();
  }
}

export default UI;
