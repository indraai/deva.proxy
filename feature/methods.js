// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:46458400884752399767 LICENSE.md

// Proxy Deva Feature Methods

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
