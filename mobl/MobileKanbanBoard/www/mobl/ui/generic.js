mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.provides('mobl');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node56 = $("<span>");
  root120.append(node56);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value25 = value.get();
    if(oldValue9 === value25) return;
    oldValue9 = value25;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node56.empty();
    if(value25) {
      var nodes77 = $("<span>");
      node56.append(nodes77);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl28();
      }));
      
      function renderControl28() {
        subs__.addSub((elements)(function(elements, callback) {
          var root121 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root121); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes77;
          nodes77 = node.contents();
          oldNodes.replaceWith(nodes77);
        }));
      }
      renderControl28();
      
      
    } else {
      
      var tmp147 = mobl.ref(null);
      
      
      var tmp146 = mobl.ref(null);
      
      
      var tmp145 = mobl.ref(null);
      
      var nodes78 = $("<span>");
      node56.append(nodes78);
      subs__.addSub((mobl.block)(style, tmp145, tmp146, tmp147, function(_, callback) {
        var root122 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp136 = mobl.ref(null);
        
        
        var tmp135 = mobl.ref(null);
        
        var nodes79 = $("<span>");
        root122.append(nodes79);
        subs__.addSub((mobl.label)(loadingMessage, tmp135, tmp136, function(_, callback) {
          var root123 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root123); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes79;
          nodes79 = node.contents();
          oldNodes.replaceWith(nodes79);
        }));
        
        var tmp138 = mobl.ref("middle");
        
        
        var tmp137 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp144 = mobl.ref(null);
        
        
        var tmp143 = mobl.ref(null);
        
        
        var tmp142 = mobl.ref(null);
        
        
        var tmp141 = mobl.ref(null);
        
        
        var tmp139 = mobl.ref(null);
        
        var nodes80 = $("<span>");
        root122.append(nodes80);
        subs__.addSub((mobl.ui.generic.image)(tmp137, tmp139, tmp141, tmp142, tmp143, tmp138, tmp144, function(_, callback) {
          var root124 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root124); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes80;
          nodes80 = node.contents();
          oldNodes.replaceWith(nodes80);
        }));
        callback(root122); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes78;
        nodes78 = node.contents();
        oldNodes.replaceWith(nodes78);
      }));
      
      
    }
  };
  renderCond9();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root120); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
  var root125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node57 = $("<div>");
  
  var ref68 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref68.get() !== null) {
    node57.attr('class', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node57.attr('class', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  var val38 = onclick.get();
  if(val38 !== null) {
    subs__.addSub(mobl.domBind(node57, 'tap', val38));
  }
  
  
  var node58 = $("<div>");
  
  var ref67 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref67.get() !== null) {
    node58.attr('class', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node58.attr('class', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  
  var node59 = $("<div>");
  
  var ref65 = text;
  node59.text(""+ref65.get());
  var ignore12 = false;
  subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node59.text(""+val);
  }));
  subs__.addSub(ref65.rebind());
  
  
  var ref66 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref66.get() !== null) {
    node59.attr('class', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      node59.attr('class', val);
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  node58.append(node59);
  node57.append(node58);
  var nodes81 = $("<span>");
  node57.append(nodes81);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root126); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes81;
      nodes81 = node.contents();
      oldNodes.replaceWith(nodes81);
    }));
  }
  renderControl29();
  root125.append(node57);
  callback(root125); return subs__;
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref69 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref69.get() !== null) {
    sp.attr('class', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref69.rebind());
  
  var val39 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val39 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val39));
  }
  
  var val40 = function(event, callback) {
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
  if(val40 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val40));
  }
  
  var val41 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after9(result__) {
                    var tmp226 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val41 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val41));
  }
  
  var val42 = function(event, callback) {
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
  if(val42 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val42));
  }
  
  var ref70 = text;
  sp.text(""+ref70.get());
  var ignore13 = false;
  subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref70.rebind());
  
  
  root127.append(sp);
  callback(root127); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes82 = $("<span>");
  root128.append(nodes82);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root129 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root129); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes82;
    nodes82 = node.contents();
    oldNodes.replaceWith(nodes82);
  }));
  callback(root128); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes83 = $("<span>");
  root130.append(nodes83);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root131 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root131); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes83;
    nodes83 = node.contents();
    oldNodes.replaceWith(nodes83);
  }));
  callback(root130); return subs__;
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node60 = $("<ul>");
  
  var ref71 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref71.get() !== null) {
    node60.attr('class', ref71.get());
    subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
      node60.attr('class', val);
    }));
    
  }
  subs__.addSub(ref71.rebind());
  
  var nodes84 = $("<span>");
  node60.append(nodes84);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl30();
  }));
  
  function renderControl30() {
    subs__.addSub((elements)(function(elements, callback) {
      var root133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root133); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes84;
      nodes84 = node.contents();
      oldNodes.replaceWith(nodes84);
    }));
  }
  renderControl30();
  root132.append(node60);
  callback(root132); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root134 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node61 = $("<img>");
  
  var ref72 = url;
  if(ref72.get() !== null) {
    node61.attr('src', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
      node61.attr('src', val);
    }));
    
  }
  subs__.addSub(ref72.rebind());
  
  var ref73 = width;
  if(ref73.get() !== null) {
    node61.attr('width', ref73.get());
    subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
      node61.attr('width', val);
    }));
    
  }
  subs__.addSub(ref73.rebind());
  
  var ref74 = height;
  if(ref74.get() !== null) {
    node61.attr('height', ref74.get());
    subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
      node61.attr('height', val);
    }));
    
  }
  subs__.addSub(ref74.rebind());
  
  var ref75 = style;
  if(ref75.get() !== null) {
    node61.attr('class', ref75.get());
    subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
      node61.attr('class', val);
    }));
    
  }
  subs__.addSub(ref75.rebind());
  
  var val43 = onclick.get();
  if(val43 !== null) {
    subs__.addSub(mobl.domBind(node61, 'tap', val43));
  }
  
  var ref76 = valign;
  if(ref76.get() !== null) {
    node61.attr('valign', ref76.get());
    subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
      node61.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref76.rebind());
  
  var ref77 = align;
  if(ref77.get() !== null) {
    node61.attr('align', ref77.get());
    subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
      node61.attr('align', val);
    }));
    
  }
  subs__.addSub(ref77.rebind());
  
  root134.append(node61);
  callback(root134); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref78 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref78.get() !== null) {
    el.attr('class', ref78.get());
    subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref78.rebind());
  
  var ref79 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref79.get() !== null) {
    el.attr('class', ref79.get());
    subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref79.rebind());
  
  var val44 = onswipe.get();
  if(val44 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val44));
  }
  
  var val45 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp227 = result__;
                                           function after10(result__) {
                                             var tmp228 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after10);if(result__ !== undefined) after10(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp229 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val45 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val45));
  }
  
  var nodes85 = $("<span>");
  el.append(nodes85);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl31();
  }));
  
  function renderControl31() {
    subs__.addSub((elements)(function(elements, callback) {
      var root136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root136); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes85;
      nodes85 = node.contents();
      oldNodes.replaceWith(nodes85);
    }));
  }
  renderControl31();
  root135.append(el);
  callback(root135); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<input>");
  node62.attr('type', "checkbox");
  
  var ref81 = b;
  node62.attr('checked', !!ref81.get());
  subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
    if(ref === ref81) node62.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node62, 'change', function() {
    b.set(!!node62.attr('checked'));
  }));
  
  var val47 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val47 !== null) {
    subs__.addSub(mobl.domBind(node62, 'tap', val47));
  }
  
  var val48 = onchange.get();
  if(val48 !== null) {
    subs__.addSub(mobl.domBind(node62, 'change', val48));
  }
  
  root137.append(node62);
  
  root137.append(" ");
  
  var node63 = $("<span>");
  
  var ref80 = label;
  node63.text(""+ref80.get());
  var ignore14 = false;
  subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
    if(ignore14) return;
    node63.text(""+val);
  }));
  subs__.addSub(ref80.rebind());
  
  
  var val46 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after11(result__) {
                    var tmp231 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after11);if(result__ !== undefined) after11(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val46 !== null) {
    subs__.addSub(mobl.domBind(node63, 'tap', val46));
  }
  
  root137.append(node63);
  callback(root137); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';
mobl.ui.generic.textFieldInvalidStyle = 'mobl__ui__generic__textFieldInvalidStyle';
mobl.ui.generic.textFieldLabelStyle = 'mobl__ui__generic__textFieldLabelStyle';
mobl.ui.generic.validationMessageStyle = 'mobl__ui__generic__validationMessageStyle';
mobl.ui.generic.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


mobl.ui.generic.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root138 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node64 = $("<span>");
  root138.append(node64);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value26 = label.get();
    if(oldValue10 === value26) return;
    oldValue10 = value26;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node64.empty();
    if(value26) {
      
      var tmp148 = mobl.ref(null);
      
      var nodes86 = $("<span>");
      node64.append(nodes86);
      subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), tmp148, function(_, callback) {
        var root139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes86;
        nodes86 = node.contents();
        oldNodes.replaceWith(nodes86);
      }));
      
      
    } else {
      
    }
  };
  renderCond10();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond10();
  }));
  
  
  var node65 = $("<span>");
  root138.append(node65);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value27 = validator.get();
    if(oldValue11 === value27) return;
    oldValue11 = value27;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node65.empty();
    if(value27) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after15(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp232 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node66 = $("<input>");
        node66.attr('type', "text");
        
        var ref82 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref82.get() !== null) {
          node66.attr('class', ref82.get());
          subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
            node66.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref82.rebind());
        
        var ref83 = placeholder;
        if(ref83.get() !== null) {
          node66.attr('placeholder', ref83.get());
          subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
            node66.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref83.rebind());
        
        var ref84 = temp;
        node66.val(""+ref84.get());
        var ignore15 = false;
        subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
          if(ignore15) return;
          node66.val(""+val);
        }));
        subs__.addSub(ref84.rebind());
        
        subs__.addSub(mobl.domBind(node66, 'keyup change', function() {
          ignore15 = true;
          temp.set(mobl.stringTomobl__String(node66.val()));
          ignore15 = false;
        }));
        
        
        var val49 = onchange.get();
        if(val49 !== null) {
          subs__.addSub(mobl.domBind(node66, 'change', val49));
        }
        
        var val50 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after12(result__) {
                          var tmp233 = result__;
                          function after13(result__) {
                            var tmp234 = result__;
                            var result__ = tmp234;
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
                          var result__ = validator.get()(temp.get(), after13);if(result__ !== undefined) after13(result__);
                        }
                        var result__ = onkeyup.get()(event, after12);if(result__ !== undefined) after12(result__);
                      } else {
                        {
                          function after14(result__) {
                            var tmp234 = result__;
                            var result__ = tmp234;
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
                          var result__ = validator.get()(temp.get(), after14);if(result__ !== undefined) after14(result__);
                        }
                      }
                    };
        if(val50 !== null) {
          subs__.addSub(mobl.domBind(node66, 'keyup', val50));
        }
        
        var val51 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = mobl.ui.generic.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val51 !== null) {
          subs__.addSub(mobl.domBind(node66, 'blur', val51));
        }
        
        node65.append(node66);
        
        var tmp149 = mobl.ref(null);
        
        var nodes87 = $("<span>");
        node65.append(nodes87);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), tmp149, function(_, callback) {
          var root140 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root140); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes87;
          nodes87 = node.contents();
          oldNodes.replaceWith(nodes87);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after15);if(result__ !== undefined) after15(result__);
    } else {
      
      var node67 = $("<input>");
      node67.attr('type', "text");
      
      var ref85 = style;
      if(ref85.get() !== null) {
        node67.attr('class', ref85.get());
        subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
          node67.attr('class', val);
        }));
        
      }
      subs__.addSub(ref85.rebind());
      
      var ref86 = placeholder;
      if(ref86.get() !== null) {
        node67.attr('placeholder', ref86.get());
        subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
          node67.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref86.rebind());
      
      var ref87 = s;
      node67.val(""+ref87.get());
      var ignore16 = false;
      subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
        if(ignore16) return;
        node67.val(""+val);
      }));
      subs__.addSub(ref87.rebind());
      
      subs__.addSub(mobl.domBind(node67, 'keyup change', function() {
        ignore16 = true;
        s.set(mobl.stringTomobl__String(node67.val()));
        ignore16 = false;
      }));
      
      
      var val52 = onchange.get();
      if(val52 !== null) {
        subs__.addSub(mobl.domBind(node67, 'change', val52));
      }
      
      var val53 = onkeyup.get();
      if(val53 !== null) {
        subs__.addSub(mobl.domBind(node67, 'keyup', val53));
      }
      
      var val54 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val54 !== null) {
        subs__.addSub(mobl.domBind(node67, 'blur', val54));
      }
      
      node65.append(node67);
      
      
    }
  };
  renderCond11();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root138); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes88 = $("<span>");
  root141.append(nodes88);
  subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root142); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes88;
    nodes88 = node.contents();
    oldNodes.replaceWith(nodes88);
  }));
  callback(root141); return subs__;
  
  return subs__;
};
mobl.ui.generic.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


mobl.ui.generic.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after16(result__) {
      var tmp235 = result__;
      var result__ = tmp235;
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
    var result__ = validator.get()(n2, after16);if(result__ !== undefined) after16(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes89 = $("<span>");
  root143.append(nodes89);
  subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root144 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root144); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes89;
    nodes89 = node.contents();
    oldNodes.replaceWith(nodes89);
  }));
  callback(root143); return subs__;
  
  return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node68 = $("<span>");
  root145.append(node68);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value28 = label.get();
    if(oldValue12 === value28) return;
    oldValue12 = value28;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node68.empty();
    if(value28) {
      
      var node69 = $("<span>");
      node69.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref91 = label;
      node69.text(""+ref91.get());
      var ignore18 = false;
      subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node69.text(""+val);
      }));
      subs__.addSub(ref91.rebind());
      
      
      node68.append(node69);
      
      var node70 = $("<span>");
      node70.attr('style', "float: left");
      
      
      var node71 = $("<input>");
      node71.attr('type', "password");
      
      var ref88 = style;
      if(ref88.get() !== null) {
        node71.attr('class', ref88.get());
        subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
          node71.attr('class', val);
        }));
        
      }
      subs__.addSub(ref88.rebind());
      
      var ref89 = placeholder;
      if(ref89.get() !== null) {
        node71.attr('placeholder', ref89.get());
        subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
          node71.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref89.rebind());
      
      var ref90 = s;
      node71.val(""+ref90.get());
      var ignore17 = false;
      subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
        if(ignore17) return;
        node71.val(""+val);
      }));
      subs__.addSub(ref90.rebind());
      
      subs__.addSub(mobl.domBind(node71, 'keyup change', function() {
        ignore17 = true;
        s.set(mobl.stringTomobl__String(node71.val()));
        ignore17 = false;
      }));
      
      
      var val55 = onchange.get();
      if(val55 !== null) {
        subs__.addSub(mobl.domBind(node71, 'change', val55));
      }
      
      var val56 = onkeyup.get();
      if(val56 !== null) {
        subs__.addSub(mobl.domBind(node71, 'keyup', val56));
      }
      
      var val57 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val57 !== null) {
        subs__.addSub(mobl.domBind(node71, 'blur', val57));
      }
      
      node70.append(node71);
      node68.append(node70);
      
      
      
      
    } else {
      
      var node72 = $("<input>");
      node72.attr('type', "password");
      
      var ref92 = style;
      if(ref92.get() !== null) {
        node72.attr('class', ref92.get());
        subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
          node72.attr('class', val);
        }));
        
      }
      subs__.addSub(ref92.rebind());
      
      var ref93 = placeholder;
      if(ref93.get() !== null) {
        node72.attr('placeholder', ref93.get());
        subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
          node72.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref93.rebind());
      
      var ref94 = s;
      node72.val(""+ref94.get());
      var ignore19 = false;
      subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
        if(ignore19) return;
        node72.val(""+val);
      }));
      subs__.addSub(ref94.rebind());
      
      subs__.addSub(mobl.domBind(node72, 'keyup change', function() {
        ignore19 = true;
        s.set(mobl.stringTomobl__String(node72.val()));
        ignore19 = false;
      }));
      
      
      var val58 = onchange.get();
      if(val58 !== null) {
        subs__.addSub(mobl.domBind(node72, 'change', val58));
      }
      
      var val59 = onkeyup.get();
      if(val59 !== null) {
        subs__.addSub(mobl.domBind(node72, 'keyup', val59));
      }
      
      var val60 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val60 !== null) {
        subs__.addSub(mobl.domBind(node72, 'blur', val60));
      }
      
      node68.append(node72);
      
      
    }
  };
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root145); return subs__;
  
  return subs__;
};
mobl.ui.generic.selectFieldStyle = 'mobl__ui__generic__selectFieldStyle';

mobl.ui.generic.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root146 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref99 = style;
  if(ref99.get() !== null) {
    sel.attr('class', ref99.get());
    subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref99.rebind());
  
  var val61 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after17(result__) {
                    var tmp237 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after17);if(result__ !== undefined) after17(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val61 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val61));
  }
  
  
  var node73 = mobl.loadingSpan();
  sel.append(node73);
  var list9;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList9 = function() {
    var subs__ = listSubs__;
    list9 = options.get();
    list9.list(function(results9) {
      node73.empty();
      for(var i9 = 0; i9 < results9.length; i9++) {
        (function() {
          var iternode9 = $("<span>");
          node73.append(iternode9);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_2");
          
          var node74 = $("<option>");
          
          var ref95 = optionDescription;
          node74.text(""+ref95.get());
          var ignore20 = false;
          subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
            if(ignore20) return;
            node74.text(""+val);
          }));
          subs__.addSub(ref95.rebind());
          
          
          var ref96 = optionStyle;
          if(ref96.get() !== null) {
            node74.attr('class', ref96.get());
            subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
              node74.attr('class', val);
            }));
            
          }
          subs__.addSub(ref96.rebind());
          
          var ref97 = optionValue;
          if(ref97.get() !== null) {
            node74.attr('value', ref97.get());
            subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
              node74.attr('value', val);
            }));
            
          }
          subs__.addSub(ref97.rebind());
          
          var ref98 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref98.get() !== null) {
            node74.attr('selected', ref98.get());
            subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
              node74.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node74.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node74.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref98.rebind());
          
          iternode9.append(node74);
          
          var oldNodes = iternode9;
          iternode9 = iternode9.contents();
          oldNodes.replaceWith(iternode9);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
    });
  };
  renderList9();
  
  root146.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root146); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
  var root147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp159 = mobl.ref(null);
  
  
  var tmp158 = mobl.ref(null);
  
  
  var tmp157 = mobl.ref(null);
  
  var nodes90 = $("<span>");
  root147.append(nodes90);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp157, tmp158, tmp159, function(_, callback) {
    var root148 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node75 = mobl.loadingSpan();
    root148.append(node75);
    var list10;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList10 = function() {
      var subs__ = listSubs__;
      list10 = tabs.get();
      list10.list(function(results10) {
        node75.empty();
        for(var i10 = 0; i10 < results10.length; i10++) {
          (function() {
            var iternode10 = $("<span>");
            node75.append(iternode10);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_3");
            
            var tmp154 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp154.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp154.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp154.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp154.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            
            var tmp153 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp156 = mobl.ref(null);
            
            
            var tmp155 = mobl.ref(null);
            
            var nodes91 = $("<span>");
            iternode10.append(nodes91);
            subs__.addSub((mobl.span)(tmp154, tmp155, tmp153, tmp156, function(_, callback) {
              var root149 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp152 = mobl.ref(null);
              
              
              var tmp151 = mobl.ref(null);
              
              var nodes92 = $("<span>");
              root149.append(nodes92);
              subs__.addSub((mobl.label)(tabName, tmp151, tmp152, function(_, callback) {
                var root150 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root150); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes92;
                nodes92 = node.contents();
                oldNodes.replaceWith(nodes92);
              }));
              callback(root149); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes91;
              nodes91 = node.contents();
              oldNodes.replaceWith(nodes91);
            }));
            
            var oldNodes = iternode10;
            iternode10 = iternode10.contents();
            oldNodes.replaceWith(iternode10);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
      });
    };
    renderList10();
    
    callback(root148); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes90;
    nodes90 = node.contents();
    oldNodes.replaceWith(nodes90);
  }));
  
  var node76 = mobl.loadingSpan();
  root147.append(node76);
  var list11;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList11 = function() {
    var subs__ = listSubs__;
    list11 = tabs.get();
    list11.list(function(results11) {
      node76.empty();
      for(var i11 = 0; i11 < results11.length; i11++) {
        (function() {
          var iternode11 = $("<span>");
          node76.append(iternode11);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_3");
          
          var tmp161 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp161.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp161.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp161.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp161.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          
          var tmp164 = mobl.ref(null);
          
          
          var tmp163 = mobl.ref(null);
          
          
          var tmp162 = mobl.ref(null);
          
          var nodes93 = $("<span>");
          iternode11.append(nodes93);
          subs__.addSub((mobl.block)(tmp161, tmp162, tmp163, tmp164, function(_, callback) {
            var root151 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes94 = $("<span>");
            root151.append(nodes94);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root152 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes95 = $("<span>");
              root152.append(nodes95);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl32();
              }));
              
              function renderControl32() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root153 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root153); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes95;
                  nodes95 = node.contents();
                  oldNodes.replaceWith(nodes95);
                }));
              }
              renderControl32();
              callback(root152); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes94;
              nodes94 = node.contents();
              oldNodes.replaceWith(nodes94);
            }));
            callback(root151); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes93;
            nodes93 = node.contents();
            oldNodes.replaceWith(nodes93);
          }));
          
          var oldNodes = iternode11;
          iternode11 = iternode11.contents();
          oldNodes.replaceWith(iternode11);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
    });
  };
  renderList11();
  
  callback(root147); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node77 = $("<div>");
  
  var ref103 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref103.get() !== null) {
    node77.attr('class', ref103.get());
    subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
      node77.attr('class', val);
    }));
    
  }
  subs__.addSub(ref103.rebind());
  
  
  var node78 = $("<input>");
  node78.attr('type', "search");
  
  var ref100 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref100.get() !== null) {
    node78.attr('class', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      node78.attr('class', val);
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var ref101 = placeholder;
  if(ref101.get() !== null) {
    node78.attr('placeholder', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      node78.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  var ref102 = s;
  node78.val(""+ref102.get());
  var ignore21 = false;
  subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node78.val(""+val);
  }));
  subs__.addSub(ref102.rebind());
  
  subs__.addSub(mobl.domBind(node78, 'keyup change', function() {
    ignore21 = true;
    s.set(mobl.stringTomobl__String(node78.val()));
    ignore21 = false;
  }));
  
  
  var val62 = onsearch.get();
  if(val62 !== null) {
    subs__.addSub(mobl.domBind(node78, 'change', val62));
  }
  
  var val63 = onkeyup.get();
  if(val63 !== null) {
    subs__.addSub(mobl.domBind(node78, 'keyup', val63));
  }
  node78.attr('autocorrect', false);
  node78.attr('autocapitalize', false);
  node78.attr('autocomplete', false);
  
  node77.append(node78);
  root154.append(node77);
  callback(root154); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root155 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref104 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref104.get() !== null) {
    menu.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  var nodes96 = $("<span>");
  menu.append(nodes96);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl33();
  }));
  
  function renderControl33() {
    subs__.addSub((elements)(function(elements, callback) {
      var root156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes96;
      nodes96 = node.contents();
      oldNodes.replaceWith(nodes96);
    }));
  }
  renderControl33();
  root155.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val64 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp241 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val64 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val64));
  }
  
  root155.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root155); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp225 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp225.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node79 = $("<span>");
  root157.append(node79);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value29 = tmp225.get();
    if(oldValue13 === value29) return;
    oldValue13 = value29;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node79.empty();
    if(value29) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node80 = $("<div>");
        node80.attr('width', "100%");
        
        
        var node81 = $("<div>");
        node81.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes99 = $("<span>");
        node81.append(nodes99);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root160 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node84 = mobl.loadingSpan();
          root160.append(node84);
          var list12;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList12 = function() {
            var subs__ = listSubs__;
            list12 = items.get();
            list12.list(function(results12) {
              node84.empty();
              for(var i12 = 0; i12 < results12.length; i12++) {
                (function() {
                  var iternode12 = $("<span>");
                  node84.append(iternode12);
                  var it;
                  it = mobl.ref(mobl.ref(results12), i12);
                  
                  var tmp179 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp179.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp179.set(it.get() == current.get());
                  }));
                  
                  
                  var node85 = $("<span>");
                  iternode12.append(node85);
                  var condSubs15 = new mobl.CompSubscription();
                  subs__.addSub(condSubs15);
                  var oldValue15;
                  var renderCond15 = function() {
                    var value31 = tmp179.get();
                    if(oldValue15 === value31) return;
                    oldValue15 = value31;
                    var subs__ = condSubs15;
                    subs__.unsubscribe();
                    node85.empty();
                    if(value31) {
                      
                      var tmp175 = mobl.ref(false);
                      
                      
                      var tmp174 = mobl.ref(null);
                      
                      
                      var tmp173 = mobl.ref(null);
                      
                      var nodes100 = $("<span>");
                      node85.append(nodes100);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp173, tmp174, tmp175, function(_, callback) {
                        var root161 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes101 = $("<span>");
                        root161.append(nodes101);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl35();
                        }));
                        
                        function renderControl35() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root162 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root162); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes101;
                            nodes101 = node.contents();
                            oldNodes.replaceWith(nodes101);
                          }));
                        }
                        renderControl35();
                        callback(root161); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes100;
                        nodes100 = node.contents();
                        oldNodes.replaceWith(nodes100);
                      }));
                      
                      
                    } else {
                      
                      var tmp177 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = mobl.ui.generic.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp176 = mobl.ref(true);
                      
                      
                      var tmp178 = mobl.ref(null);
                      
                      var nodes102 = $("<span>");
                      node85.append(nodes102);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp177, tmp178, tmp176, function(_, callback) {
                        var root163 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes103 = $("<span>");
                        root163.append(nodes103);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl36();
                        }));
                        
                        function renderControl36() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root164 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root164); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes103;
                            nodes103 = node.contents();
                            oldNodes.replaceWith(nodes103);
                          }));
                        }
                        renderControl36();
                        callback(root163); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes102;
                        nodes102 = node.contents();
                        oldNodes.replaceWith(nodes102);
                      }));
                      
                      
                    }
                  };
                  renderCond15();
                  subs__.addSub(tmp179.addEventListener('change', function() {
                    renderCond15();
                  }));
                  
                  
                  var oldNodes = iternode12;
                  iternode12 = iternode12.contents();
                  oldNodes.replaceWith(iternode12);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
            });
          };
          renderList12();
          
          callback(root160); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes99;
          nodes99 = node.contents();
          oldNodes.replaceWith(nodes99);
        }));
        node80.append(node81);
        
        var node82 = $("<div>");
        node82.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node83 = $("<span>");
        node82.append(node83);
        var condSubs14 = new mobl.CompSubscription();
        subs__.addSub(condSubs14);
        var oldValue14;
        var renderCond14 = function() {
          var value30 = current.get();
          if(oldValue14 === value30) return;
          oldValue14 = value30;
          var subs__ = condSubs14;
          subs__.unsubscribe();
          node83.empty();
          if(value30) {
            var nodes97 = $("<span>");
            node83.append(nodes97);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl34();
            }));
            
            function renderControl34() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root158 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root158); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes97;
                nodes97 = node.contents();
                oldNodes.replaceWith(nodes97);
              }));
            }
            renderControl34();
            
            
          } else {
            
            var tmp181 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp183 = mobl.ref(null);
            
            
            var tmp182 = mobl.ref(null);
            
            var nodes98 = $("<span>");
            node83.append(nodes98);
            subs__.addSub((mobl.label)(tmp181, tmp182, tmp183, function(_, callback) {
              var root159 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root159); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes98;
              nodes98 = node.contents();
              oldNodes.replaceWith(nodes98);
            }));
            
            
          }
        };
        renderCond14();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond14();
        }));
        
        node80.append(node82);
        node79.append(node80);
        
        
        
        
        
        
      });
    } else {
      var nodes104 = $("<span>");
      node79.append(nodes104);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root165 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node86 = mobl.loadingSpan();
        root165.append(node86);
        var list13;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList13 = function() {
          var subs__ = listSubs__;
          list13 = items.get();
          list13.list(function(results13) {
            node86.empty();
            for(var i13 = 0; i13 < results13.length; i13++) {
              (function() {
                var iternode13 = $("<span>");
                node86.append(iternode13);
                var it;
                it = mobl.ref(mobl.ref(results13), i13);
                
                var tmp165 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp242 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp167 = mobl.ref(false);
                
                
                var tmp166 = mobl.ref(null);
                
                var nodes105 = $("<span>");
                iternode13.append(nodes105);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp165, tmp166, tmp167, function(_, callback) {
                  var root166 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes106 = $("<span>");
                  root166.append(nodes106);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl37();
                  }));
                  
                  function renderControl37() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root167 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root167); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes106;
                      nodes106 = node.contents();
                      oldNodes.replaceWith(nodes106);
                    }));
                  }
                  renderControl37();
                  callback(root166); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes105;
                  nodes105 = node.contents();
                  oldNodes.replaceWith(nodes105);
                }));
                
                var oldNodes = iternode13;
                iternode13 = iternode13.contents();
                oldNodes.replaceWith(iternode13);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
          });
        };
        renderList13();
        
        callback(root165); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes104;
        nodes104 = node.contents();
        oldNodes.replaceWith(nodes104);
      }));
      
      
    }
  };
  renderCond13();
  subs__.addSub(tmp225.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root157); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root168 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp171 = mobl.ref("Detail");
  
  
  var tmp172 = mobl.ref(null);
  
  var nodes107 = $("<span>");
  root168.append(nodes107);
  subs__.addSub((mobl.ui.generic.header)(tmp171, tmp172, function(_, callback) {
    var root169 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp169 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp168 = mobl.ref("Back");
    
    var nodes108 = $("<span>");
    root169.append(nodes108);
    subs__.addSub((mobl.ui.generic.backButton)(tmp168, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp169, function(_, callback) {
      var root170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root170); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes108;
      nodes108 = node.contents();
      oldNodes.replaceWith(nodes108);
    }));
    callback(root169); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes107;
    nodes107 = node.contents();
    oldNodes.replaceWith(nodes107);
  }));
  var nodes109 = $("<span>");
  root168.append(nodes109);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl38();
  }));
  
  function renderControl38() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root171); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes109;
      nodes109 = node.contents();
      oldNodes.replaceWith(nodes109);
    }));
  }
  renderControl38();
  callback(root168); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root172 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes110 = $("<span>");
  root172.append(nodes110);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root173 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node87 = mobl.loadingSpan();
    root173.append(node87);
    var list14;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList14 = function() {
      var subs__ = listSubs__;
      list14 = coll.get();
      list14.list(function(results14) {
        node87.empty();
        for(var i14 = 0; i14 < results14.length; i14++) {
          (function() {
            var iternode14 = $("<span>");
            node87.append(iternode14);
            var it;
            it = mobl.ref(mobl.ref(results14), i14);
            
            var tmp191 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp191.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp191.set(it.get() == selected.get());
            }));
            
            
            var node88 = $("<span>");
            iternode14.append(node88);
            var condSubs16 = new mobl.CompSubscription();
            subs__.addSub(condSubs16);
            var oldValue16;
            var renderCond16 = function() {
              var value32 = tmp191.get();
              if(oldValue16 === value32) return;
              oldValue16 = value32;
              var subs__ = condSubs16;
              subs__.unsubscribe();
              node88.empty();
              if(value32) {
                
                var tmp186 = mobl.ref(false);
                
                
                var tmp185 = mobl.ref(null);
                
                
                var tmp184 = mobl.ref(null);
                
                var nodes111 = $("<span>");
                node88.append(nodes111);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp184, tmp185, tmp186, function(_, callback) {
                  var root174 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes112 = $("<span>");
                  root174.append(nodes112);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl39();
                  }));
                  
                  function renderControl39() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root175 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root175); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes112;
                      nodes112 = node.contents();
                      oldNodes.replaceWith(nodes112);
                    }));
                  }
                  renderControl39();
                  callback(root174); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes111;
                  nodes111 = node.contents();
                  oldNodes.replaceWith(nodes111);
                }));
                
                
              } else {
                
                var tmp188 = mobl.ref(true);
                
                
                var tmp187 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp189 = mobl.ref(null);
                
                var nodes113 = $("<span>");
                node88.append(nodes113);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp187, tmp189, tmp188, function(_, callback) {
                  var root176 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes114 = $("<span>");
                  root176.append(nodes114);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl40();
                  }));
                  
                  function renderControl40() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root177 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root177); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes114;
                      nodes114 = node.contents();
                      oldNodes.replaceWith(nodes114);
                    }));
                  }
                  renderControl40();
                  callback(root176); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes113;
                  nodes113 = node.contents();
                  oldNodes.replaceWith(nodes113);
                }));
                
                
              }
            };
            renderCond16();
            subs__.addSub(tmp191.addEventListener('change', function() {
              renderCond16();
            }));
            
            
            var oldNodes = iternode14;
            iternode14 = iternode14.contents();
            oldNodes.replaceWith(iternode14);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
      });
    };
    renderList14();
    
    callback(root173); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes110;
    nodes110 = node.contents();
    oldNodes.replaceWith(nodes110);
  }));
  callback(root172); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root178 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes115 = $("<span>");
    root178.append(nodes115);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp195 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp195.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp195.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp195.set(coll.get().limit(n.get()));
      }));
      
      
      var node89 = mobl.loadingSpan();
      root179.append(node89);
      var list15;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList15 = function() {
        var subs__ = listSubs__;
        list15 = tmp195.get();
        list15.list(function(results15) {
          node89.empty();
          for(var i15 = 0; i15 < results15.length; i15++) {
            (function() {
              var iternode15 = $("<span>");
              node89.append(iternode15);
              var it;
              it = mobl.ref(mobl.ref(results15), i15);
              
              var tmp192 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp194 = mobl.ref(false);
              
              
              var tmp193 = mobl.ref(null);
              
              var nodes116 = $("<span>");
              iternode15.append(nodes116);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp192, tmp193, tmp194, function(_, callback) {
                var root180 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes117 = $("<span>");
                root180.append(nodes117);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl41();
                }));
                
                function renderControl41() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root181 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root181); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes117;
                    nodes117 = node.contents();
                    oldNodes.replaceWith(nodes117);
                  }));
                }
                renderControl41();
                callback(root180); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes116;
                nodes116 = node.contents();
                oldNodes.replaceWith(nodes116);
              }));
              
              var oldNodes = iternode15;
              iternode15 = iternode15.contents();
              oldNodes.replaceWith(iternode15);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
          subs__.addSub(tmp195.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
        });
      };
      renderList15();
      
      
      var tmp198 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp198.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp198.set(n.get() < total.get());
      }));
      
      
      var node90 = $("<span>");
      root179.append(node90);
      var condSubs17 = new mobl.CompSubscription();
      subs__.addSub(condSubs17);
      var oldValue17;
      var renderCond17 = function() {
        var value33 = tmp198.get();
        if(oldValue17 === value33) return;
        oldValue17 = value33;
        var subs__ = condSubs17;
        subs__.unsubscribe();
        node90.empty();
        if(value33) {
          
          var node91 = $("<li>");
          
          var ref105 = mobl.ref(mobl.ui.generic.loadMoreStyle);
          if(ref105.get() !== null) {
            node91.attr('class', ref105.get());
            subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
              node91.attr('class', val);
            }));
            
          }
          subs__.addSub(ref105.rebind());
          
          var val65 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val65 !== null) {
            subs__.addSub(mobl.domBind(node91, 'tap', val65));
          }
          
          
          var tmp197 = mobl.ref(null);
          
          
          var tmp196 = mobl.ref(null);
          
          var nodes118 = $("<span>");
          node91.append(nodes118);
          subs__.addSub((mobl.label)(moreLabel, tmp196, tmp197, function(_, callback) {
            var root182 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root182); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes118;
            nodes118 = node.contents();
            oldNodes.replaceWith(nodes118);
          }));
          node90.append(node91);
          
          
          
        } else {
          
        }
      };
      renderCond17();
      subs__.addSub(tmp198.addEventListener('change', function() {
        renderCond17();
      }));
      
      callback(root179); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes115;
      nodes115 = node.contents();
      oldNodes.replaceWith(nodes115);
    }));
    callback(root178); return subs__;
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root183 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes119 = $("<span>");
  root183.append(nodes119);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root184 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node92 = mobl.loadingSpan();
    root184.append(node92);
    var list16;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList16 = function() {
      var subs__ = listSubs__;
      list16 = items.get();
      list16.list(function(results16) {
        node92.empty();
        for(var i16 = 0; i16 < results16.length; i16++) {
          (function() {
            var iternode16 = $("<span>");
            node92.append(iternode16);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results16), i16), "_1");it = mobl.ref(mobl.ref(mobl.ref(results16), i16), "_2");
            
            var tmp202 = mobl.ref(false);
            
            
            var tmp201 = mobl.ref(null);
            
            
            var tmp200 = mobl.ref(null);
            
            var nodes120 = $("<span>");
            iternode16.append(nodes120);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp200, tmp201, tmp202, function(_, callback) {
              var root185 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp199 = mobl.ref(null);
              
              var nodes121 = $("<span>");
              root185.append(nodes121);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp199, function(_, callback) {
                var root186 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root186); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes121;
                nodes121 = node.contents();
                oldNodes.replaceWith(nodes121);
              }));
              callback(root185); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes120;
              nodes120 = node.contents();
              oldNodes.replaceWith(nodes120);
            }));
            
            var oldNodes = iternode16;
            iternode16 = iternode16.contents();
            oldNodes.replaceWith(iternode16);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list16.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
      });
    };
    renderList16();
    
    callback(root184); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes119;
    nodes119 = node.contents();
    oldNodes.replaceWith(nodes119);
  }));
  callback(root183); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root187 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll27) {
    coll27 = coll27.reverse();
    function processOne3() {
      var it;
      it = coll27.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll27.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
      
      var tmp206 = mobl.ref(null);
      
      var nodes122 = $("<span>");
      root187.append(nodes122);
      subs__.addSub((mobl.ui.generic.header)(title, tmp206, function(_, callback) {
        var root188 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp203 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp204 = mobl.ref(mobl._("Back", []));
        
        var nodes123 = $("<span>");
        root188.append(nodes123);
        subs__.addSub((mobl.ui.generic.backButton)(tmp204, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp203, function(_, callback) {
          var root189 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root189); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes123;
          nodes123 = node.contents();
          oldNodes.replaceWith(nodes123);
        }));
        
        var tmp205 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll26) {
                               coll26 = coll26.reverse();
                               function processOne2() {
                                 var checked;var it;
                                 var tmp244 = coll26.pop();
                                 checked = tmp244._1;it = tmp244._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll26.length > 0) processOne2(); else rest2();
                                   
                                 } else {
                                   {
                                     
                                     if(coll26.length > 0) processOne2(); else rest2();
                                     
                                   }
                                 }
                               }
                               function rest2() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll26.length > 0) processOne2(); else rest2();
                             });
                             
                           });
        
        var nodes124 = $("<span>");
        root188.append(nodes124);
        subs__.addSub((mobl.ui.generic.button)(doneButtonLabel, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp205, function(_, callback) {
          var root190 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root190); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes124;
          nodes124 = node.contents();
          oldNodes.replaceWith(nodes124);
        }));
        callback(root188); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes122;
        nodes122 = node.contents();
        oldNodes.replaceWith(nodes122);
      }));
      var nodes125 = $("<span>");
      root187.append(nodes125);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes125;
        nodes125 = node.contents();
        oldNodes.replaceWith(nodes125);
      }));
      callback(root187); return subs__;
      
      
    }
    if(coll27.length > 0) processOne3(); else rest3();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root193 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp208 = mobl.ref(null);
  
  
  var tmp207 = mobl.ref(null);
  
  var nodes126 = $("<span>");
  root193.append(nodes126);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, searchTermPlaceholder, tmp207, tmp208, function(_, callback) {
    var root194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root194); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes126;
    nodes126 = node.contents();
    oldNodes.replaceWith(nodes126);
  }));
  
  var tmp209 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp209.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp209.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp209.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp209.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp209.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes127 = $("<span>");
  root193.append(nodes127);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp209, masterItem, detailItem, function(_, callback) {
    var root195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root195); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes127;
    nodes127 = node.contents();
    oldNodes.replaceWith(nodes127);
  }));
  callback(root193); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
  var root196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp224 = mobl.ref(null);
  
  
  var tmp223 = mobl.ref(null);
  
  
  var tmp222 = mobl.ref(null);
  
  var nodes128 = $("<span>");
  root196.append(nodes128);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp222, tmp223, tmp224, function(_, callback) {
    var root197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node93 = mobl.loadingSpan();
    root197.append(node93);
    var list17;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList17 = function() {
      var subs__ = listSubs__;
      list17 = sections.get();
      list17.list(function(results17) {
        node93.empty();
        for(var i17 = 0; i17 < results17.length; i17++) {
          (function() {
            var iternode17 = $("<span>");
            node93.append(iternode17);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results17), i17), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results17), i17), "_2");
            
            var tmp214 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp214.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp214.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp214.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp214.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp213 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp216 = mobl.ref(null);
            
            
            var tmp215 = mobl.ref(null);
            
            var nodes129 = $("<span>");
            iternode17.append(nodes129);
            subs__.addSub((mobl.span)(tmp214, tmp215, tmp213, tmp216, function(_, callback) {
              var root198 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp212 = mobl.ref(null);
              
              
              var tmp211 = mobl.ref(null);
              
              var nodes130 = $("<span>");
              root198.append(nodes130);
              subs__.addSub((mobl.label)(sectionName, tmp211, tmp212, function(_, callback) {
                var root199 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root199); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes130;
                nodes130 = node.contents();
                oldNodes.replaceWith(nodes130);
              }));
              callback(root198); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes129;
              nodes129 = node.contents();
              oldNodes.replaceWith(nodes129);
            }));
            
            var tmp217 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp217.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp217.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp217.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp217.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            
            var tmp221 = mobl.ref(null);
            
            
            var tmp219 = mobl.ref(null);
            
            
            var tmp218 = mobl.ref(null);
            
            var nodes131 = $("<span>");
            iternode17.append(nodes131);
            subs__.addSub((mobl.block)(tmp217, tmp218, tmp219, tmp221, function(_, callback) {
              var root200 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes132 = $("<span>");
              root200.append(nodes132);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl42();
              }));
              
              function renderControl42() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root201 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root201); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes132;
                  nodes132 = node.contents();
                  oldNodes.replaceWith(nodes132);
                }));
              }
              renderControl42();
              callback(root200); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes131;
              nodes131 = node.contents();
              oldNodes.replaceWith(nodes131);
            }));
            
            var oldNodes = iternode17;
            iternode17 = iternode17.contents();
            oldNodes.replaceWith(iternode17);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list17.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
      });
    };
    renderList17();
    
    callback(root197); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes128;
    nodes128 = node.contents();
    oldNodes.replaceWith(nodes128);
  }));
  callback(root196); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
  var root202 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node94 = $("<table>");
  
  var ref106 = mobl.ref(mobl.ui.generic.tableStyle);
  if(ref106.get() !== null) {
    node94.attr('class', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node94.attr('class', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  var nodes133 = $("<span>");
  node94.append(nodes133);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl43();
  }));
  
  function renderControl43() {
    subs__.addSub((elements)(function(elements, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes133;
      nodes133 = node.contents();
      oldNodes.replaceWith(nodes133);
    }));
  }
  renderControl43();
  root202.append(node94);
  callback(root202); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
  var root204 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node95 = $("<tr>");
  
  var ref107 = mobl.ref(mobl.ui.generic.trStyle);
  if(ref107.get() !== null) {
    node95.attr('class', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      node95.attr('class', val);
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  var nodes134 = $("<span>");
  node95.append(nodes134);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl44();
  }));
  
  function renderControl44() {
    subs__.addSub((elements)(function(elements, callback) {
      var root205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes134;
      nodes134 = node.contents();
      oldNodes.replaceWith(nodes134);
    }));
  }
  renderControl44();
  root204.append(node95);
  callback(root204); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
  var root206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node96 = $("<td>");
  
  var ref109 = width;
  if(ref109.get() !== null) {
    node96.attr('width', ref109.get());
    subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
      node96.attr('width', val);
    }));
    
  }
  subs__.addSub(ref109.rebind());
  
  var ref110 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref110.get() !== null) {
    node96.attr('class', ref110.get());
    subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
      node96.attr('class', val);
    }));
    
  }
  subs__.addSub(ref110.rebind());
  
  var nodes135 = $("<span>");
  node96.append(nodes135);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl45();
  }));
  
  function renderControl45() {
    subs__.addSub((elements)(function(elements, callback) {
      var root207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes135;
      nodes135 = node.contents();
      oldNodes.replaceWith(nodes135);
    }));
  }
  renderControl45();
  root206.append(node96);
  callback(root206); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
  var root208 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node97 = $("<td>");
  
  var ref111 = width;
  if(ref111.get() !== null) {
    node97.attr('width', ref111.get());
    subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
      node97.attr('width', val);
    }));
    
  }
  subs__.addSub(ref111.rebind());
  
  var ref112 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref112.get() !== null) {
    node97.attr('class', ref112.get());
    subs__.addSub(ref112.addEventListener('change', function(_, ref, val) {
      node97.attr('class', val);
    }));
    
  }
  subs__.addSub(ref112.rebind());
  
  var nodes136 = $("<span>");
  node97.append(nodes136);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl46();
  }));
  
  function renderControl46() {
    subs__.addSub((elements)(function(elements, callback) {
      var root209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes136;
      nodes136 = node.contents();
      oldNodes.replaceWith(nodes136);
    }));
  }
  renderControl46();
  root208.append(node97);
  callback(root208); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
  var root210 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node98 = $("<td>");
  
  var ref113 = width;
  if(ref113.get() !== null) {
    node98.attr('width', ref113.get());
    subs__.addSub(ref113.addEventListener('change', function(_, ref, val) {
      node98.attr('width', val);
    }));
    
  }
  subs__.addSub(ref113.rebind());
  
  var ref114 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref114.get() !== null) {
    node98.attr('class', ref114.get());
    subs__.addSub(ref114.addEventListener('change', function(_, ref, val) {
      node98.attr('class', val);
    }));
    
  }
  subs__.addSub(ref114.rebind());
  
  
  var node99 = $("<strong>");
  
  var nodes137 = $("<span>");
  node99.append(nodes137);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl47();
  }));
  
  function renderControl47() {
    subs__.addSub((elements)(function(elements, callback) {
      var root211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes137;
      nodes137 = node.contents();
      oldNodes.replaceWith(nodes137);
    }));
  }
  renderControl47();
  node98.append(node99);
  root210.append(node98);
  callback(root210); return subs__;
  
  
  
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
}(mobl.ui.generic));