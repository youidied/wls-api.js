const fetch = require('node-fetch');


class WlsAPI {
  /**
   * Get User Data
   * @param {String} name  WLs name of the User
   */
  async RegByName(name) {
    if (name.length === 0) throw new TypeError("No Name spacified");
    if (typeof name !== 'string') throw new TypeError('User Name Should be String');
    return fetch(`https://api.wls.gg/users/name/${name}`, {
      method: 'get',
    }).then(res => res.json()).then(async json => {
      return await json;
    }).catch(async error => {
      throw new Error(error);
    });
  }

  /**
     * Get User Data
     * @param {String} id Discord id of the User
     */
  async RegByDisId(id) {

    if (id === undefined) throw new TypeError('No DiscordId spacified');
    if (typeof id !== 'string') throw new TypeError('User Discord Id Should be  String');
    return fetch(`https://api.wls.gg/users/connection/discord/${id}`, {
      method: 'get',
    }).then(res => res.json()).then(async json => {
      return await json;
    }).catch(async error => {
      throw new Error(error);
    });
  }
  /**
     * Get Room data by id
     * @param {String} id wls room id
     */
  async GetRoom(id) {

    if (id === undefined) throw new TypeError('No Room ID spacified');
    if (typeof id !== 'string') throw new TypeError('Room ID Should be String');
    return fetch(`https://api.wls.gg/events/${id}`, {
      method: 'get',
    }).then(res => res.json()).then(async json => {
      return await json;
    }).catch(async error => {
      throw new Error(error);
    });
  }


}

module.exports = WlsAPI;
