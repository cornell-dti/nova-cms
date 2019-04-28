import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import {ProjectDB} from './db'
import {Auth} from '../middleware/auth';

export default function routes() {
    const router = express.Router();

    router.get('/project',
    (req, res) => {
        res.status(HttpStatus.BAD_REQUEST).json({ error: "Missing project ID parameter." })
    });

    router.get('/project/:id',
    (req, res) => {
        let id : string = req.params.id;

        let projectDB = new ProjectDB();

        projectDB.getOne('id', id).then(project => {
            res.status(HttpStatus.OK).json(project);
        })
        .catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({ error });
        });
    });

    router.post('/project', Auth.ensureAuthenticated,
    (req, res) => {
        let id = req.body.id;
        //TODO: fix permissions for project editing
        if (req.session && req.session.user.isLead) {
            (new ProjectDB().editOne('id', id, req.body))
                .then(project => {
                    res.status(HttpStatus.OK).json(project);
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else if (!id) {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Project ID not provided.' });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to edit projects.' });
        }
    });

    return router;
}