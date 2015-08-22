;require.register("web/static/js/chatty", function(exports, require, module) {
  var formGroupBuilder = function(elements) {
    var formGroup = document.createElement("DIV");

    for (var i = 0; i < elements.length; i++) {
      formGroup.appendChild(elements[i]);
    }

    return formGroup;
  }

  var chattyMessageBuilder = function() {
    var chattyMessage = document.createElement("textarea");
    chattyMessage.id = 'chat-input';
    return chattyMessage;
  };

  var chattyButtonBuilder = function() {
    var chattyButton = document.createElement("button");

    chattyButton.id = 'chatty-btn';
    chattyButton.type = 'button';
    chattyButton.innerHTML = 'Enviar'

    return chattyButton;
  };

  var chattyMessagesBuilder = function() {
    var chattyMessages = document.createElement('UL');
    chattyMessages.id = 'chatty-messages';

    return chattyMessages;
  }

  var chattyBuilder = function(elements) {
    var chatty = document.createElement("DIV");
    chatty.className = 'chatty';

    for (var i = 0; i < elements.length; i++) {
      chatty.appendChild(elements[i]);
    }

    return chatty;
  };


  var message = chattyMessageBuilder();
  var formGroup = formGroupBuilder([message]);
  var button = chattyButtonBuilder();
  var messages = chattyMessagesBuilder();

  var chatty = chattyBuilder([formGroup, button, messages]);

  document.getElementsByTagName('body')[0].appendChild(chatty);
});
