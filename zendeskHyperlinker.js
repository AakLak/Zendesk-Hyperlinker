// ==UserScript==
// @name         Zendesk Product Hyperlinker
// @namespace    https://besuperfly.com/
// @version      0.1
// @description  Automatically hperlink mentions of products.
// @author       Aakash Lakhotia
// @match        https://besuperfly.zendesk.com/*
// @grant        none
// ==/UserScript==

var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 2500);
  }
};

waitForEl('.ticket_submit_buttons', function() {
  'use strict';
  setInterval(function() {
    var visibleReplyButton = $(".ticket_submit_buttons").filter(':visible')[0];

    visibleReplyButton.addEventListener("mouseover", function(e) {
      var editor = $(".zendesk-editor--rich-text-comment").filter(':visible')[0];
      editor.setAttribute('style', 'white-space: pre-wrap;');
      var replyText = editor.innerHTML;
      replyText = replyText.replace(/image intense/gi, '<a href="https://besuperfly.com/product/image-intense-plugin/">Image Intense</a>');
      replyText = replyText.replace(/content intense/gi, '<a href="https://besuperfly.com/product/content-intense-plugin/">Content Intense</a>');
      replyText = replyText.replace(/lavanya/gi, '<a href="https://besuperfly.com/product/lavanya-theme/">Lavanya</a>');
      replyText = replyText.replace(/anthem/gi, '<a href="https://besuperfly.com/product/anthem-theme/">Anthem</a>');
      replyText = replyText.replace(/josefin/gi, '<a href="https://besuperfly.com/product/josefin-theme/">Josefin</a>');
      replyText = replyText.replace(/arrow/gi, '<a href="https://besuperfly.com/product/arrow-theme/">Arrow</a>');
      replyText = replyText.replace(/shado/gi, '<a href="https://besuperfly.com/product/shado-theme/">Shado</a>');
      replyText = replyText.replace(/header customizer/gi, '<a href="https://besuperfly.com/product/divi-header-customizer/">Header Customizer</a>');
      editor.innerHTML = replyText;
    });
  }, 5000);
});
