import UI from "./ui";

class SimpleSelect {
    element: HTMLSelectElement;

    constructor(selector: string|HTMLSelectElement) {
        if(typeof(selector) === "string") {
            this.element = document.querySelector<HTMLSelectElement>(selector);
        }else if(selector instanceof HTMLSelectElement) {
            this.element = selector;
        }else {
            console.error("O element deve ser um seletor ou um HTMLSelectElement");
        }

        const options : Option[] = [...this.element.options].map(option => ({
            value: option.value,
            label: option.innerText
        }));


        const ui = new UI(this.element, options);

        // Setup events
        ui.container.addEventListener("click", () => {
            ui.open();
            ui.focusSearch();
        });
        ui.container.addEventListener("focusout", (e) => {
            if(!(e.currentTarget as HTMLDivElement).contains(e.relatedTarget as HTMLElement)) {
                ui.close()
            }
        });
    }
}


window.SimpleSelect = SimpleSelect;

new SimpleSelect("#select");

export default SimpleSelect;
