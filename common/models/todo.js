'use strict';

module.exports = function(Todo) {
    Todo.beforeRemote('create', function(context, user, next) {
      context.args.data.usuarioId = context.req.accessToken.userId;
      if (context.args.data.date < Date.now()) {
       message: 'No es posible generar un evento pasado';
        err();
      }
      next();
    });

    //Todo.prototype.eventosPendientes(err, cb){
    //Todo.find(usuarioId, {where: {isComplete: false}}, function(err, accounts){
   // });
  //}
  };
