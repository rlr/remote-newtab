/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

(function(exports) {
  const gMockObject = {
    open() {
      return this.generateFaultyRequest("Error during open");
    },

    get() {
      return this.generateFaultyRequest("Error during save");
    },

    generateFaultyRequest(errorCode) {
      var request = {};
      setTimeout(() => {
        request.onerror({target: {errorCode}});
      }, 0);
      return request;
    }
  };
  exports.gMockObject = gMockObject;
}(window));
