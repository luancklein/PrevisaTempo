document.addEventListener("deviceready", onDeviceReady, false);

var app = {
  fuckingDB: function () {

    this.db = new loki('todos2.db', {
      autosave: true,
      autosaveINterval: 1000,
      autoload: true
    });

    this.db.loadDatabase();

    var todos = this.db.getCollection('todos');

    if (!todos){
      todos = this.db.addCollection('todos');
    }

  },

  adicionaTodo: function() {
    var todos = this.db.getCollection('todos');
    var todo = {
      titulo: $('#titulo').val()
    }
    todos.insert(todo);
    console.log(todos.data);
  }
}


function onDeviceReady() {
  $(document).ready(function () {

    app.fuckingDB();

    $("#salvar").click(function () {
      app.adicionaTodo();
      console.log(app.db.data);
    });



  });
}
