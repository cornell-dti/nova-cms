import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import {Auth} from '../middleware/auth';
import {TeamMemberDB} from './db';
import { TeamMemberDocument } from '../models/team-member';

export default function routes() {
    const router = express.Router();

    router.get('/member',
    (req, res) => {
        res.status(HttpStatus.BAD_REQUEST).json({ error: "Missing NetID parameter." });
    });

    router.get('/member/:netid',
    (req, res) => {
        (new TeamMemberDB().getOne('netid', req.params.netid))
            .then(teammember => {
                res.status(HttpStatus.OK).json(teammember);
            })
            .catch(error => {
                res.status(HttpStatus.BAD_REQUEST).json({ error });
            });
    });

    router.post('/member', Auth.ensureAuthenticated,
    (req, res) => {
        let netid = req.body.netid;
        //TODO: let admins edit other users. create approval process for non-admins editing their own user profiles
        if (req.session && netid === req.session.user.netid) {
            (new TeamMemberDB().editOne('netid', netid, req.body))
                .then(teammember => {
                    res.status(HttpStatus.OK).json(teammember);
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else if (!netid) {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'NetID not provided.' });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to edit other user.' });
        }
    });

    return router;
}