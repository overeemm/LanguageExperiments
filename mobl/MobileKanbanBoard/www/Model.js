mobl.provides('model');

model.Task = persistence.define('model__Task', {
  'description': 'VARCHAR(255)',
  'created': 'DATE',
  'finished': 'DATE',
  'priority': 'INT'
});



model.Status = persistence.define('model__Status', {
  'number': 'INT',
  'name': 'VARCHAR(255)'
});

model.Status.getStatus = function(n, callback) {
                          (model.Status.all().filter("number", "=", n)).list(function(result__) {
                            var tmp465 = result__;
                            var result__ = tmp465.get(0);
                            var tmp464 = result__;
                            var result__ = tmp464;
                            if(callback && callback.apply) callback(result__);
                            return;
                            if(callback && callback.apply) callback(); return;
                          });
                        };
model.Status.initDB = function(callback) {
                          model.Status.all().count(function(result__) {
                            var tmp467 = result__;
                            var result__ = tmp467 != 4;
                            var tmp466 = result__;
                            var result__ = tmp466;
                            if(result__) {
                              {
                                var result__ = mobl.add(new model.Status({'number': 1, 'name': "someday"}));
                                var result__ = mobl.add(new model.Status({'number': 2, 'name': "todo"}));
                                var result__ = mobl.add(new model.Status({'number': 3, 'name': "progress"}));
                                var result__ = mobl.add(new model.Status({'number': 4, 'name': "done"}));
                                if(callback && callback.apply) callback(); return;
                              }
                            } else {
                              {
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          });
                        };
model.Status.hasMany('tasks', model.Task, 'status');
model.Task.textIndex('description');
