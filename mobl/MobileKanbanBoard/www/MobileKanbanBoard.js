mobl.provides('mobileKanbanBoard');
mobl.provides('mobl');

mobileKanbanBoard.root = function(callback, screenCallback) {
  var root8548 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  model.Status.initDB(function(result__) {
    var all = mobl.ref(result__);
    model.Status.getStatus(1, function(result__) {
      var tmp11951 = mobl.ref(result__);
      subs__.addSub(mobl.ref(model.Status).addEventListener('change', function() {
        model.Status.getStatus(1, function(result__) {
          var tmp12016 = result__;
          var result__ = tmp12016;
          tmp11951.set(result__);
          
        });
      }));
      
      var nodes6205 = $("<span>");
      root8548.append(nodes6205);
      subs__.addSub((mobileKanbanBoard.column)(tmp11951, mobl.ref(styling.somedayColStyle), function(_, callback) {
        var root8549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6205;
        nodes6205 = node.contents();
        oldNodes.replaceWith(nodes6205);
      }));
      model.Status.getStatus(2, function(result__) {
        var tmp11952 = mobl.ref(result__);
        subs__.addSub(mobl.ref(model.Status).addEventListener('change', function() {
          model.Status.getStatus(2, function(result__) {
            var tmp12017 = result__;
            var result__ = tmp12017;
            tmp11952.set(result__);
            
          });
        }));
        
        var nodes6206 = $("<span>");
        root8548.append(nodes6206);
        subs__.addSub((mobileKanbanBoard.column)(tmp11952, mobl.ref(styling.todoColStyle), function(_, callback) {
          var root8550 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8550); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6206;
          nodes6206 = node.contents();
          oldNodes.replaceWith(nodes6206);
        }));
        model.Status.getStatus(3, function(result__) {
          var tmp11953 = mobl.ref(result__);
          subs__.addSub(mobl.ref(model.Status).addEventListener('change', function() {
            model.Status.getStatus(3, function(result__) {
              var tmp12018 = result__;
              var result__ = tmp12018;
              tmp11953.set(result__);
              
            });
          }));
          
          var nodes6207 = $("<span>");
          root8548.append(nodes6207);
          subs__.addSub((mobileKanbanBoard.column)(tmp11953, mobl.ref(styling.progressColStyle), function(_, callback) {
            var root8551 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8551); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6207;
            nodes6207 = node.contents();
            oldNodes.replaceWith(nodes6207);
          }));
          model.Status.getStatus(4, function(result__) {
            var tmp11954 = mobl.ref(result__);
            subs__.addSub(mobl.ref(model.Status).addEventListener('change', function() {
              model.Status.getStatus(4, function(result__) {
                var tmp12019 = result__;
                var result__ = tmp12019;
                tmp11954.set(result__);
                
              });
            }));
            
            var nodes6208 = $("<span>");
            root8548.append(nodes6208);
            subs__.addSub((mobileKanbanBoard.column)(tmp11954, mobl.ref(styling.doneColStyle), function(_, callback) {
              var root8552 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8552); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6208;
              nodes6208 = node.contents();
              oldNodes.replaceWith(nodes6208);
            }));
            
            var tmp11968 = mobl.ref("kanbl");
            
            
            var tmp11969 = mobl.ref(null);
            
            var nodes6209 = $("<span>");
            root8548.append(nodes6209);
            subs__.addSub((mobileKanbanBoard.appbar)(tmp11968, mobl.ref(styling.appHeaderStyle), tmp11969, function(_, callback) {
              var root8553 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp11955 = mobl.ref("kanbl.png");
              
              
              var tmp11961 = mobl.ref(null);
              
              
              var tmp11960 = mobl.ref(null);
              
              
              var tmp11959 = mobl.ref(null);
              
              
              var tmp11958 = mobl.ref(null);
              
              
              var tmp11957 = mobl.ref(null);
              
              
              var tmp11956 = mobl.ref(null);
              
              var nodes6210 = $("<span>");
              root8553.append(nodes6210);
              subs__.addSub((styling.image)(tmp11955, tmp11956, tmp11957, tmp11958, tmp11959, tmp11960, tmp11961, function(_, callback) {
                var root8554 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8554); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6210;
                nodes6210 = node.contents();
                oldNodes.replaceWith(nodes6210);
              }));
              
              var tmp11963 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mobileKanbanBoard.addTask', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp12020 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11962 = mobl.ref("add");
              
              var nodes6211 = $("<span>");
              root8553.append(nodes6211);
              subs__.addSub((styling.button)(tmp11962, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11963, function(_, callback) {
                var root8555 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8555); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6211;
                nodes6211 = node.contents();
                oldNodes.replaceWith(nodes6211);
              }));
              
              var tmp11965 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.resetDatabase(function(result__) {
                                     var tmp12021 = result__;
                                     var result__ = util.reloadPage();
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11964 = mobl.ref("reset");
              
              var nodes6212 = $("<span>");
              root8553.append(nodes6212);
              subs__.addSub((styling.button)(tmp11964, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11965, function(_, callback) {
                var root8556 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8556); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6212;
                nodes6212 = node.contents();
                oldNodes.replaceWith(nodes6212);
              }));
              
              var tmp11967 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mobileKanbanBoard.about', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp12022 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11966 = mobl.ref("about");
              
              var nodes6213 = $("<span>");
              root8553.append(nodes6213);
              subs__.addSub((styling.button)(tmp11966, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11967, function(_, callback) {
                var root8557 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8557); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6213;
                nodes6213 = node.contents();
                oldNodes.replaceWith(nodes6213);
              }));
              callback(root8553); return subs__;
              
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6209;
              nodes6209 = node.contents();
              oldNodes.replaceWith(nodes6209);
            }));
            callback(root8548); return subs__;
            
            
          });
          
        });
        
      });
      
    });
  });
  return subs__;
};

mobileKanbanBoard.appbar = function(text, st, onclick, elements, callback) {
  var root8558 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2842 = $("<div>");
  
  var ref3086 = mobl.ref(mobl.mergeStyles([st.get(), styling.headerStyle]));
  if(ref3086.get() !== null) {
    node2842.attr('class', ref3086.get());
    subs__.addSub(ref3086.addEventListener('change', function(_, ref, val) {
      node2842.attr('class', val);
    }));
    subs__.addSub(st.addEventListener('change', function() {
      node2842.attr('class', mobl.mergeStyles([st.get(), styling.headerStyle]));
    }));
    subs__.addSub(mobl.ref(styling.headerStyle).addEventListener('change', function() {
      node2842.attr('class', mobl.mergeStyles([st.get(), styling.headerStyle]));
    }));
    
  }
  subs__.addSub(ref3086.rebind());
  
  var val1679 = onclick.get();
  if(val1679 !== null) {
    subs__.addSub(mobl.domBind(node2842, 'tap', val1679));
  }
  
  
  var node2843 = $("<div>");
  
  var ref3085 = mobl.ref(styling.headerContainerStyle);
  if(ref3085.get() !== null) {
    node2843.attr('class', ref3085.get());
    subs__.addSub(ref3085.addEventListener('change', function(_, ref, val) {
      node2843.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3085.rebind());
  
  
  var node2844 = $("<div>");
  
  var ref3083 = text;
  node2844.text(""+ref3083.get());
  var ignore617 = false;
  subs__.addSub(ref3083.addEventListener('change', function(_, ref, val) {
    if(ignore617) return;
    node2844.text(""+val);
  }));
  subs__.addSub(ref3083.rebind());
  
  
  var ref3084 = mobl.ref(styling.headerTextStyle);
  if(ref3084.get() !== null) {
    node2844.attr('class', ref3084.get());
    subs__.addSub(ref3084.addEventListener('change', function(_, ref, val) {
      node2844.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3084.rebind());
  
  node2843.append(node2844);
  node2842.append(node2843);
  var nodes6214 = $("<span>");
  node2842.append(nodes6214);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1290();
  }));
  
  function renderControl1290() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8559); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6214;
      nodes6214 = node.contents();
      oldNodes.replaceWith(nodes6214);
    }));
  }
  renderControl1290();
  root8558.append(node2842);
  callback(root8558); return subs__;
  
  
  
  
  return subs__;
};

mobileKanbanBoard.column = function(s, st, elements, callback) {
  var root8560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6215 = $("<span>");
  root8560.append(nodes6215);
  subs__.addSub((mobileKanbanBoard.styledGroup)(st, function(_, callback) {
    var root8561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11970 = mobl.ref(null);
    
    var nodes6216 = $("<span>");
    root8561.append(nodes6216);
    subs__.addSub((styling.header)(mobl.ref(s, 'name'), tmp11970, function(_, callback) {
      var root8562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8562); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6216;
      nodes6216 = node.contents();
      oldNodes.replaceWith(nodes6216);
    }));
    
    var tmp11974 = mobl.ref(s.get().tasks.order("priority", false));
    subs__.addSub(mobl.ref(s.get().tasks.order("priority", false)).addEventListener('change', function() {
      tmp11974.set(s.get().tasks.order("priority", false));
    }));
    subs__.addSub(mobl.ref(s, 'tasks').addEventListener('change', function() {
      tmp11974.set(s.get().tasks.order("priority", false));
    }));
    
    
    var node2845 = mobl.loadingSpan();
    root8561.append(node2845);
    var list611;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList611 = function() {
      var subs__ = listSubs__;
      list611 = tmp11974.get();
      list611.list(function(results611) {
        node2845.empty();
        for(var i611 = 0; i611 < results611.length; i611++) {
          (function() {
            var iternode611 = $("<span>");
            node2845.append(iternode611);
            var t;
            t = mobl.ref(mobl.ref(results611), i611);
            
            var tmp11973 = mobl.ref(false);
            
            
            var tmp11972 = mobl.ref(null);
            
            
            var tmp11971 = mobl.ref(null);
            
            var nodes6217 = $("<span>");
            iternode611.append(nodes6217);
            subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11971, tmp11972, tmp11973, function(_, callback) {
              var root8563 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6218 = $("<span>");
              root8563.append(nodes6218);
              subs__.addSub((mobileKanbanBoard.task)(t, function(_, callback) {
                var root8564 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8564); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6218;
                nodes6218 = node.contents();
                oldNodes.replaceWith(nodes6218);
              }));
              callback(root8563); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6217;
              nodes6217 = node.contents();
              oldNodes.replaceWith(nodes6217);
            }));
            
            var oldNodes = iternode611;
            iternode611 = iternode611.contents();
            oldNodes.replaceWith(iternode611);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list611.addEventListener('change', function() { listSubs__.unsubscribe(); renderList611(true); }));
        subs__.addSub(tmp11974.addEventListener('change', function() { listSubs__.unsubscribe(); renderList611(true); }));
      });
    };
    renderList611();
    
    callback(root8561); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6215;
    nodes6215 = node.contents();
    oldNodes.replaceWith(nodes6215);
  }));
  callback(root8560); return subs__;
  
  return subs__;
};

mobileKanbanBoard.styledGroup = function(style, elements, callback) {
  var root8565 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2846 = $("<ul>");
  
  var ref3087 = mobl.ref(mobl.mergeStyles([style.get(), styling.groupStyle]));
  if(ref3087.get() !== null) {
    node2846.attr('class', ref3087.get());
    subs__.addSub(ref3087.addEventListener('change', function(_, ref, val) {
      node2846.attr('class', val);
    }));
    subs__.addSub(style.addEventListener('change', function() {
      node2846.attr('class', mobl.mergeStyles([style.get(), styling.groupStyle]));
    }));
    subs__.addSub(mobl.ref(styling.groupStyle).addEventListener('change', function() {
      node2846.attr('class', mobl.mergeStyles([style.get(), styling.groupStyle]));
    }));
    
  }
  subs__.addSub(ref3087.rebind());
  
  var nodes6219 = $("<span>");
  node2846.append(nodes6219);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1291();
  }));
  
  function renderControl1291() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8566); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6219;
      nodes6219 = node.contents();
      oldNodes.replaceWith(nodes6219);
    }));
  }
  renderControl1291();
  root8565.append(node2846);
  callback(root8565); return subs__;
  
  
  return subs__;
};

mobileKanbanBoard.task = function(t, elements, callback) {
  var root8567 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11976 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = t.get().status.number > 1;
                       if(result__) {
                         var result__ = t.get().status;
                         var oldstatus = result__;
                         var result__ = oldstatus.tasks.remove(t.get());
                         model.Status.getStatus(oldstatus.number - 1, function(result__) {
                           var tmp12025 = result__;
                           var result__ = tmp12025.tasks;
                           var tmp12024 = result__;
                           var result__ = tmp12024.add(t.get());
                           var tmp12023 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       } else {
                         {
                           if(callback && callback.apply) callback(); return;
                         }
                       }
                     });
  
  
  var tmp11975 = mobl.ref("<");
  
  var nodes6220 = $("<span>");
  root8567.append(nodes6220);
  subs__.addSub((styling.button)(tmp11975, mobl.ref(styling.moveTaskStyle), mobl.ref(styling.moveTaskPushedStyle), tmp11976, function(_, callback) {
    var root8568 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8568); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6220;
    nodes6220 = node.contents();
    oldNodes.replaceWith(nodes6220);
  }));
  
  var tmp11978 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = t.get().status.number < 4;
                       if(result__) {
                         var result__ = t.get().status;
                         var oldstatus = result__;
                         var result__ = oldstatus.tasks.remove(t.get());
                         model.Status.getStatus(oldstatus.number + 1, function(result__) {
                           var tmp12028 = result__;
                           var result__ = tmp12028.tasks;
                           var tmp12027 = result__;
                           var result__ = tmp12027.add(t.get());
                           var tmp12026 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       } else {
                         {
                           if(callback && callback.apply) callback(); return;
                         }
                       }
                     });
  
  
  var tmp11977 = mobl.ref(">");
  
  var nodes6221 = $("<span>");
  root8567.append(nodes6221);
  subs__.addSub((styling.button)(tmp11977, mobl.ref(styling.moveTaskStyle), mobl.ref(styling.moveTaskPushedStyle), tmp11978, function(_, callback) {
    var root8569 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8569); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6221;
    nodes6221 = node.contents();
    oldNodes.replaceWith(nodes6221);
  }));
  
  var tmp11979 = mobl.ref(null);
  
  var nodes6222 = $("<span>");
  root8567.append(nodes6222);
  subs__.addSub((mobl.label)(mobl.ref(t, 'description'), mobl.ref(styling.taskDescriptionStyle), tmp11979, function(_, callback) {
    var root8570 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8570); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6222;
    nodes6222 = node.contents();
    oldNodes.replaceWith(nodes6222);
  }));
  var nodes6223 = $("<span>");
  root8567.append(nodes6223);
  subs__.addSub((styling.contextMenu)(function(_, callback) {
    var root8571 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11981 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.remove(t.get());
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp11980 = mobl.ref("delete");
    
    var nodes6224 = $("<span>");
    root8571.append(nodes6224);
    subs__.addSub((styling.button)(tmp11980, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11981, function(_, callback) {
      var root8572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8572); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6224;
      nodes6224 = node.contents();
      oldNodes.replaceWith(nodes6224);
    }));
    
    var tmp11983 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         mobl.call('mobileKanbanBoard.editTask', [t, mobl.ref(false), mobl.ref("slide")], function(result__) {
                         var tmp12029 = result__;
                         if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp11982 = mobl.ref("edit");
    
    var nodes6225 = $("<span>");
    root8571.append(nodes6225);
    subs__.addSub((styling.button)(tmp11982, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11983, function(_, callback) {
      var root8573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8573); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6225;
      nodes6225 = node.contents();
      oldNodes.replaceWith(nodes6225);
    }));
    callback(root8571); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6223;
    nodes6223 = node.contents();
    oldNodes.replaceWith(nodes6223);
  }));
  callback(root8567); return subs__;
  
  
  
  
  return subs__;
};

mobileKanbanBoard.addTask = function(callback, screenCallback) {
  var root8574 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var newTask = mobl.ref(new model.Task({}));
  
  var tmp11988 = mobl.ref("add");
  
  
  var tmp11989 = mobl.ref(null);
  
  var nodes6226 = $("<span>");
  root8574.append(nodes6226);
  subs__.addSub((styling.header)(tmp11988, tmp11989, function(_, callback) {
    var root8575 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11984 = mobl.ref("back");
    
    
    var tmp11985 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    var nodes6227 = $("<span>");
    root8575.append(nodes6227);
    subs__.addSub((styling.backButton)(tmp11984, mobl.ref(styling.backButtonStyle), mobl.ref(styling.backButtonPushedStyle), tmp11985, function(_, callback) {
      var root8576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8576); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6227;
      nodes6227 = node.contents();
      oldNodes.replaceWith(nodes6227);
    }));
    
    var tmp11987 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.now();
                         newTask.get().created = result__;
                         var result__ = mobl.add(newTask.get());
                         model.Status.getStatus(1, function(result__) {
                           var tmp12032 = result__;
                           var result__ = tmp12032.tasks;
                           var tmp12031 = result__;
                           var result__ = tmp12031.add(newTask.get());
                           var tmp12030 = result__;
                           if(screenCallback) screenCallback();
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp11986 = mobl.ref("done");
    
    var nodes6228 = $("<span>");
    root8575.append(nodes6228);
    subs__.addSub((styling.button)(tmp11986, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp11987, function(_, callback) {
      var root8577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8577); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6228;
      nodes6228 = node.contents();
      oldNodes.replaceWith(nodes6228);
    }));
    callback(root8575); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6226;
    nodes6226 = node.contents();
    oldNodes.replaceWith(nodes6226);
  }));
  var nodes6229 = $("<span>");
  root8574.append(nodes6229);
  subs__.addSub((styling.group)(function(_, callback) {
    var root8578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11997 = mobl.ref(false);
    
    
    var tmp11996 = mobl.ref(null);
    
    
    var tmp11995 = mobl.ref(null);
    
    var nodes6230 = $("<span>");
    root8578.append(nodes6230);
    subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp11995, tmp11996, tmp11997, function(_, callback) {
      var root8579 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11990 = mobl.ref("Task description");
      
      
      var tmp11994 = mobl.ref(null);
      
      
      var tmp11993 = mobl.ref(null);
      
      
      var tmp11992 = mobl.ref(null);
      
      
      var tmp11991 = mobl.ref(null);
      
      var nodes6231 = $("<span>");
      root8579.append(nodes6231);
      subs__.addSub((styling.textField)(mobl.ref(newTask, 'description'), tmp11990, tmp11991, tmp11992, mobl.ref(styling.textFieldStyle), mobl.ref(styling.textFieldInvalidStyle), tmp11993, tmp11994, function(_, callback) {
        var root8580 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8580); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6231;
        nodes6231 = node.contents();
        oldNodes.replaceWith(nodes6231);
      }));
      callback(root8579); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6230;
      nodes6230 = node.contents();
      oldNodes.replaceWith(nodes6230);
    }));
    callback(root8578); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6229;
    nodes6229 = node.contents();
    oldNodes.replaceWith(nodes6229);
  }));
  callback(root8574); return subs__;
  
  
  return subs__;
};

mobileKanbanBoard.editTask = function(t, callback, screenCallback) {
  var root8581 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp12002 = mobl.ref("edit");
  
  
  var tmp12003 = mobl.ref(null);
  
  var nodes6232 = $("<span>");
  root8581.append(nodes6232);
  subs__.addSub((styling.header)(tmp12002, tmp12003, function(_, callback) {
    var root8582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11998 = mobl.ref("back");
    
    
    var tmp11999 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    var nodes6233 = $("<span>");
    root8582.append(nodes6233);
    subs__.addSub((styling.backButton)(tmp11998, mobl.ref(styling.backButtonStyle), mobl.ref(styling.backButtonPushedStyle), tmp11999, function(_, callback) {
      var root8583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8583); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6233;
      nodes6233 = node.contents();
      oldNodes.replaceWith(nodes6233);
    }));
    
    var tmp12001 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp12000 = mobl.ref("done");
    
    var nodes6234 = $("<span>");
    root8582.append(nodes6234);
    subs__.addSub((styling.button)(tmp12000, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp12001, function(_, callback) {
      var root8584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8584); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6234;
      nodes6234 = node.contents();
      oldNodes.replaceWith(nodes6234);
    }));
    callback(root8582); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6232;
    nodes6232 = node.contents();
    oldNodes.replaceWith(nodes6232);
  }));
  var nodes6235 = $("<span>");
  root8581.append(nodes6235);
  subs__.addSub((styling.group)(function(_, callback) {
    var root8585 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp12011 = mobl.ref(false);
    
    
    var tmp12010 = mobl.ref(null);
    
    
    var tmp12009 = mobl.ref(null);
    
    var nodes6236 = $("<span>");
    root8585.append(nodes6236);
    subs__.addSub((styling.item)(mobl.ref(styling.itemStyle), mobl.ref(styling.itemPushedStyle), tmp12009, tmp12010, tmp12011, function(_, callback) {
      var root8586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp12004 = mobl.ref("Task description");
      
      
      var tmp12008 = mobl.ref(null);
      
      
      var tmp12007 = mobl.ref(null);
      
      
      var tmp12006 = mobl.ref(null);
      
      
      var tmp12005 = mobl.ref(null);
      
      var nodes6237 = $("<span>");
      root8586.append(nodes6237);
      subs__.addSub((styling.textField)(mobl.ref(t, 'description'), tmp12004, tmp12005, tmp12006, mobl.ref(styling.textFieldStyle), mobl.ref(styling.textFieldInvalidStyle), tmp12007, tmp12008, function(_, callback) {
        var root8587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6237;
        nodes6237 = node.contents();
        oldNodes.replaceWith(nodes6237);
      }));
      callback(root8586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6236;
      nodes6236 = node.contents();
      oldNodes.replaceWith(nodes6236);
    }));
    callback(root8585); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6235;
    nodes6235 = node.contents();
    oldNodes.replaceWith(nodes6235);
  }));
  callback(root8581); return subs__;
  
  
  return subs__;
};

mobileKanbanBoard.about = function(callback, screenCallback) {
  var root8588 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp12014 = mobl.ref("about");
  
  
  var tmp12015 = mobl.ref(null);
  
  var nodes6238 = $("<span>");
  root8588.append(nodes6238);
  subs__.addSub((styling.header)(tmp12014, tmp12015, function(_, callback) {
    var root8589 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp12013 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp12012 = mobl.ref("back");
    
    var nodes6239 = $("<span>");
    root8589.append(nodes6239);
    subs__.addSub((styling.button)(tmp12012, mobl.ref(styling.buttonStyle), mobl.ref(styling.buttonPushedStyle), tmp12013, function(_, callback) {
      var root8590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8590); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6239;
      nodes6239 = node.contents();
      oldNodes.replaceWith(nodes6239);
    }));
    callback(root8589); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6238;
    nodes6238 = node.contents();
    oldNodes.replaceWith(nodes6238);
  }));
  
  var node2847 = $("<div>");
  
  var ref3088 = mobl.ref(styling.aboutStyle);
  if(ref3088.get() !== null) {
    node2847.attr('class', ref3088.get());
    subs__.addSub(ref3088.addEventListener('change', function(_, ref, val) {
      node2847.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3088.rebind());
  
  
  node2847.append("<b>kanbl - a kanban board in mobl</b><br />");
  
  node2847.append("Copyright (C) 2011 <a href=\"http://movereem.nl/\" target=\"_blank\">Michiel Overeem</a>");
  
  node2847.append("<br /><br />");
  
  node2847.append("Build in <a href=\"http://www.mobl-lang.org/\" target=\"_blank\">mobl</a>");
  
  node2847.append(", source can be found in <a href=\"https://michielovereem.kilnhg.com/Repo/Public-repos/Group/MobileKanbanBoard\" target=\"_blank\">kiln</a>.<br />");
  root8588.append(node2847);
  callback(root8588); return subs__;
  
  
  return subs__;
};
