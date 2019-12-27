class a {
  constructor () {
    this.param = '/:a/:b';
  }
  
  async get (c) {
    c.res.body = c.param.id;
  }

  async create (c) {
    c.res.body = c.body;
  }
  
  async update (c) {

  }

  async delete (c) {

  }
  

}

module.exports = a;

