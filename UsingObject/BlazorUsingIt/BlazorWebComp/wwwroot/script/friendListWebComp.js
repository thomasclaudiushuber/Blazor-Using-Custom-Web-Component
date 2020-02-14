'use strict';

(function () {
    class FriendList extends HTMLElement {
        constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open' });

            this.listContainer = document.createElement('div');

            shadow.appendChild(this.listContainer);
        }

        get friends() {
            return this.internalFriendList;
        }

        set friends(friends) {
            this.internalFriendList = friends;
            this.initList();
        }

        connectedCallback() {
            this.initList();
        }

        initList() {
            if (!this.internalFriendList) {
                this.internalFriendList = [];
            }

            this.listContainer.innerHTML = `
                          <h3>Friend list</h3>
                          <ul>
                          ${this.internalFriendList.map(friend => `
                            <li><b>${friend.firstName}</b> ${friend.lastName}</li>
                          `).join('')}
                          </ul>`;
        }
    }

    customElements.define('friend-list', FriendList);
})();