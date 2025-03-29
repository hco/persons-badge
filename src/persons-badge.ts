declare global {
  interface Window {
    customBadges: Array<{
      type: string;
      name: string;
      preview?: boolean;
      description?: string;
      documentationURL?: string;
    }>;
  }
}

import { LitElement, css, html } from "lit";

interface HomeAssistant {
  states: {
    [key: string]: {
      state: string;
      attributes?: {
        entity_picture?: string;
      };
      [key: string]: unknown;
    };
  };
}

interface Config {
  entity?: string;
  [key: string]: unknown;
}

class PersonBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .person-image {
      width: 28px;
      height: 28px;
      margin-top: 4px;
      border-radius: 50%;
      object-fit: cover;
      transition: transform 0.2s;
      cursor: pointer;
    }
    .person-image:hover {
      transform: scale(1.5);
    }
  `;

  hass?: HomeAssistant;
  config?: Config;

  setConfig(config: Config): void {
    this.config = config;
  }

  public render() {
    if (!this.hass) {
      console.error("No Home Assistant instance found");
      return;
    }

    const personsAtHome = Object.entries(this.hass.states)
      .filter(([key]) => key.startsWith("person."))
      .filter(([, value]) => value.state === "home")
      .filter(([, value]) => value.attributes?.entity_picture);

    if (personsAtHome.length === 0) {
      console.info("No persons at home");
      return;
    }

    return html`
      <ha-badge>
        ${personsAtHome.map(([key, value]) => {
          return html`
            <img
              class="person-image"
              src="${value.attributes?.entity_picture || ""}"
              alt="${key}"
              title="${key.replace("person.", "").replace("_", " ")}"
              @click=${() => this._handleClick(key)}
            />
          `;
        })}
      </ha-badge>
    `;
  }

  private _handleClick(entityId: string): void {
    const event = new CustomEvent("hass-action", {
      bubbles: true,
      composed: true,
      detail: {
        config: {
          entity: entityId,
          tap_action: {
            action: "more-info",
          },
        },
        action: "tap",
      },
    });
    this.dispatchEvent(event);
  }
}

customElements.define("persons-badge", PersonBadge);
window.customBadges = window.customBadges || [];
window.customBadges.push({
  type: "custom:persons-badge",
  name: "Persons Badge",
  preview: false,
  description: "A badge showing person state",
  documentationURL:
    "https://developers.home-assistant.io/docs/frontend/custom-ui/custom-badge",
});
