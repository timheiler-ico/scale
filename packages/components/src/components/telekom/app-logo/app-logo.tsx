/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-logo',
  styleUrl: 'app-logo.css',
})
export class Logo {
  @Prop() href?: string = 'javascript:void(0);';
  @Prop() logoTitle?: string = 'Telekom Logo';
  @Prop() color: string = '#fff';
  @Prop() claim: boolean = false;
  @Prop() claimLang: string;

  render() {
    if (!this.claim) {
      return (
        <svg
          width="51"
          height="24"
          viewBox="0 0 51 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.8v-4.83h4.996v4.83H0zm15.235 0v-4.83h4.997v4.83h-4.997zm14.99 0v-4.83h4.995v4.83h-4.996zm14.988 0v-4.83h4.996v4.83h-4.996zM19.984 0l.248 8.415-1.31.219c-.243-2.48-.916-4.32-2.02-5.52-1.16-1.257-2.76-1.913-4.815-1.97V18.75c0 1.538.225 2.536.689 2.997.395.392 1.062.633 2.002.723.28.023.755.034 1.428.034v1.346H4.026v-1.346c.673 0 1.148-.011 1.427-.034.94-.09 1.608-.33 2.002-.723.465-.46.687-1.46.687-2.997V1.145c-2.055.056-3.652.712-4.813 1.968-1.103 1.201-1.776 3.041-2.02 5.521L0 8.415.247 0h19.737z"
            fill={this.color}
            fill-rule="nonzero"
          />
        </svg>
      );
    }
    return (
      <a
        class="logo"
        href={this.href}
        title={this.logoTitle}
        onFocus={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284 36">
          <g fill={this.color} fill-rule="nonzero">
            {this.claimLang === 'de' ? (
              <path d="M104.6 16v2.3h4.1v2h-4.1v2.5h4.2v2.1h-6.4v-11h6.4V16zM114 20.9h-1.1v4h-2.2v-11h4c2.1 0 3.6 1.3 3.6 3.5 0 1.7-.9 2.8-2.2 3.2l2.3 4.2h-2.5l-1.9-3.9zm-1.1-2.1h1.7c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.4-1.5-1.4h-1.7v2.8zM120 13.9h2.2v8.9h3.9v2.1H120zM129.5 16v2.3h4.1v2h-4.1v2.5h4.3v2.1h-6.5v-11h6.5V16zM143.1 21.8c0 1.7-1 3-3.4 3h-4.1V13.9h4.2c2.2 0 3.2 1.3 3.2 2.9 0 1.1-.5 2-1.3 2.5v.1c.9.4 1.4 1.3 1.4 2.4zm-5.2-5.9v2.5h1.7c.7 0 1.2-.5 1.2-1.3s-.5-1.3-1.2-1.3h-1.7v.1zm2.9 5.7c0-.8-.5-1.3-1.3-1.3h-1.6v2.6h1.6c.8 0 1.3-.5 1.3-1.3zM147 16v2.3h4.1v2H147v2.5h4.3v2.1h-6.5v-11h6.5V16zM161.6 13.9v11h-2.2l-3.9-6.9h-.1v6.9h-2.3v-11h2.3l3.9 6.9h.1v-6.9zM166 22.3v2.3c0 1.7-.7 2.8-2.5 2.9v-1.2c.9-.1 1.2-.5 1.2-1.4v-.1h-1.2v-2.5h2.5zM183.9 13.9l-2.9 11h-2.4l-1.8-7.2h-.1l-1.8 7.2h-2.4l-2.9-11h2.3l1.8 7.3h.1l1.7-7.3h2.5l1.8 7.3h.1l1.7-7.3zM189.9 22.7h-3.8l-.7 2.1h-2.2l3.7-10.9h2.2l3.7 10.9h-2.2l-.7-2.1zm-.7-2l-1.1-3.4h-.1l-1.1 3.4h2.3zM193.3 21.8h2.2c.2.9.8 1.3 1.6 1.3 1 0 1.4-.5 1.4-1.2s-.5-1-1.3-1.3l-1.3-.4c-1.8-.5-2.4-1.7-2.4-3.1 0-2.1 1.6-3.4 3.6-3.4 2.2 0 3.4 1.3 3.6 3.3h-2.2c-.2-.8-.6-1.2-1.5-1.2-.7 0-1.3.4-1.3 1.2 0 .8.5 1.1 1.1 1.2l1.3.3c1.6.4 2.6 1.6 2.6 3.2 0 2.2-1.6 3.4-3.7 3.4-2.2 0-3.5-1.2-3.7-3.3zM214 13.9l-3.5 11h-2.2l-3.6-11h2.3l2.3 7.4h.1l2.4-7.4zM217.1 16v2.3h4.1v2h-4.1v2.5h4.3v2.1h-6.5v-11h6.5V16zM226.5 20.9h-1.1v4h-2.2v-11h4c2.1 0 3.6 1.3 3.6 3.5 0 1.7-.9 2.8-2.2 3.2l2.3 4.2h-2.5l-1.9-3.9zm-1.1-2.1h1.7c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.4-1.5-1.4h-1.7v2.8zM239.9 21.8c0 1.7-1 3-3.4 3h-4.1V13.9h4.2c2.2 0 3.2 1.3 3.2 2.9 0 1.1-.5 2-1.3 2.5v.1c.9.4 1.4 1.3 1.4 2.4zm-5.2-5.9v2.5h1.7c.7 0 1.2-.5 1.2-1.3s-.5-1.3-1.2-1.3h-1.7v.1zm2.9 5.7c0-.8-.5-1.3-1.3-1.3h-1.6v2.6h1.6c.9 0 1.3-.5 1.3-1.3zM241.6 13.9h2.2v11h-2.2zM254.4 13.9v11h-2.2l-4-6.9h-.1v6.9h-2.2v-11h2.3l3.9 6.9h.1v-6.9zM256.5 13.9h3.8c2.8 0 4.6 1.9 4.6 5.5s-1.8 5.5-4.6 5.5h-3.8v-11zm3.7 8.9c1.5 0 2.5-1 2.5-3.4s-1-3.4-2.5-3.4h-1.4v6.8h1.4zM268.8 16v2.3h4v2h-4v2.5h4.2v2.1h-6.4v-11h6.4V16zM273.9 13.9h7.8V16h-2.8v8.9h-2.2V16h-2.8zM281.5 22.3h2.5v2.6h-2.5z" />
            ) : (
              <path d="M103.174 13.906h2.159v8.686h3.822v2.01h-5.981zM110.296 13.906h2.16v10.696h-2.16zM116.712 15.904v2.42h3.822v1.997h-3.822v4.281h-2.16V13.906h6.13v1.998zM124.033 15.904v2.258h3.97v1.998h-3.97v2.432h4.132v2.01h-6.291V13.906h6.291v1.998zM133.662 13.906h2.16v10.696h-2.16zM137.05 21.575h2.147c.186.893.781 1.253 1.563 1.253.93 0 1.39-.509 1.39-1.204 0-.67-.447-1.005-1.278-1.228l-1.229-.348c-1.712-.459-2.382-1.7-2.382-3.04 0-2.047 1.526-3.326 3.5-3.326 2.158 0 3.325 1.254 3.536 3.214h-2.11c-.149-.794-.595-1.203-1.427-1.203-.732 0-1.29.41-1.29 1.166 0 .757.496 1.03 1.092 1.179l1.228.335c1.588.41 2.581 1.588 2.581 3.115 0 2.146-1.588 3.35-3.598 3.35-2.222 0-3.525-1.154-3.723-3.263zM151.618 15.904v2.42h3.822v1.997h-3.822v4.281h-2.16V13.906h6.13v1.998zM156.594 19.254c0-3.462 1.6-5.584 4.53-5.584 2.928 0 4.528 2.122 4.528 5.584 0 3.462-1.6 5.584-4.529 5.584-2.928 0-4.53-2.134-4.53-5.584zm6.812 0c0-2.333-.806-3.524-2.283-3.524-1.489 0-2.283 1.179-2.283 3.524 0 2.345.794 3.524 2.283 3.524 1.49 0 2.283-1.191 2.283-3.524zM170.343 20.693H169.3v3.91h-2.159V13.917h3.946c2.085 0 3.55 1.229 3.55 3.388 0 1.638-.845 2.742-2.147 3.164l2.258 4.132h-2.395l-2.01-3.909zm-1.043-1.997h1.676c.843 0 1.427-.497 1.427-1.39 0-.894-.571-1.39-1.427-1.39H169.3v2.78zM179.203 21.575h2.146c.187.893.782 1.253 1.564 1.253.93 0 1.39-.509 1.39-1.204 0-.67-.447-1.005-1.278-1.228l-1.229-.348c-1.712-.459-2.382-1.7-2.382-3.04 0-2.047 1.526-3.326 3.499-3.326 2.16 0 3.326 1.254 3.537 3.214h-2.11c-.149-.794-.596-1.203-1.427-1.203-.732 0-1.29.41-1.29 1.166 0 .757.496 1.03 1.091 1.179l1.229.335c1.588.41 2.581 1.588 2.581 3.115 0 2.146-1.588 3.35-3.599 3.35-2.22 0-3.536-1.154-3.722-3.263zM196.004 13.906v10.696h-2.159V20.16h-3.822v4.442h-2.159V13.906h2.16v4.256h3.821v-4.256zM203.4 22.53h-3.685l-.683 2.06h-2.196l3.648-10.684h2.16l3.647 10.684h-2.196l-.695-2.06zm-.67-2.01l-1.117-3.313h-.1l-1.116 3.313h2.333zM210.324 20.693h-1.042v3.91h-2.16V13.917h3.947c2.084 0 3.549 1.229 3.549 3.388 0 1.638-.844 2.742-2.147 3.164l2.258 4.132h-2.395l-2.01-3.909zm-1.042-1.997h1.675c.844 0 1.427-.497 1.427-1.39 0-.894-.57-1.39-1.427-1.39h-1.675v2.78zM215.983 13.906h2.159v10.696h-2.16zM228.503 13.906v10.696h-2.171l-3.847-6.688h-.1v6.688h-2.159V13.906h2.197l3.834 6.725h.1v-6.725zM239.026 18.969v.595c0 3.537-1.589 5.274-4.294 5.274-3.102 0-4.678-2.16-4.678-5.584 0-3.425 1.663-5.584 4.629-5.584 2.308 0 3.871 1.377 4.181 3.375h-2.308c-.235-.794-.93-1.315-1.873-1.315-1.527 0-2.383 1.216-2.383 3.524s.82 3.524 2.432 3.524c1.142 0 1.899-.533 2.085-1.948h-1.948v-1.861h4.157zM240.192 22.133h2.457v2.47h-2.457z" />
            )}
            <g>
              <path d="M7.3 16.6H0v7.3h7.3z" />
              <path d="M.4 0L0 12.7l1.9.3c.4-3.7 1.3-6.5 2.9-8.3 1.7-1.9 4-2.9 7-3v26.6c0 2.3-.3 3.8-1 4.5-.6.6-1.5 1-2.9 1.1-.3.1-1 .1-2 .1v2h17.8v-2c-1 0-1.7 0-2.1-.1-1.4-.1-2.3-.5-2.9-1.1-.7-.7-1-2.2-1-4.5V1.7c3 .1 5.3 1.1 7 3 1.6 1.8 2.6 4.6 2.9 8.3l1.9-.3L29.2 0H.4z" />
              <path d="M22.2 16.6v7.3h7.3v-7.3h-3.7zM44.1 16.6v7.3h7.3v-7.3h-3.6zM66 16.6v7.3h7.3v-7.3h-3.8z" />
            </g>
          </g>
        </svg>
      </a>
    );
  }
}
