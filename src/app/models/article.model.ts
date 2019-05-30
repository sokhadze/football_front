export class ArticleModel {
  constructor(public id: number,
              public title: string,
              public body: string,
              public created_at: string,
              public updated_at: string) {
  }
}
