Ext.define('MyPocket.view.Add', {
	extend: 'Ext.form.Panel',
	xtype: 'addform',
	config: {
		title: 'New record',
		iconCls: 'add',
		url: '#',
		items: [
			{
				xtype: 'fieldset',
				title: 'Add a new record',
				
				items: [
					{
						xtype: 'selectfield',
						label: 'Type',
						name: 'type',
						options: [
							{text: 'Expense', value: 'expense'},
							{text: 'Income', value: 'income'}
						]
					},
					{
						xtype: 'numberfield',
						label: 'Amount',
						name: 'amount'
					},
					{
						xtype: 'fieldset',
						title: 'Tags',
						items: [
							{
								xtype: 'checkboxfield',
								label: 'Travel',
								name: 'travelCheckbox',
								value: 'travel'
							},
							{
								xtype: 'checkboxfield',
								label: 'Food',
								name: 'foodCheckbox',
								value: 'food'
							}
						]
					}
				]
			},
			{
				xtype: 'button',
				text: 'Add',
				ui: 'confirm',
				handler: function() {
					this.up('addform').submit();
				}
			}
		]
	}
});