mobl.provides('styling');
mobl.provides('mobl.ui');
styling.loadingStyle = 'styling__loadingStyle';

styling.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2786 = $("<span>");
  root8373.append(node2786);
  var condSubs522 = new mobl.CompSubscription();
  subs__.addSub(condSubs522);
  var oldValue522;
  var renderCond522 = function() {
    var value2266 = value.get();
    if(oldValue522 === value2266) return;
    oldValue522 = value2266;
    var subs__ = condSubs522;
    subs__.unsubscribe();
    node2786.empty();
    if(value2266) {
      var nodes6076 = $("<span>");
      node2786.append(nodes6076);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1266();
      }));
      
      function renderControl1266() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8374 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8374); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6076;
          nodes6076 = node.contents();
          oldNodes.replaceWith(nodes6076);
        }));
      }
      renderControl1266();
      
      
    } else {
      
      var tmp11701 = mobl.ref(null);
      
      
      var tmp11700 = mobl.ref(null);
      
      
      var tmp11699 = mobl.ref(null);
      
      var nodes6077 = $("<span>");
      node2786.append(nodes6077);
      subs__.addSub((mobl.block)(style, tmp11699, tmp11700, tmp11701, function(_, callback) {
        var root8375 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp11691 = mobl.ref(null);
        
        
        var tmp11690 = mobl.ref(null);
        
        var nodes6078 = $("<span>");
        root8375.append(nodes6078);
        subs__.addSub((mobl.label)(loadingMessage, tmp11690, tmp11691, function(_, callback) {
          var root8376 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8376); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6078;
          nodes6078 = node.contents();
          oldNodes.replaceWith(nodes6078);
        }));
        
        var tmp11693 = mobl.ref("middle");
        
        
        var tmp11692 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp11698 = mobl.ref(null);
        
        
        var tmp11697 = mobl.ref(null);
        
        
        var tmp11696 = mobl.ref(null);
        
        
        var tmp11695 = mobl.ref(null);
        
        
        var tmp11694 = mobl.ref(null);
        
        var nodes6079 = $("<span>");
        root8375.append(nodes6079);
        subs__.addSub((styling.image)(tmp11692, tmp11694, tmp11695, tmp11696, tmp11697, tmp11693, tmp11698, function(_, callback) {
          var root8377 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8377); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6079;
          nodes6079 = node.contents();
          oldNodes.replaceWith(nodes6079);
        }));
        callback(root8375); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6077;
        nodes6077 = node.contents();
        oldNodes.replaceWith(nodes6077);
      }));
      
      
    }
  };
  renderCond522();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond522();
  }));
  
  callback(root8373); return subs__;
  
  return subs__;
};
styling.headerStyle = 'styling__headerStyle';
styling.headerContainerStyle = 'styling__headerContainerStyle';
styling.headerTextStyle = 'styling__headerTextStyle';

styling.header = function(text, onclick, elements, callback) {
  var root8378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2787 = $("<div>");
  
  var ref3025 = mobl.ref(styling.headerStyle);
  if(ref3025.get() !== null) {
    node2787.attr('class', ref3025.get());
    subs__.addSub(ref3025.addEventListener('change', function(_, ref, val) {
      node2787.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3025.rebind());
  
  var val1649 = onclick.get();
  if(val1649 !== null) {
    subs__.addSub(mobl.domBind(node2787, 'tap', val1649));
  }
  
  
  var node2788 = $("<div>");
  
  var ref3024 = mobl.ref(styling.headerContainerStyle);
  if(ref3024.get() !== null) {
    node2788.attr('class', ref3024.get());
    subs__.addSub(ref3024.addEventListener('change', function(_, ref, val) {
      node2788.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3024.rebind());
  
  
  var node2789 = $("<div>");
  
  var ref3022 = text;
  node2789.text(""+ref3022.get());
  var ignore605 = false;
  subs__.addSub(ref3022.addEventListener('change', function(_, ref, val) {
    if(ignore605) return;
    node2789.text(""+val);
  }));
  subs__.addSub(ref3022.rebind());
  
  
  var ref3023 = mobl.ref(styling.headerTextStyle);
  if(ref3023.get() !== null) {
    node2789.attr('class', ref3023.get());
    subs__.addSub(ref3023.addEventListener('change', function(_, ref, val) {
      node2789.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3023.rebind());
  
  node2788.append(node2789);
  node2787.append(node2788);
  var nodes6080 = $("<span>");
  node2787.append(nodes6080);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1267();
  }));
  
  function renderControl1267() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8379); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6080;
      nodes6080 = node.contents();
      oldNodes.replaceWith(nodes6080);
    }));
  }
  renderControl1267();
  root8378.append(node2787);
  callback(root8378); return subs__;
  
  
  
  
  return subs__;
};
styling.buttonStyle = 'styling__buttonStyle';
styling.buttonPushedStyle = 'styling__buttonPushedStyle';
styling.buttonStyle = 'styling__buttonStyle';
styling.buttonPushedStyle = 'styling__buttonPushedStyle';

styling.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3026 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3026.get() !== null) {
    sp.attr('class', ref3026.get());
    subs__.addSub(ref3026.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref3026.rebind());
  
  var val1650 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1650 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1650));
  }
  
  var val1651 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1651 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1651));
  }
  
  var val1652 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after522(result__) {
                    var tmp11773 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after522);if(result__ !== undefined) after522(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1652 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1652));
  }
  
  var val1653 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1653 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1653));
  }
  
  var ref3027 = text;
  sp.text(""+ref3027.get());
  var ignore606 = false;
  subs__.addSub(ref3027.addEventListener('change', function(_, ref, val) {
    if(ignore606) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3027.rebind());
  
  
  root8380.append(sp);
  callback(root8380); return subs__;
  
  return subs__;
};
styling.sideButtonStyle = 'styling__sideButtonStyle';
styling.sideButtonPushedStyle = 'styling__sideButtonPushedStyle';

styling.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6081 = $("<span>");
  root8381.append(nodes6081);
  subs__.addSub((styling.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8382); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6081;
    nodes6081 = node.contents();
    oldNodes.replaceWith(nodes6081);
  }));
  callback(root8381); return subs__;
  
  return subs__;
};
styling.backButtonStyle = 'styling__backButtonStyle';
styling.backButtonPushedStyle = 'styling__backButtonPushedStyle';
styling.backButtonStyle = 'styling__backButtonStyle';
styling.backButtonPushedStyle = 'styling__backButtonPushedStyle';

styling.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6082 = $("<span>");
  root8383.append(nodes6082);
  subs__.addSub((styling.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6082;
    nodes6082 = node.contents();
    oldNodes.replaceWith(nodes6082);
  }));
  callback(root8383); return subs__;
  
  return subs__;
};
styling.groupStyle = 'styling__groupStyle';

styling.group = function(elements, callback) {
  var root8385 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2790 = $("<ul>");
  
  var ref3028 = mobl.ref(styling.groupStyle);
  if(ref3028.get() !== null) {
    node2790.attr('class', ref3028.get());
    subs__.addSub(ref3028.addEventListener('change', function(_, ref, val) {
      node2790.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3028.rebind());
  
  var nodes6083 = $("<span>");
  node2790.append(nodes6083);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1268();
  }));
  
  function renderControl1268() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8386); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6083;
      nodes6083 = node.contents();
      oldNodes.replaceWith(nodes6083);
    }));
  }
  renderControl1268();
  root8385.append(node2790);
  callback(root8385); return subs__;
  
  
  return subs__;
};

styling.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2791 = $("<img>");
  
  var ref3029 = url;
  if(ref3029.get() !== null) {
    node2791.attr('src', ref3029.get());
    subs__.addSub(ref3029.addEventListener('change', function(_, ref, val) {
      node2791.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3029.rebind());
  
  var ref3030 = width;
  if(ref3030.get() !== null) {
    node2791.attr('width', ref3030.get());
    subs__.addSub(ref3030.addEventListener('change', function(_, ref, val) {
      node2791.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3030.rebind());
  
  var ref3031 = height;
  if(ref3031.get() !== null) {
    node2791.attr('height', ref3031.get());
    subs__.addSub(ref3031.addEventListener('change', function(_, ref, val) {
      node2791.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3031.rebind());
  
  var ref3032 = style;
  if(ref3032.get() !== null) {
    node2791.attr('class', ref3032.get());
    subs__.addSub(ref3032.addEventListener('change', function(_, ref, val) {
      node2791.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3032.rebind());
  
  var val1654 = onclick.get();
  if(val1654 !== null) {
    subs__.addSub(mobl.domBind(node2791, 'tap', val1654));
  }
  
  var ref3033 = valign;
  if(ref3033.get() !== null) {
    node2791.attr('valign', ref3033.get());
    subs__.addSub(ref3033.addEventListener('change', function(_, ref, val) {
      node2791.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3033.rebind());
  
  var ref3034 = align;
  if(ref3034.get() !== null) {
    node2791.attr('align', ref3034.get());
    subs__.addSub(ref3034.addEventListener('change', function(_, ref, val) {
      node2791.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3034.rebind());
  
  root8387.append(node2791);
  callback(root8387); return subs__;
  
  return subs__;
};
styling.itemStyle = 'styling__itemStyle';
styling.itemPushedStyle = 'styling__itemPushedStyle';
styling.itemArrowStyle = 'styling__itemArrowStyle';

styling.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3035 = mobl.ref(styling.itemStyle);
  if(ref3035.get() !== null) {
    el.attr('class', ref3035.get());
    subs__.addSub(ref3035.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3035.rebind());
  
  var ref3036 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3036.get() !== null) {
    el.attr('class', ref3036.get());
    subs__.addSub(ref3036.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(styling.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styling.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref3036.rebind());
  
  var val1655 = onswipe.get();
  if(val1655 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1655));
  }
  
  var val1656 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp11774 = result__;
                                           function after523(result__) {
                                             var tmp11775 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after523);if(result__ !== undefined) after523(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp11776 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1656 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1656));
  }
  
  var nodes6084 = $("<span>");
  el.append(nodes6084);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1269();
  }));
  
  function renderControl1269() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8389); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6084;
      nodes6084 = node.contents();
      oldNodes.replaceWith(nodes6084);
    }));
  }
  renderControl1269();
  root8388.append(el);
  callback(root8388); return subs__;
  
  
  return subs__;
};

styling.checkBox = function(b, label, onchange, elements, callback) {
  var root8390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2792 = $("<input>");
  node2792.attr('type', "checkbox");
  
  var ref3038 = b;
  node2792.attr('checked', !!ref3038.get());
  subs__.addSub(ref3038.addEventListener('change', function(_, ref, val) {
    if(ref === ref3038) node2792.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2792, 'change', function() {
    b.set(!!node2792.attr('checked'));
  }));
  
  var val1658 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1658 !== null) {
    subs__.addSub(mobl.domBind(node2792, 'tap', val1658));
  }
  
  var val1659 = onchange.get();
  if(val1659 !== null) {
    subs__.addSub(mobl.domBind(node2792, 'change', val1659));
  }
  
  root8390.append(node2792);
  
  root8390.append(" ");
  
  var node2793 = $("<span>");
  
  var ref3037 = label;
  node2793.text(""+ref3037.get());
  var ignore607 = false;
  subs__.addSub(ref3037.addEventListener('change', function(_, ref, val) {
    if(ignore607) return;
    node2793.text(""+val);
  }));
  subs__.addSub(ref3037.rebind());
  
  
  var val1657 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after524(result__) {
                    var tmp11777 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after524);if(result__ !== undefined) after524(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1657 !== null) {
    subs__.addSub(mobl.domBind(node2793, 'tap', val1657));
  }
  
  root8390.append(node2793);
  callback(root8390); return subs__;
  
  
  return subs__;
};
styling.textFieldStyle = 'styling__textFieldStyle';
styling.textFieldInvalidStyle = 'styling__textFieldInvalidStyle';
styling.textFieldLabelStyle = 'styling__textFieldLabelStyle';
styling.validationMessageStyle = 'styling__validationMessageStyle';
styling.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


styling.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2794 = $("<span>");
  root8391.append(node2794);
  var condSubs523 = new mobl.CompSubscription();
  subs__.addSub(condSubs523);
  var oldValue523;
  var renderCond523 = function() {
    var value2267 = label.get();
    if(oldValue523 === value2267) return;
    oldValue523 = value2267;
    var subs__ = condSubs523;
    subs__.unsubscribe();
    node2794.empty();
    if(value2267) {
      
      var tmp11702 = mobl.ref(null);
      
      var nodes6085 = $("<span>");
      node2794.append(nodes6085);
      subs__.addSub((mobl.label)(label, mobl.ref(styling.textFieldLabelStyle), tmp11702, function(_, callback) {
        var root8392 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8392); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6085;
        nodes6085 = node.contents();
        oldNodes.replaceWith(nodes6085);
      }));
      
      
    } else {
      
    }
  };
  renderCond523();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond523();
  }));
  
  
  var node2795 = $("<span>");
  root8391.append(node2795);
  var condSubs524 = new mobl.CompSubscription();
  subs__.addSub(condSubs524);
  var oldValue524;
  var renderCond524 = function() {
    var value2268 = validator.get();
    if(oldValue524 === value2268) return;
    oldValue524 = value2268;
    var subs__ = condSubs524;
    subs__.unsubscribe();
    node2795.empty();
    if(value2268) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after528(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp11778 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2796 = $("<input>");
        node2796.attr('type', "text");
        
        var ref3039 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3039.get() !== null) {
          node2796.attr('class', ref3039.get());
          subs__.addSub(ref3039.addEventListener('change', function(_, ref, val) {
            node2796.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2796.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2796.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2796.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3039.rebind());
        
        var ref3040 = placeholder;
        if(ref3040.get() !== null) {
          node2796.attr('placeholder', ref3040.get());
          subs__.addSub(ref3040.addEventListener('change', function(_, ref, val) {
            node2796.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3040.rebind());
        
        var ref3041 = temp;
        node2796.val(""+ref3041.get());
        var ignore608 = false;
        subs__.addSub(ref3041.addEventListener('change', function(_, ref, val) {
          if(ignore608) return;
          node2796.val(""+val);
        }));
        subs__.addSub(ref3041.rebind());
        
        subs__.addSub(mobl.domBind(node2796, 'keyup change', function() {
          ignore608 = true;
          temp.set(mobl.stringTomobl__String(node2796.val()));
          ignore608 = false;
        }));
        
        
        var val1660 = onchange.get();
        if(val1660 !== null) {
          subs__.addSub(mobl.domBind(node2796, 'change', val1660));
        }
        
        var val1661 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after525(result__) {
                          var tmp11779 = result__;
                          function after526(result__) {
                            var tmp11780 = result__;
                            var result__ = tmp11780;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after526);if(result__ !== undefined) after526(result__);
                        }
                        var result__ = onkeyup.get()(event, after525);if(result__ !== undefined) after525(result__);
                      } else {
                        {
                          function after527(result__) {
                            var tmp11780 = result__;
                            var result__ = tmp11780;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after527);if(result__ !== undefined) after527(result__);
                        }
                      }
                    };
        if(val1661 !== null) {
          subs__.addSub(mobl.domBind(node2796, 'keyup', val1661));
        }
        
        var val1662 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = styling.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1662 !== null) {
          subs__.addSub(mobl.domBind(node2796, 'blur', val1662));
        }
        
        node2795.append(node2796);
        
        var tmp11703 = mobl.ref(null);
        
        var nodes6086 = $("<span>");
        node2795.append(nodes6086);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(styling.validationMessageStyle), tmp11703, function(_, callback) {
          var root8393 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8393); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6086;
          nodes6086 = node.contents();
          oldNodes.replaceWith(nodes6086);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after528);if(result__ !== undefined) after528(result__);
    } else {
      
      var node2797 = $("<input>");
      node2797.attr('type', "text");
      
      var ref3042 = style;
      if(ref3042.get() !== null) {
        node2797.attr('class', ref3042.get());
        subs__.addSub(ref3042.addEventListener('change', function(_, ref, val) {
          node2797.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3042.rebind());
      
      var ref3043 = placeholder;
      if(ref3043.get() !== null) {
        node2797.attr('placeholder', ref3043.get());
        subs__.addSub(ref3043.addEventListener('change', function(_, ref, val) {
          node2797.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3043.rebind());
      
      var ref3044 = s;
      node2797.val(""+ref3044.get());
      var ignore609 = false;
      subs__.addSub(ref3044.addEventListener('change', function(_, ref, val) {
        if(ignore609) return;
        node2797.val(""+val);
      }));
      subs__.addSub(ref3044.rebind());
      
      subs__.addSub(mobl.domBind(node2797, 'keyup change', function() {
        ignore609 = true;
        s.set(mobl.stringTomobl__String(node2797.val()));
        ignore609 = false;
      }));
      
      
      var val1663 = onchange.get();
      if(val1663 !== null) {
        subs__.addSub(mobl.domBind(node2797, 'change', val1663));
      }
      
      var val1664 = onkeyup.get();
      if(val1664 !== null) {
        subs__.addSub(mobl.domBind(node2797, 'keyup', val1664));
      }
      
      var val1665 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = styling.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1665 !== null) {
        subs__.addSub(mobl.domBind(node2797, 'blur', val1665));
      }
      
      node2795.append(node2797);
      
      
    }
  };
  renderCond524();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond524();
  }));
  
  callback(root8391); return subs__;
  
  
  return subs__;
};

styling.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6087 = $("<span>");
  root8394.append(nodes6087);
  subs__.addSub((styling.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8395); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6087;
    nodes6087 = node.contents();
    oldNodes.replaceWith(nodes6087);
  }));
  callback(root8394); return subs__;
  
  return subs__;
};
styling.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


styling.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after529(result__) {
      var tmp11781 = result__;
      var result__ = tmp11781;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after529);if(result__ !== undefined) after529(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes6088 = $("<span>");
  root8396.append(nodes6088);
  subs__.addSub((styling.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8397 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8397); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6088;
    nodes6088 = node.contents();
    oldNodes.replaceWith(nodes6088);
  }));
  callback(root8396); return subs__;
  
  return subs__;
};

styling.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8398 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2798 = $("<span>");
  root8398.append(node2798);
  var condSubs525 = new mobl.CompSubscription();
  subs__.addSub(condSubs525);
  var oldValue525;
  var renderCond525 = function() {
    var value2269 = label.get();
    if(oldValue525 === value2269) return;
    oldValue525 = value2269;
    var subs__ = condSubs525;
    subs__.unsubscribe();
    node2798.empty();
    if(value2269) {
      
      var node2799 = $("<span>");
      node2799.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3048 = label;
      node2799.text(""+ref3048.get());
      var ignore611 = false;
      subs__.addSub(ref3048.addEventListener('change', function(_, ref, val) {
        if(ignore611) return;
        node2799.text(""+val);
      }));
      subs__.addSub(ref3048.rebind());
      
      
      node2798.append(node2799);
      
      var node2800 = $("<span>");
      node2800.attr('style', "float: left");
      
      
      var node2801 = $("<input>");
      node2801.attr('type', "password");
      
      var ref3045 = style;
      if(ref3045.get() !== null) {
        node2801.attr('class', ref3045.get());
        subs__.addSub(ref3045.addEventListener('change', function(_, ref, val) {
          node2801.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3045.rebind());
      
      var ref3046 = placeholder;
      if(ref3046.get() !== null) {
        node2801.attr('placeholder', ref3046.get());
        subs__.addSub(ref3046.addEventListener('change', function(_, ref, val) {
          node2801.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3046.rebind());
      
      var ref3047 = s;
      node2801.val(""+ref3047.get());
      var ignore610 = false;
      subs__.addSub(ref3047.addEventListener('change', function(_, ref, val) {
        if(ignore610) return;
        node2801.val(""+val);
      }));
      subs__.addSub(ref3047.rebind());
      
      subs__.addSub(mobl.domBind(node2801, 'keyup change', function() {
        ignore610 = true;
        s.set(mobl.stringTomobl__String(node2801.val()));
        ignore610 = false;
      }));
      
      
      var val1666 = onchange.get();
      if(val1666 !== null) {
        subs__.addSub(mobl.domBind(node2801, 'change', val1666));
      }
      
      var val1667 = onkeyup.get();
      if(val1667 !== null) {
        subs__.addSub(mobl.domBind(node2801, 'keyup', val1667));
      }
      
      var val1668 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = styling.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1668 !== null) {
        subs__.addSub(mobl.domBind(node2801, 'blur', val1668));
      }
      
      node2800.append(node2801);
      node2798.append(node2800);
      
      
      
      
    } else {
      
      var node2802 = $("<input>");
      node2802.attr('type', "password");
      
      var ref3049 = style;
      if(ref3049.get() !== null) {
        node2802.attr('class', ref3049.get());
        subs__.addSub(ref3049.addEventListener('change', function(_, ref, val) {
          node2802.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3049.rebind());
      
      var ref3050 = placeholder;
      if(ref3050.get() !== null) {
        node2802.attr('placeholder', ref3050.get());
        subs__.addSub(ref3050.addEventListener('change', function(_, ref, val) {
          node2802.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3050.rebind());
      
      var ref3051 = s;
      node2802.val(""+ref3051.get());
      var ignore612 = false;
      subs__.addSub(ref3051.addEventListener('change', function(_, ref, val) {
        if(ignore612) return;
        node2802.val(""+val);
      }));
      subs__.addSub(ref3051.rebind());
      
      subs__.addSub(mobl.domBind(node2802, 'keyup change', function() {
        ignore612 = true;
        s.set(mobl.stringTomobl__String(node2802.val()));
        ignore612 = false;
      }));
      
      
      var val1669 = onchange.get();
      if(val1669 !== null) {
        subs__.addSub(mobl.domBind(node2802, 'change', val1669));
      }
      
      var val1670 = onkeyup.get();
      if(val1670 !== null) {
        subs__.addSub(mobl.domBind(node2802, 'keyup', val1670));
      }
      
      var val1671 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = styling.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1671 !== null) {
        subs__.addSub(mobl.domBind(node2802, 'blur', val1671));
      }
      
      node2798.append(node2802);
      
      
    }
  };
  renderCond525();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond525();
  }));
  
  callback(root8398); return subs__;
  
  return subs__;
};
styling.selectFieldStyle = 'styling__selectFieldStyle';

styling.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3056 = style;
  if(ref3056.get() !== null) {
    sel.attr('class', ref3056.get());
    subs__.addSub(ref3056.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3056.rebind());
  
  var val1672 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after530(result__) {
                    var tmp11783 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after530);if(result__ !== undefined) after530(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1672 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1672));
  }
  
  
  var node2803 = mobl.loadingSpan();
  sel.append(node2803);
  var list600;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList600 = function() {
    var subs__ = listSubs__;
    list600 = options.get();
    list600.list(function(results600) {
      node2803.empty();
      for(var i600 = 0; i600 < results600.length; i600++) {
        (function() {
          var iternode600 = $("<span>");
          node2803.append(iternode600);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results600), i600), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results600), i600), "_2");
          
          var node2804 = $("<option>");
          
          var ref3052 = optionDescription;
          node2804.text(""+ref3052.get());
          var ignore613 = false;
          subs__.addSub(ref3052.addEventListener('change', function(_, ref, val) {
            if(ignore613) return;
            node2804.text(""+val);
          }));
          subs__.addSub(ref3052.rebind());
          
          
          var ref3053 = optionStyle;
          if(ref3053.get() !== null) {
            node2804.attr('class', ref3053.get());
            subs__.addSub(ref3053.addEventListener('change', function(_, ref, val) {
              node2804.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3053.rebind());
          
          var ref3054 = optionValue;
          if(ref3054.get() !== null) {
            node2804.attr('value', ref3054.get());
            subs__.addSub(ref3054.addEventListener('change', function(_, ref, val) {
              node2804.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3054.rebind());
          
          var ref3055 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3055.get() !== null) {
            node2804.attr('selected', ref3055.get());
            subs__.addSub(ref3055.addEventListener('change', function(_, ref, val) {
              node2804.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2804.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2804.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3055.rebind());
          
          iternode600.append(node2804);
          
          var oldNodes = iternode600;
          iternode600 = iternode600.contents();
          oldNodes.replaceWith(iternode600);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list600.addEventListener('change', function() { listSubs__.unsubscribe(); renderList600(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList600(true); }));
    });
  };
  renderList600();
  
  root8399.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8399); return subs__;
  
  
  return subs__;
};
styling.tabbarStyle = 'styling__tabbarStyle';
styling.inActiveTabButtonStyle = 'styling__inActiveTabButtonStyle';
styling.activeTabButtonStyle = 'styling__activeTabButtonStyle';
styling.inActiveTabStyle = 'styling__inActiveTabStyle';
styling.activeTabStyle = 'styling__activeTabStyle';

styling.tabSet = function(tabs, elements, callback) {
  var root8400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp11712 = mobl.ref(null);
  
  
  var tmp11711 = mobl.ref(null);
  
  
  var tmp11710 = mobl.ref(null);
  
  var nodes6089 = $("<span>");
  root8400.append(nodes6089);
  subs__.addSub((mobl.block)(mobl.ref(styling.tabbarStyle), tmp11710, tmp11711, tmp11712, function(_, callback) {
    var root8401 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2805 = mobl.loadingSpan();
    root8401.append(node2805);
    var list601;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList601 = function() {
      var subs__ = listSubs__;
      list601 = tabs.get();
      list601.list(function(results601) {
        node2805.empty();
        for(var i601 = 0; i601 < results601.length; i601++) {
          (function() {
            var iternode601 = $("<span>");
            node2805.append(iternode601);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results601), i601), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results601), i601), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results601), i601), "_3");
            
            var tmp11707 = mobl.ref(activeTabName.get() == tabName.get() ? styling.activeTabButtonStyle : styling.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp11707.set(activeTabName.get() == tabName.get() ? styling.activeTabButtonStyle : styling.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp11707.set(activeTabName.get() == tabName.get() ? styling.activeTabButtonStyle : styling.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(styling.activeTabButtonStyle).addEventListener('change', function() {
              tmp11707.set(activeTabName.get() == tabName.get() ? styling.activeTabButtonStyle : styling.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(styling.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp11707.set(activeTabName.get() == tabName.get() ? styling.activeTabButtonStyle : styling.inActiveTabButtonStyle);
            }));
            
            
            var tmp11706 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp11709 = mobl.ref(null);
            
            
            var tmp11708 = mobl.ref(null);
            
            var nodes6090 = $("<span>");
            iternode601.append(nodes6090);
            subs__.addSub((mobl.span)(tmp11707, tmp11708, tmp11706, tmp11709, function(_, callback) {
              var root8402 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp11705 = mobl.ref(null);
              
              
              var tmp11704 = mobl.ref(null);
              
              var nodes6091 = $("<span>");
              root8402.append(nodes6091);
              subs__.addSub((mobl.label)(tabName, tmp11704, tmp11705, function(_, callback) {
                var root8403 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8403); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6091;
                nodes6091 = node.contents();
                oldNodes.replaceWith(nodes6091);
              }));
              callback(root8402); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6090;
              nodes6090 = node.contents();
              oldNodes.replaceWith(nodes6090);
            }));
            
            var oldNodes = iternode601;
            iternode601 = iternode601.contents();
            oldNodes.replaceWith(iternode601);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list601.addEventListener('change', function() { listSubs__.unsubscribe(); renderList601(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList601(true); }));
      });
    };
    renderList601();
    
    callback(root8401); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6089;
    nodes6089 = node.contents();
    oldNodes.replaceWith(nodes6089);
  }));
  
  var node2806 = mobl.loadingSpan();
  root8400.append(node2806);
  var list602;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList602 = function() {
    var subs__ = listSubs__;
    list602 = tabs.get();
    list602.list(function(results602) {
      node2806.empty();
      for(var i602 = 0; i602 < results602.length; i602++) {
        (function() {
          var iternode602 = $("<span>");
          node2806.append(iternode602);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results602), i602), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results602), i602), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results602), i602), "_3");
          
          var tmp11713 = mobl.ref(activeTabName.get() == tabName.get() ? styling.activeTabStyle : styling.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp11713.set(activeTabName.get() == tabName.get() ? styling.activeTabStyle : styling.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp11713.set(activeTabName.get() == tabName.get() ? styling.activeTabStyle : styling.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(styling.activeTabStyle).addEventListener('change', function() {
            tmp11713.set(activeTabName.get() == tabName.get() ? styling.activeTabStyle : styling.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(styling.inActiveTabStyle).addEventListener('change', function() {
            tmp11713.set(activeTabName.get() == tabName.get() ? styling.activeTabStyle : styling.inActiveTabStyle);
          }));
          
          
          var tmp11716 = mobl.ref(null);
          
          
          var tmp11715 = mobl.ref(null);
          
          
          var tmp11714 = mobl.ref(null);
          
          var nodes6092 = $("<span>");
          iternode602.append(nodes6092);
          subs__.addSub((mobl.block)(tmp11713, tmp11714, tmp11715, tmp11716, function(_, callback) {
            var root8404 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6093 = $("<span>");
            root8404.append(nodes6093);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root8405 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6094 = $("<span>");
              root8405.append(nodes6094);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl1270();
              }));
              
              function renderControl1270() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root8406 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8406); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6094;
                  nodes6094 = node.contents();
                  oldNodes.replaceWith(nodes6094);
                }));
              }
              renderControl1270();
              callback(root8405); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6093;
              nodes6093 = node.contents();
              oldNodes.replaceWith(nodes6093);
            }));
            callback(root8404); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6092;
            nodes6092 = node.contents();
            oldNodes.replaceWith(nodes6092);
          }));
          
          var oldNodes = iternode602;
          iternode602 = iternode602.contents();
          oldNodes.replaceWith(iternode602);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list602.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
    });
  };
  renderList602();
  
  callback(root8400); return subs__;
  
  
  return subs__;
};
styling.searchboxStyle = 'styling__searchboxStyle';
styling.searchBoxInputStyle = 'styling__searchBoxInputStyle';

styling.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8407 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2807 = $("<div>");
  
  var ref3060 = mobl.ref(styling.searchboxStyle);
  if(ref3060.get() !== null) {
    node2807.attr('class', ref3060.get());
    subs__.addSub(ref3060.addEventListener('change', function(_, ref, val) {
      node2807.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3060.rebind());
  
  
  var node2808 = $("<input>");
  node2808.attr('type', "search");
  
  var ref3057 = mobl.ref(styling.searchBoxInputStyle);
  if(ref3057.get() !== null) {
    node2808.attr('class', ref3057.get());
    subs__.addSub(ref3057.addEventListener('change', function(_, ref, val) {
      node2808.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3057.rebind());
  
  var ref3058 = placeholder;
  if(ref3058.get() !== null) {
    node2808.attr('placeholder', ref3058.get());
    subs__.addSub(ref3058.addEventListener('change', function(_, ref, val) {
      node2808.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3058.rebind());
  
  var ref3059 = s;
  node2808.val(""+ref3059.get());
  var ignore614 = false;
  subs__.addSub(ref3059.addEventListener('change', function(_, ref, val) {
    if(ignore614) return;
    node2808.val(""+val);
  }));
  subs__.addSub(ref3059.rebind());
  
  subs__.addSub(mobl.domBind(node2808, 'keyup change', function() {
    ignore614 = true;
    s.set(mobl.stringTomobl__String(node2808.val()));
    ignore614 = false;
  }));
  
  
  var val1673 = onsearch.get();
  if(val1673 !== null) {
    subs__.addSub(mobl.domBind(node2808, 'change', val1673));
  }
  
  var val1674 = onkeyup.get();
  if(val1674 !== null) {
    subs__.addSub(mobl.domBind(node2808, 'keyup', val1674));
  }
  node2808.attr('autocorrect', false);
  node2808.attr('autocapitalize', false);
  node2808.attr('autocomplete', false);
  
  node2807.append(node2808);
  root8407.append(node2807);
  callback(root8407); return subs__;
  
  
  return subs__;
};
styling.contextMenuStyle = 'styling__contextMenuStyle';
styling.buttonStyle = 'styling__buttonStyle';
styling.buttonPushedStyle = 'styling__buttonPushedStyle';

styling.contextMenu = function(elements, callback) {
  var root8408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3061 = mobl.ref(styling.contextMenuStyle);
  if(ref3061.get() !== null) {
    menu.attr('class', ref3061.get());
    subs__.addSub(ref3061.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3061.rebind());
  
  var nodes6095 = $("<span>");
  menu.append(nodes6095);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1271();
  }));
  
  function renderControl1271() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8409 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8409); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6095;
      nodes6095 = node.contents();
      oldNodes.replaceWith(nodes6095);
    }));
  }
  renderControl1271();
  root8408.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1675 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp11786 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1675 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1675));
  }
  
  root8408.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8408); return subs__;
  
  
  
  return subs__;
};

styling.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11772 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp11772.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2809 = $("<span>");
  root8410.append(node2809);
  var condSubs526 = new mobl.CompSubscription();
  subs__.addSub(condSubs526);
  var oldValue526;
  var renderCond526 = function() {
    var value2270 = tmp11772.get();
    if(oldValue526 === value2270) return;
    oldValue526 = value2270;
    var subs__ = condSubs526;
    subs__.unsubscribe();
    node2809.empty();
    if(value2270) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node2810 = $("<div>");
        node2810.attr('width', "100%");
        
        
        var node2811 = $("<div>");
        node2811.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes6098 = $("<span>");
        node2811.append(nodes6098);
        subs__.addSub((styling.group)(function(_, callback) {
          var root8413 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2814 = mobl.loadingSpan();
          root8413.append(node2814);
          var list603;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList603 = function() {
            var subs__ = listSubs__;
            list603 = items.get();
            list603.list(function(results603) {
              node2814.empty();
              for(var i603 = 0; i603 < results603.length; i603++) {
                (function() {
                  var iternode603 = $("<span>");
                  node2814.append(iternode603);
                  var it;
                  it = mobl.ref(mobl.ref(results603), i603);
                  
                  var tmp11730 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp11730.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp11730.set(it.get() == current.get());
                  }));
                  
                  
                  var node2815 = $("<span>");
                  iternode603.append(node2815);
                  var condSubs528 = new mobl.CompSubscription();
                  subs__.addSub(condSubs528);
                  var oldValue528;
                  var renderCond528 = function() {
                    var value2272 = tmp11730.get();
                    if(oldValue528 === value2272) return;
                    oldValue528 = value2272;
                    var subs__ = condSubs528;
                    subs__.unsubscribe();
                    node2815.empty();
                    if(value2272) {
                      
                      var tmp11726 = mobl.ref(false);
                      
                      
                      var tmp11725 = mobl.ref(null);
                      
                      
                      var tmp11724 = mobl.ref(null);
                      
                      var nodes6099 = $("<span>");
                      node2815.append(nodes6099);
                      subs__.addSub((styling.item)(mobl.ref(styling.selectedItemStyle), mobl.ref(styling.itemPushedStyle), tmp11724, tmp11725, tmp11726, function(_, callback) {
                        var root8414 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6100 = $("<span>");
                        root8414.append(nodes6100);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1273();
                        }));
                        
                        function renderControl1273() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8415 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8415); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6100;
                            nodes6100 = node.contents();
                            oldNodes.replaceWith(nodes6100);
                          }));
                        }
                        renderControl1273();
                        callback(root8414); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6099;
                        nodes6099 = node.contents();
                        oldNodes.replaceWith(nodes6099);
                      }));
                      
                      
                    } else {
                      
                      var tmp11728 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = styling.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp11727 = mobl.ref(true);
                      
                      
                      var tmp11729 = mobl.ref(null);
                      
                      var nodes6101 = $("<span>");
                      node2815.append(nodes6101);
                      subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11728, tmp11729, tmp11727, function(_, callback) {
                        var root8416 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6102 = $("<span>");
                        root8416.append(nodes6102);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1274();
                        }));
                        
                        function renderControl1274() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8417 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8417); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6102;
                            nodes6102 = node.contents();
                            oldNodes.replaceWith(nodes6102);
                          }));
                        }
                        renderControl1274();
                        callback(root8416); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6101;
                        nodes6101 = node.contents();
                        oldNodes.replaceWith(nodes6101);
                      }));
                      
                      
                    }
                  };
                  renderCond528();
                  subs__.addSub(tmp11730.addEventListener('change', function() {
                    renderCond528();
                  }));
                  
                  
                  var oldNodes = iternode603;
                  iternode603 = iternode603.contents();
                  oldNodes.replaceWith(iternode603);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list603.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
            });
          };
          renderList603();
          
          callback(root8413); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6098;
          nodes6098 = node.contents();
          oldNodes.replaceWith(nodes6098);
        }));
        node2810.append(node2811);
        
        var node2812 = $("<div>");
        node2812.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2813 = $("<span>");
        node2812.append(node2813);
        var condSubs527 = new mobl.CompSubscription();
        subs__.addSub(condSubs527);
        var oldValue527;
        var renderCond527 = function() {
          var value2271 = current.get();
          if(oldValue527 === value2271) return;
          oldValue527 = value2271;
          var subs__ = condSubs527;
          subs__.unsubscribe();
          node2813.empty();
          if(value2271) {
            var nodes6096 = $("<span>");
            node2813.append(nodes6096);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1272();
            }));
            
            function renderControl1272() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8411 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8411); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6096;
                nodes6096 = node.contents();
                oldNodes.replaceWith(nodes6096);
              }));
            }
            renderControl1272();
            
            
          } else {
            
            var tmp11731 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp11733 = mobl.ref(null);
            
            
            var tmp11732 = mobl.ref(null);
            
            var nodes6097 = $("<span>");
            node2813.append(nodes6097);
            subs__.addSub((mobl.label)(tmp11731, tmp11732, tmp11733, function(_, callback) {
              var root8412 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8412); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6097;
              nodes6097 = node.contents();
              oldNodes.replaceWith(nodes6097);
            }));
            
            
          }
        };
        renderCond527();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond527();
        }));
        
        node2810.append(node2812);
        node2809.append(node2810);
        
        
        
        
        
        
      });
    } else {
      var nodes6103 = $("<span>");
      node2809.append(nodes6103);
      subs__.addSub((styling.group)(function(_, callback) {
        var root8418 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2816 = mobl.loadingSpan();
        root8418.append(node2816);
        var list604;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList604 = function() {
          var subs__ = listSubs__;
          list604 = items.get();
          list604.list(function(results604) {
            node2816.empty();
            for(var i604 = 0; i604 < results604.length; i604++) {
              (function() {
                var iternode604 = $("<span>");
                node2816.append(iternode604);
                var it;
                it = mobl.ref(mobl.ref(results604), i604);
                
                var tmp11717 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('styling.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp11787 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp11719 = mobl.ref(false);
                
                
                var tmp11718 = mobl.ref(null);
                
                var nodes6104 = $("<span>");
                iternode604.append(nodes6104);
                subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11717, tmp11718, tmp11719, function(_, callback) {
                  var root8419 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6105 = $("<span>");
                  root8419.append(nodes6105);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1275();
                  }));
                  
                  function renderControl1275() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8420 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8420); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6105;
                      nodes6105 = node.contents();
                      oldNodes.replaceWith(nodes6105);
                    }));
                  }
                  renderControl1275();
                  callback(root8419); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6104;
                  nodes6104 = node.contents();
                  oldNodes.replaceWith(nodes6104);
                }));
                
                var oldNodes = iternode604;
                iternode604 = iternode604.contents();
                oldNodes.replaceWith(iternode604);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list604.addEventListener('change', function() { listSubs__.unsubscribe(); renderList604(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList604(true); }));
          });
        };
        renderList604();
        
        callback(root8418); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6103;
        nodes6103 = node.contents();
        oldNodes.replaceWith(nodes6103);
      }));
      
      
    }
  };
  renderCond526();
  subs__.addSub(tmp11772.addEventListener('change', function() {
    renderCond526();
  }));
  
  callback(root8410); return subs__;
  
  return subs__;
};

styling.detailScreen = function(it, detail, callback, screenCallback) {
  var root8421 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11722 = mobl.ref("Detail");
  
  
  var tmp11723 = mobl.ref(null);
  
  var nodes6106 = $("<span>");
  root8421.append(nodes6106);
  subs__.addSub((styling.header)(tmp11722, tmp11723, function(_, callback) {
    var root8422 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11721 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp11720 = mobl.ref("Back");
    
    var nodes6107 = $("<span>");
    root8422.append(nodes6107);
    subs__.addSub((styling.backButton)(tmp11720, mobl.ref(styling.backButtonStyle), mobl.ref(styling.backButtonPushedStyle), tmp11721, function(_, callback) {
      var root8423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8423); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6107;
      nodes6107 = node.contents();
      oldNodes.replaceWith(nodes6107);
    }));
    callback(root8422); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6106;
    nodes6106 = node.contents();
    oldNodes.replaceWith(nodes6106);
  }));
  var nodes6108 = $("<span>");
  root8421.append(nodes6108);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1276();
  }));
  
  function renderControl1276() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6108;
      nodes6108 = node.contents();
      oldNodes.replaceWith(nodes6108);
    }));
  }
  renderControl1276();
  callback(root8421); return subs__;
  
  
  return subs__;
};
styling.selectedItemStyle = 'styling__selectedItemStyle';

styling.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8425 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes6109 = $("<span>");
  root8425.append(nodes6109);
  subs__.addSub((styling.group)(function(_, callback) {
    var root8426 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2817 = mobl.loadingSpan();
    root8426.append(node2817);
    var list605;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList605 = function() {
      var subs__ = listSubs__;
      list605 = coll.get();
      list605.list(function(results605) {
        node2817.empty();
        for(var i605 = 0; i605 < results605.length; i605++) {
          (function() {
            var iternode605 = $("<span>");
            node2817.append(iternode605);
            var it;
            it = mobl.ref(mobl.ref(results605), i605);
            
            var tmp11740 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp11740.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp11740.set(it.get() == selected.get());
            }));
            
            
            var node2818 = $("<span>");
            iternode605.append(node2818);
            var condSubs529 = new mobl.CompSubscription();
            subs__.addSub(condSubs529);
            var oldValue529;
            var renderCond529 = function() {
              var value2273 = tmp11740.get();
              if(oldValue529 === value2273) return;
              oldValue529 = value2273;
              var subs__ = condSubs529;
              subs__.unsubscribe();
              node2818.empty();
              if(value2273) {
                
                var tmp11736 = mobl.ref(false);
                
                
                var tmp11735 = mobl.ref(null);
                
                
                var tmp11734 = mobl.ref(null);
                
                var nodes6110 = $("<span>");
                node2818.append(nodes6110);
                subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11734, tmp11735, tmp11736, function(_, callback) {
                  var root8427 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6111 = $("<span>");
                  root8427.append(nodes6111);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1277();
                  }));
                  
                  function renderControl1277() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8428 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8428); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6111;
                      nodes6111 = node.contents();
                      oldNodes.replaceWith(nodes6111);
                    }));
                  }
                  renderControl1277();
                  callback(root8427); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6110;
                  nodes6110 = node.contents();
                  oldNodes.replaceWith(nodes6110);
                }));
                
                
              } else {
                
                var tmp11738 = mobl.ref(true);
                
                
                var tmp11737 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp11739 = mobl.ref(null);
                
                var nodes6112 = $("<span>");
                node2818.append(nodes6112);
                subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11737, tmp11739, tmp11738, function(_, callback) {
                  var root8429 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6113 = $("<span>");
                  root8429.append(nodes6113);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1278();
                  }));
                  
                  function renderControl1278() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8430 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8430); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6113;
                      nodes6113 = node.contents();
                      oldNodes.replaceWith(nodes6113);
                    }));
                  }
                  renderControl1278();
                  callback(root8429); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6112;
                  nodes6112 = node.contents();
                  oldNodes.replaceWith(nodes6112);
                }));
                
                
              }
            };
            renderCond529();
            subs__.addSub(tmp11740.addEventListener('change', function() {
              renderCond529();
            }));
            
            
            var oldNodes = iternode605;
            iternode605 = iternode605.contents();
            oldNodes.replaceWith(iternode605);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list605.addEventListener('change', function() { listSubs__.unsubscribe(); renderList605(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList605(true); }));
      });
    };
    renderList605();
    
    callback(root8426); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6109;
    nodes6109 = node.contents();
    oldNodes.replaceWith(nodes6109);
  }));
  callback(root8425); return subs__;
  
  return subs__;
};
styling.loadMoreStyle = 'styling__loadMoreStyle';

styling.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root8431 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes6114 = $("<span>");
    root8431.append(nodes6114);
    subs__.addSub((styling.group)(function(_, callback) {
      var root8432 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11744 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp11744.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp11744.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp11744.set(coll.get().limit(n.get()));
      }));
      
      
      var node2819 = mobl.loadingSpan();
      root8432.append(node2819);
      var list606;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList606 = function() {
        var subs__ = listSubs__;
        list606 = tmp11744.get();
        list606.list(function(results606) {
          node2819.empty();
          for(var i606 = 0; i606 < results606.length; i606++) {
            (function() {
              var iternode606 = $("<span>");
              node2819.append(iternode606);
              var it;
              it = mobl.ref(mobl.ref(results606), i606);
              
              var tmp11741 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp11743 = mobl.ref(false);
              
              
              var tmp11742 = mobl.ref(null);
              
              var nodes6115 = $("<span>");
              iternode606.append(nodes6115);
              subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11741, tmp11742, tmp11743, function(_, callback) {
                var root8433 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6116 = $("<span>");
                root8433.append(nodes6116);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1279();
                }));
                
                function renderControl1279() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root8434 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8434); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6116;
                    nodes6116 = node.contents();
                    oldNodes.replaceWith(nodes6116);
                  }));
                }
                renderControl1279();
                callback(root8433); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6115;
                nodes6115 = node.contents();
                oldNodes.replaceWith(nodes6115);
              }));
              
              var oldNodes = iternode606;
              iternode606 = iternode606.contents();
              oldNodes.replaceWith(iternode606);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list606.addEventListener('change', function() { listSubs__.unsubscribe(); renderList606(true); }));
          subs__.addSub(tmp11744.addEventListener('change', function() { listSubs__.unsubscribe(); renderList606(true); }));
        });
      };
      renderList606();
      
      
      var tmp11747 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp11747.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp11747.set(n.get() < total.get());
      }));
      
      
      var node2820 = $("<span>");
      root8432.append(node2820);
      var condSubs530 = new mobl.CompSubscription();
      subs__.addSub(condSubs530);
      var oldValue530;
      var renderCond530 = function() {
        var value2274 = tmp11747.get();
        if(oldValue530 === value2274) return;
        oldValue530 = value2274;
        var subs__ = condSubs530;
        subs__.unsubscribe();
        node2820.empty();
        if(value2274) {
          
          var node2821 = $("<li>");
          
          var ref3062 = mobl.ref(styling.loadMoreStyle);
          if(ref3062.get() !== null) {
            node2821.attr('class', ref3062.get());
            subs__.addSub(ref3062.addEventListener('change', function(_, ref, val) {
              node2821.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3062.rebind());
          
          var val1676 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val1676 !== null) {
            subs__.addSub(mobl.domBind(node2821, 'tap', val1676));
          }
          
          
          var tmp11746 = mobl.ref(null);
          
          
          var tmp11745 = mobl.ref(null);
          
          var nodes6117 = $("<span>");
          node2821.append(nodes6117);
          subs__.addSub((mobl.label)(moreLabel, tmp11745, tmp11746, function(_, callback) {
            var root8435 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8435); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6117;
            nodes6117 = node.contents();
            oldNodes.replaceWith(nodes6117);
          }));
          node2820.append(node2821);
          
          
          
        } else {
          
        }
      };
      renderCond530();
      subs__.addSub(tmp11747.addEventListener('change', function() {
        renderCond530();
      }));
      
      callback(root8432); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6114;
      nodes6114 = node.contents();
      oldNodes.replaceWith(nodes6114);
    }));
    callback(root8431); return subs__;
    
  });
  return subs__;
};

styling.markableList = function(items, elements, callback) {
  var root8436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6118 = $("<span>");
  root8436.append(nodes6118);
  subs__.addSub((styling.group)(function(_, callback) {
    var root8437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2822 = mobl.loadingSpan();
    root8437.append(node2822);
    var list607;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList607 = function() {
      var subs__ = listSubs__;
      list607 = items.get();
      list607.list(function(results607) {
        node2822.empty();
        for(var i607 = 0; i607 < results607.length; i607++) {
          (function() {
            var iternode607 = $("<span>");
            node2822.append(iternode607);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results607), i607), "_1");it = mobl.ref(mobl.ref(mobl.ref(results607), i607), "_2");
            
            var tmp11751 = mobl.ref(false);
            
            
            var tmp11750 = mobl.ref(null);
            
            
            var tmp11749 = mobl.ref(null);
            
            var nodes6119 = $("<span>");
            iternode607.append(nodes6119);
            subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11749, tmp11750, tmp11751, function(_, callback) {
              var root8438 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp11748 = mobl.ref(null);
              
              var nodes6120 = $("<span>");
              root8438.append(nodes6120);
              subs__.addSub((styling.checkBox)(checked, it, tmp11748, function(_, callback) {
                var root8439 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8439); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6120;
                nodes6120 = node.contents();
                oldNodes.replaceWith(nodes6120);
              }));
              callback(root8438); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6119;
              nodes6119 = node.contents();
              oldNodes.replaceWith(nodes6119);
            }));
            
            var oldNodes = iternode607;
            iternode607 = iternode607.contents();
            oldNodes.replaceWith(iternode607);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list607.addEventListener('change', function() { listSubs__.unsubscribe(); renderList607(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList607(true); }));
      });
    };
    renderList607();
    
    callback(root8437); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6118;
    nodes6118 = node.contents();
    oldNodes.replaceWith(nodes6118);
  }));
  callback(root8436); return subs__;
  
  return subs__;
};

styling.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8440 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2733) {
    coll2733 = coll2733.reverse();
    function processOne117() {
      var it;
      it = coll2733.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2733.length > 0) processOne117(); else rest117();
      
    }
    function rest117() {
      
      var tmp11755 = mobl.ref(null);
      
      var nodes6121 = $("<span>");
      root8440.append(nodes6121);
      subs__.addSub((styling.header)(title, tmp11755, function(_, callback) {
        var root8441 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp11752 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp11753 = mobl.ref(mobl._("Back", []));
        
        var nodes6122 = $("<span>");
        root8441.append(nodes6122);
        subs__.addSub((styling.backButton)(tmp11753, mobl.ref(styling.backButtonStyle), mobl.ref(styling.backButtonPushedStyle), tmp11752, function(_, callback) {
          var root8442 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8442); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6122;
          nodes6122 = node.contents();
          oldNodes.replaceWith(nodes6122);
        }));
        
        var tmp11754 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll2732) {
                               coll2732 = coll2732.reverse();
                               function processOne116() {
                                 var checked;var it;
                                 var tmp11789 = coll2732.pop();
                                 checked = tmp11789._1;it = tmp11789._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll2732.length > 0) processOne116(); else rest116();
                                   
                                 } else {
                                   {
                                     
                                     if(coll2732.length > 0) processOne116(); else rest116();
                                     
                                   }
                                 }
                               }
                               function rest116() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll2732.length > 0) processOne116(); else rest116();
                             });
                             
                           });
        
        var nodes6123 = $("<span>");
        root8441.append(nodes6123);
        subs__.addSub((styling.button)(doneButtonLabel, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11754, function(_, callback) {
          var root8443 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8443); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6123;
          nodes6123 = node.contents();
          oldNodes.replaceWith(nodes6123);
        }));
        callback(root8441); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6121;
        nodes6121 = node.contents();
        oldNodes.replaceWith(nodes6121);
      }));
      var nodes6124 = $("<span>");
      root8440.append(nodes6124);
      subs__.addSub((styling.markableList)(items, function(_, callback) {
        var root8444 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8444); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6124;
        nodes6124 = node.contents();
        oldNodes.replaceWith(nodes6124);
      }));
      callback(root8440); return subs__;
      
      
    }
    if(coll2733.length > 0) processOne117(); else rest117();
  });
  
  return subs__;
};

styling.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp11757 = mobl.ref(null);
  
  
  var tmp11756 = mobl.ref(null);
  
  var nodes6125 = $("<span>");
  root8445.append(nodes6125);
  subs__.addSub((styling.searchBox)(phrase, searchTermPlaceholder, tmp11756, tmp11757, function(_, callback) {
    var root8446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8446); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6125;
    nodes6125 = node.contents();
    oldNodes.replaceWith(nodes6125);
  }));
  
  var tmp11758 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp11758.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp11758.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp11758.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp11758.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp11758.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes6126 = $("<span>");
  root8445.append(nodes6126);
  subs__.addSub((styling.masterDetail)(tmp11758, masterItem, detailItem, function(_, callback) {
    var root8447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8447); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6126;
    nodes6126 = node.contents();
    oldNodes.replaceWith(nodes6126);
  }));
  callback(root8445); return subs__;
  
  
  return subs__;
};
styling.progressStyle = 'styling__progressStyle';
styling.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

styling.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(styling));styling.accordionStyle = 'styling__accordionStyle';
styling.activeSectionHeaderStyle = 'styling__activeSectionHeaderStyle';
styling.inActiveSectionHeaderStyle = 'styling__inActiveSectionHeaderStyle';
styling.activeSectionHeaderStyle = 'styling__activeSectionHeaderStyle';
styling.inActiveSectionHeaderStyle = 'styling__inActiveSectionHeaderStyle';
styling.inActiveSectionStyle = 'styling__inActiveSectionStyle';
styling.activeSectionStyle = 'styling__activeSectionStyle';

styling.accordion = function(sections, elements, callback) {
  var root8448 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp11771 = mobl.ref(null);
  
  
  var tmp11770 = mobl.ref(null);
  
  
  var tmp11769 = mobl.ref(null);
  
  var nodes6127 = $("<span>");
  root8448.append(nodes6127);
  subs__.addSub((mobl.block)(mobl.ref(styling.accordionStyle), tmp11769, tmp11770, tmp11771, function(_, callback) {
    var root8449 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2823 = mobl.loadingSpan();
    root8449.append(node2823);
    var list608;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList608 = function() {
      var subs__ = listSubs__;
      list608 = sections.get();
      list608.list(function(results608) {
        node2823.empty();
        for(var i608 = 0; i608 < results608.length; i608++) {
          (function() {
            var iternode608 = $("<span>");
            node2823.append(iternode608);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results608), i608), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results608), i608), "_2");
            
            var tmp11762 = mobl.ref(activeSection.get() == sectionName.get() ? styling.activeSectionHeaderStyle : styling.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp11762.set(activeSection.get() == sectionName.get() ? styling.activeSectionHeaderStyle : styling.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp11762.set(activeSection.get() == sectionName.get() ? styling.activeSectionHeaderStyle : styling.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(styling.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp11762.set(activeSection.get() == sectionName.get() ? styling.activeSectionHeaderStyle : styling.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(styling.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp11762.set(activeSection.get() == sectionName.get() ? styling.activeSectionHeaderStyle : styling.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp11761 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp11764 = mobl.ref(null);
            
            
            var tmp11763 = mobl.ref(null);
            
            var nodes6128 = $("<span>");
            iternode608.append(nodes6128);
            subs__.addSub((mobl.span)(tmp11762, tmp11763, tmp11761, tmp11764, function(_, callback) {
              var root8450 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp11760 = mobl.ref(null);
              
              
              var tmp11759 = mobl.ref(null);
              
              var nodes6129 = $("<span>");
              root8450.append(nodes6129);
              subs__.addSub((mobl.label)(sectionName, tmp11759, tmp11760, function(_, callback) {
                var root8451 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8451); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6129;
                nodes6129 = node.contents();
                oldNodes.replaceWith(nodes6129);
              }));
              callback(root8450); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6128;
              nodes6128 = node.contents();
              oldNodes.replaceWith(nodes6128);
            }));
            
            var tmp11765 = mobl.ref(activeSection.get() == sectionName.get() ? styling.activeSectionStyle : styling.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp11765.set(activeSection.get() == sectionName.get() ? styling.activeSectionStyle : styling.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp11765.set(activeSection.get() == sectionName.get() ? styling.activeSectionStyle : styling.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(styling.activeSectionStyle).addEventListener('change', function() {
              tmp11765.set(activeSection.get() == sectionName.get() ? styling.activeSectionStyle : styling.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(styling.inActiveSectionStyle).addEventListener('change', function() {
              tmp11765.set(activeSection.get() == sectionName.get() ? styling.activeSectionStyle : styling.inActiveSectionStyle);
            }));
            
            
            var tmp11768 = mobl.ref(null);
            
            
            var tmp11767 = mobl.ref(null);
            
            
            var tmp11766 = mobl.ref(null);
            
            var nodes6130 = $("<span>");
            iternode608.append(nodes6130);
            subs__.addSub((mobl.block)(tmp11765, tmp11766, tmp11767, tmp11768, function(_, callback) {
              var root8452 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6131 = $("<span>");
              root8452.append(nodes6131);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1280();
              }));
              
              function renderControl1280() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8453 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8453); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6131;
                  nodes6131 = node.contents();
                  oldNodes.replaceWith(nodes6131);
                }));
              }
              renderControl1280();
              callback(root8452); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6130;
              nodes6130 = node.contents();
              oldNodes.replaceWith(nodes6130);
            }));
            
            var oldNodes = iternode608;
            iternode608 = iternode608.contents();
            oldNodes.replaceWith(iternode608);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list608.addEventListener('change', function() { listSubs__.unsubscribe(); renderList608(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList608(true); }));
      });
    };
    renderList608();
    
    callback(root8449); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6127;
    nodes6127 = node.contents();
    oldNodes.replaceWith(nodes6127);
  }));
  callback(root8448); return subs__;
  
  return subs__;
};
styling.tableStyle = 'styling__tableStyle';
styling.tdStyle = 'styling__tdStyle';
styling.trStyle = 'styling__trStyle';
styling.trStyle = 'styling__trStyle';
styling.trStyle = 'styling__trStyle';
styling.tdStyle = 'styling__tdStyle';
styling.tdStyle = 'styling__tdStyle';
styling.tdStyle = 'styling__tdStyle';
styling.tdStyle = 'styling__tdStyle';
styling.tdStyle = 'styling__tdStyle';
styling.tdStyle = 'styling__tdStyle';

styling.table = function(elements, callback) {
  var root8454 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2824 = $("<table>");
  
  var ref3063 = mobl.ref(styling.tableStyle);
  if(ref3063.get() !== null) {
    node2824.attr('class', ref3063.get());
    subs__.addSub(ref3063.addEventListener('change', function(_, ref, val) {
      node2824.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3063.rebind());
  
  var nodes6132 = $("<span>");
  node2824.append(nodes6132);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1281();
  }));
  
  function renderControl1281() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8455); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6132;
      nodes6132 = node.contents();
      oldNodes.replaceWith(nodes6132);
    }));
  }
  renderControl1281();
  root8454.append(node2824);
  callback(root8454); return subs__;
  
  
  return subs__;
};

styling.row = function(elements, callback) {
  var root8456 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2825 = $("<tr>");
  
  var ref3064 = mobl.ref(styling.trStyle);
  if(ref3064.get() !== null) {
    node2825.attr('class', ref3064.get());
    subs__.addSub(ref3064.addEventListener('change', function(_, ref, val) {
      node2825.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3064.rebind());
  
  var nodes6133 = $("<span>");
  node2825.append(nodes6133);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1282();
  }));
  
  function renderControl1282() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6133;
      nodes6133 = node.contents();
      oldNodes.replaceWith(nodes6133);
    }));
  }
  renderControl1282();
  root8456.append(node2825);
  callback(root8456); return subs__;
  
  
  return subs__;
};

styling.cell = function(width, elements, callback) {
  var root8458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2826 = $("<td>");
  
  var ref3065 = width;
  if(ref3065.get() !== null) {
    node2826.attr('width', ref3065.get());
    subs__.addSub(ref3065.addEventListener('change', function(_, ref, val) {
      node2826.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3065.rebind());
  
  var ref3066 = mobl.ref(styling.tdStyle);
  if(ref3066.get() !== null) {
    node2826.attr('class', ref3066.get());
    subs__.addSub(ref3066.addEventListener('change', function(_, ref, val) {
      node2826.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3066.rebind());
  
  var nodes6134 = $("<span>");
  node2826.append(nodes6134);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1283();
  }));
  
  function renderControl1283() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6134;
      nodes6134 = node.contents();
      oldNodes.replaceWith(nodes6134);
    }));
  }
  renderControl1283();
  root8458.append(node2826);
  callback(root8458); return subs__;
  
  
  return subs__;
};

styling.col = function(width, elements, callback) {
  var root8460 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2827 = $("<td>");
  
  var ref3067 = width;
  if(ref3067.get() !== null) {
    node2827.attr('width', ref3067.get());
    subs__.addSub(ref3067.addEventListener('change', function(_, ref, val) {
      node2827.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3067.rebind());
  
  var ref3068 = mobl.ref(styling.tdStyle);
  if(ref3068.get() !== null) {
    node2827.attr('class', ref3068.get());
    subs__.addSub(ref3068.addEventListener('change', function(_, ref, val) {
      node2827.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3068.rebind());
  
  var nodes6135 = $("<span>");
  node2827.append(nodes6135);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1284();
  }));
  
  function renderControl1284() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8461); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6135;
      nodes6135 = node.contents();
      oldNodes.replaceWith(nodes6135);
    }));
  }
  renderControl1284();
  root8460.append(node2827);
  callback(root8460); return subs__;
  
  
  return subs__;
};

styling.headerCol = function(width, elements, callback) {
  var root8462 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2828 = $("<td>");
  
  var ref3069 = width;
  if(ref3069.get() !== null) {
    node2828.attr('width', ref3069.get());
    subs__.addSub(ref3069.addEventListener('change', function(_, ref, val) {
      node2828.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3069.rebind());
  
  var ref3070 = mobl.ref(styling.tdStyle);
  if(ref3070.get() !== null) {
    node2828.attr('class', ref3070.get());
    subs__.addSub(ref3070.addEventListener('change', function(_, ref, val) {
      node2828.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3070.rebind());
  
  
  var node2829 = $("<strong>");
  
  var nodes6136 = $("<span>");
  node2829.append(nodes6136);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1285();
  }));
  
  function renderControl1285() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8463 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8463); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6136;
      nodes6136 = node.contents();
      oldNodes.replaceWith(nodes6136);
    }));
  }
  renderControl1285();
  node2828.append(node2829);
  root8462.append(node2828);
  callback(root8462); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(styling));styling.moveTaskStyle = 'styling__moveTaskStyle';
styling.moveTaskPushedStyle = 'styling__moveTaskPushedStyle';
styling.headerStyle = 'styling__headerStyle';
styling.appHeaderStyle = 'styling__appHeaderStyle';
styling.taskDescriptionStyle = 'styling__taskDescriptionStyle';
styling.headerContainerStyle = 'styling__headerContainerStyle';
styling.headerTextStyle = 'styling__headerTextStyle';
styling.headerStyle = 'styling__headerStyle';
styling.headerStyle = 'styling__headerStyle';
styling.headerStyle = 'styling__headerStyle';
styling.headerStyle = 'styling__headerStyle';
styling.headerStyle = 'styling__headerStyle';
styling.groupStyle = 'styling__groupStyle';
styling.todoColStyle = 'styling__todoColStyle';
styling.progressColStyle = 'styling__progressColStyle';
styling.doneColStyle = 'styling__doneColStyle';
styling.somedayColStyle = 'styling__somedayColStyle';
styling.itemStyle = 'styling__itemStyle';
styling.aboutStyle = 'styling__aboutStyle';
