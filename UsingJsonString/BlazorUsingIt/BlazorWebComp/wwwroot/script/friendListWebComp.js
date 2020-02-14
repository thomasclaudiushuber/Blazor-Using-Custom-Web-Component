'use strict';

(function () {
    class FriendList extends HTMLElement {
        constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open' });

            this.listContainer = document.createElement('div');

            shadow.appendChild(this.listContainer);
        }

        get friendsJson() {
            return this.getAttribute('friendsJson');
        }

        set friendsJson(friendsJson) {
            this.setAttribute('friendsJson', friendsJson);
            this.initList();
        }

        connectedCallback() {
            this.initList();
        }

        initList() {

            let internalFriendList = [];
            if (this.friendsJson) {
                internalFriendList = JSON.parse(this.friendsJson);
            }
            console.log("init list");
            console.log(internalFriendList);

            this.listContainer.innerHTML = `
                          <h3>Friend list</h3>
                          <ul>
                          ${internalFriendList.map(friend => `
                            <li><b>${friend.firstName}</b> ${friend.lastName}</li>
                          `).join('')}
                          </ul>`;
        }
    }

    customElements.define('friend-list', FriendList);
})();