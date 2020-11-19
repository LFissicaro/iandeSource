import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  visibleSidebar1;

  items = [{
              label: 'Produtos',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Gerenciar Produtos',
                icon: '',
                routerLink: ['/dashboard/products']
              }]
            },
            {
              label: 'Compra',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Gerenciar Compras',
                icon: '',
                routerLink: ['/dashboard/purchase']
              }]
            },
            {
              label:'Vendas',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Gerenciar Vendas',
                icon: '',
                routerLink: ['/dashboard/sale']
              }]
            }]

  ngOnInit(): void {
  }

}
