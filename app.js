Ext.application({
    name : 'Fiddle',

    launch : function() {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'component',
                    tpl: 'name: {first} {last}',
                    data: {
                        first: 'Nate',
                        last:  'Dogg'
                    },
                    padding: 20,
                    width: 200,
                    height: 200,
                    style: {
                        border: '2px solid red'
                    },
                    resizable: true,
                    listener: {
                        resize: {
                            fn: function(component, width, height) {
                                console.log("w/h: " + width + "/" + height);
                            }
                        }
                    }
                }
            ]
        });
        Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
    }
});