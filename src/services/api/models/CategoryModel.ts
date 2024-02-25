export class CategoryModel {

    public id: number = 0;
    public name: string = "";
  
    constructor(obj?: Partial<CategoryModel>) {
      Object.assign(this, obj);
    }  
  }