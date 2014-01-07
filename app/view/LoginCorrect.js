/*
 * File: app/view/LoginCorrect.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.LoginCorrect', {
    extend: 'Ext.form.Panel',
    alias: 'widget.logincorrect',

    bodyPadding: 10,
    title: 'Login Correct',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'user',
                    fieldLabel: 'User',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'pass',
                    fieldLabel: 'Pass',
                    inputType: 'password',
                    allowBlank: false
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    layout: {
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            formBind: true,
                            itemId: 'submit',
                            text: 'Submit'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});