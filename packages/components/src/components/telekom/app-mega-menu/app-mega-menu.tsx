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

import { Component, Element, h, Prop } from '@stencil/core';
import { MenuItem } from '../app-interfaces';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'app-mega-menu',
  styleUrl: 'app-mega-menu.css',
})
export class MegaMenu {
  @Element() hostElement: HTMLStencilElement;
  @Prop() navigation?: MenuItem[] = [];
  @Prop() hide: () => void;
  @Prop() activeRouteId: string;
  @Prop() isActive: boolean;
  hasCustomBody: boolean;

  componentWillLoad() {
    this.hasCustomBody = !!this.hostElement.querySelector(
      '[slot="custom-body"]'
    );
  }

  render() {
    return (
      <div class="mega-menu">
        <div class="mega-menu__wrapper">
          {this.hasCustomBody ? (
            <slot name="custom-body"></slot>
          ) : (
            <ul class="mega-menu__container">
              {this.navigation.map(child => (
                <li class="mega-menu__row">
                  <div class="mega-menu__row-title">{child.name}</div>
                  <ul>
                    {child.children &&
                      child.children.length > 0 &&
                      child.children.map(menuItem => (
                        <li>
                          <a
                            class={`mega-menu__row-item ${
                              this.activeRouteId === menuItem.id ? 'active' : ''
                            }`}
                            aria-current={
                              this.activeRouteId === menuItem.id
                                ? 'true'
                                : 'false'
                            }
                            href={menuItem.href || 'javascript:void(0);'}
                            tabIndex={this.isActive ? 0 : -1}
                            onClick={event => {
                              this.hide();
                              if (typeof menuItem.onClick === 'function') {
                                menuItem.onClick(event);
                              }
                            }}
                            onKeyDown={event => {
                              if (['Escape', 'Esc'].includes(event.key)) {
                                this.hide();
                              }
                            }}
                          >
                            <span>{menuItem.name}</span>
                            {this.activeRouteId === menuItem.id && (
                              <span class="sr-only">active</span>
                            )}
                          </a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
