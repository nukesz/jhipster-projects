import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'product',
                loadChildren: './product/product.module#StoreProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#StoreProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#StoreCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#StoreProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#StoreOrderItemModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#StoreInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#StoreShipmentModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#StoreProductModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#StoreProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#StoreOrderItemModule'
            },
            {
                path: 'notification',
                loadChildren: './notification/notification/notification.module#NotificationNotificationModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#InvoiceInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#InvoiceShipmentModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#StoreProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#StoreProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#StoreCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#StoreProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#StoreOrderItemModule'
            },
            {
                path: 'notification',
                loadChildren: './notification/notification.module#NotificationNotificationModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#ShipmentInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#StoreShipmentModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#StoreInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#InvoiceShipmentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreEntityModule {}
