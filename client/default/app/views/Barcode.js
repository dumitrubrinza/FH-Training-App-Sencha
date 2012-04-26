app.views.Barcode = Ext.extend(Ext.Panel, {

  title: 'Barcode Scanner',
  iconCls: 'home',
  scroll: 'vertical',
  height: '100%',
  layout: 'fit',
  
  dockedItems: [
    {
  		dock: 'top',
  		xtype: 'toolbar',
      title: '<img class="logo" src="app/images/indo/top_background_full.png" />',
  		items: [
  			{
  				text: 'Back',
          ui: 'back',
          hidden: app.hideBack || false,
  				handler: function() {
  					app.views.viewport.setActiveItem(app.views.home, {type: 'slide', direction: 'right'});
            app.stores.stocks.removeAll();
  				}
  			}
  		]
  	}
  ],
  
  items: [{
    xtype: 'panel',
    layout:{
      type:'vbox',
      align: 'strech'
    },
   defaults:{flex:'1'},
   items: [{
      xtype: 'form',
      items: [
        {
          xtype: 'fieldset',
          title: 'Search Stock Info',
          instructions: 'Enter company name above to perform a mash-up.',
          defaults: {
            labelAlign: 'left',
            labelWidth: '50%'
          },
          items: [
            {
              xtype: 'textfield',
              id: 'companyName',
              name: 'Company Name'
            },
          ]
        },
        {
          xtype: 'button',
          text: 'Submit',
          handler: function() {
            Ext.dispatch({
              controller: app.controllers.stocks,
              action: 'getStocks'
            });
          }
        }
      ]
    }]
});