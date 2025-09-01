export default {
  /**************
  method: proxy
  params: packet
  describe: The global proxy feature that installs with every agent
  ***************/
  async proxy(packet) {
    const proxy = await this.methods.sign('proxy', 'default', packet);
    return proxy;
  },
};
