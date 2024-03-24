export class CategoryModel {

    public id: number = 0;
    public parentId: number | null = null;
    public name: string = "";
    public image: string = "";
  
    constructor(obj?: Partial<CategoryModel>) {
      Object.assign(this, obj);
    }  
  }