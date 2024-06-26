// ==UserScript==
// @name         《旋元佑进阶文法》大陆术语替换
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  替换《旋元佑进阶文法》中的术语为大陆版本
// @author       kaichi
// @match        https://grammar.codeyu.com/
// @exclude      https://grammar.codeyu.com/#docs/terminology
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeyu.com
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"

  const dic = {
    "单字":"单词",
    "文法":"语法",
    "代名词":"代词",
    "连接词":"连词",
    "对等连接词":"并列连词",
    "所有格代名词":"物主代词",
    "介系词":"介词",
    "片语":"短语",
    "名词片语":"名词短语",
    "动词片语":"动词短语",
    "介系词片语":"介词短语",
    "主词":"主语",
    "受词":"宾语",
    "子句":"从句",
    "受格":"宾格",
    "主词子句":"主语从句",
    "受词子句":"宾语从句",
    "形容词子句":"表语从句",
    "副词子句":"状语从句",
    "连缀动词":"系动词",
    "行动动词":"行为动词",
    "个别动词":"单个动词",
    "简单式":"一般时",
    "进行式":"进行时",
    "完成式":"完成时",
    "简单现在式":"一般现在时",
    "简单未来式":"一般将来时",
    "过去未来式":"过去将来时",
    "现在进行式":"现在进行时",
    "过去进行式":"过去进行时",
    "现在完成式":"现在完成时",
    "过去完成式":"过去完成时",
    "是否疑问句":"一般疑问句",
    "讯息疑问句":"特殊疑问句",
    "不定词":"不定式",
    "母音":"元音",
    "子音":"辅音",
    "无声子音":"清辅音",
    "有声子音":"浊辅音",
  };

  console.log("Dictionary")
  console.table(dic)

  function scanSubTree(node, result = []) {
    if (node.childNodes.length) {
      for (let i = 0; i < node.childNodes.length; i++) {
        scanSubTree(node.childNodes[i], result)
      }
    } else if (node.nodeType == Node.TEXT_NODE) {
      result.push(node)
    }
    return result
  }

  function quote(str) {
    return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
  }

  function replaceTextOnPage(element) {
    scanSubTree(element).forEach(function (node) {
      for (const [from, to] of Object.entries(dic)) {
        node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
      }
    })
  }

  function runWhenReady(readySelector) {
    let numAttempts = 0;
    let tryNow = function() {
        let element = document.querySelector(readySelector);
        if (element && !!element.childNodes.length) {
          replaceTextOnPage(element)
        } else {
            numAttempts++;
            if (numAttempts >= 34) {
                console.warn('Giving up after 34 attempts. Could not find: ' + readySelector);
            } else {
                setTimeout(tryNow, 250 * Math.pow(1.1, numAttempts));
            }
        }
    };
    tryNow();
  }

  function replaceWhenReady() {
    runWhenReady("#content")
    runWhenReady("#sidebar")
  }

  window.addEventListener("hashchange", replaceWhenReady)

  replaceWhenReady()
})()