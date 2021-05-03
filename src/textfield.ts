import { css, customElement, html, LitElement, property } from "lit-element";

@customElement("text-field")
export class TextField extends LitElement {

    static styles = css`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }
    `
    @property({ type: String })
    name = "Hey";

    clicked(e: MouseEvent) {
        this.name += " yes"
    }
    render() {
        return html`
            <h2>Wow ${this.name}</h2>
            <button @click=${this.clicked}>Press ok</button>
            `
    }

}