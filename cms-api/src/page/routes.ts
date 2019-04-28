import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import {PageDB} from './db'
import { Auth } from '../middleware/auth';

export default function routes() {
    const router = express.Router();

    router.get('/page',
    (req, res) => {
        res.status(HttpStatus.BAD_REQUEST).json({ error: "Missing ID parameter." });
    });

    router.get('/page/:id',
    (req, res) => {
        let id : string = req.params.id;

        let pageDB = new PageDB();

        pageDB.getOne('id', id).then(page => {
            res.status(HttpStatus.OK).json(page);
        })
        .catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({ error });
        });
    });

    router.post('/page', Auth.ensureAuthenticated,
    (req, res) => {
        let id = req.body.id;
        //TODO: fix permissions for page editing
        if (req.session && req.session.user.isLead) {
            (new PageDB().editOne('id', id, req.body))
                .then(page => {
                    res.status(HttpStatus.OK).json(page);
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else if (!id) {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Page ID not provided.' });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to edit pages.' });
        }
    });

    return router;
}