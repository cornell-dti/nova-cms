import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import {GlobalDB} from './db'
import { Auth } from '../middleware/auth';

export default function routes() {
    const router = express.Router();

    router.get('/global',
    (req, res) => {
        new GlobalDB().getOne('id', 'global').then(page => {
            res.status(HttpStatus.OK).json(page);
        })
        .catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({ error });
        });
    });

    router.post('/global', Auth.ensureAuthenticated,
    (req, res) => {
        if (req.session && req.session.user.isLead) {
            (new GlobalDB().editOne('id', "global", req.body))
                .then(global => {
                    res.status(HttpStatus.OK).json(global);
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to global page data.' });
        }
    });

    return router;
}