export class ApiServiceProvider {
  constructor() {
    this.url = false;
  }

  $get() {
    const Provider = this;
    return new class ApiService{
      get url(){
        if(!Provider.url){
          throw new Error('You need to define the api url, use ApiServiceProvider to declare the the variable url');
        }
        return Provider.url;
      }
    };
  }
}
