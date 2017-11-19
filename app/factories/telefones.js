// Create a resource factory to access products table from database 
app.factory('Telefone', function ($resource) {
    return $resource('/api/telefones/:id', { id: '@_id' }, {
        update: { // We need to define this method manually as it is not provided with ng-resource
            method: 'PUT'
        }
    });
});