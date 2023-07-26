import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/core/interfaces/field';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  dataProducts=[
    {
      nameProduct: "Té Verde Matcha",
      price: 30,
      description: "Té verde matcha de alta calidad, rico en antioxidantes y sin azúcar."
    },
    {
      nameProduct: "Galletas de Avena y Pasas",
      price: 25,
      description: "Deliciosas galletas de avena con pasas, horneadas sin azúcar y sin gluten."
    },
    {
      nameProduct: "Barra de Chocolate Negro 70%",
      price: 40,
      description: "Barra de chocolate negro con 70% de cacao, sin azúcar y apta para veganos."
    },
    {
      nameProduct: "Mermelada de Fresa",
      price: 18,
      description: "Mermelada casera de fresa, endulzada naturalmente y sin gluten."
    },
    {
      nameProduct: "Café Espresso",
      price: 28,
      description: "Café espresso italiano de alta calidad, con un sabor intenso y sin azúcar añadido."
    },
    {
      nameProduct: "Crema de Almendras",
      price: 35,
      description: "Crema de almendras suave y deliciosa, perfecta para untar en pan o acompañar frutas."
    },
    {
      nameProduct: "Yogur Griego Natural",
      price: 22,
      description: "Yogur griego natural, sin azúcar y con alto contenido de proteínas."
    },
    {
      nameProduct: "Harina de Almendras",
      price: 15,
      description: "Harina de almendras finamente molida, ideal para recetas sin gluten."
    },
    {
      nameProduct: "Granola Casera",
      price: 32,
      description: "Granola casera hecha con ingredientes naturales y libre de azúcar refinada."
    },
    {
      nameProduct: "Leche de Coco Orgánica",
      price: 20,
      description: "Leche de coco orgánica, sin conservantes ni azúcares añadidos."
    }
  ]
  fieldsProducts:Field[]=[
    {
      name:"nameProduct",
      label:"nombre del producto",
      type:"string"
    },
    {
      name:"price",
      label:"precio del producto",
      type:"number"
    },
    {
      name:"description",
      label:"descripcion del producto",
      type:"string"
    }
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
