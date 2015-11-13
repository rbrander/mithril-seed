// Sample Hello World application

var MyComponent = {
  controller: function(data) {},
  view: function(ctrl) {
    return m('h1', 'Hello World!');
  }
}

m.mount(document.body, MyComponent);
