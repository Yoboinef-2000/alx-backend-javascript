// full_server/controllers/AppController.js

export default class AppController {
    /**
     * Handles the GET / request.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    static getHomepage(req, res) {
      res.status(200).send('Hello Holberton School!');
    }
  }
  