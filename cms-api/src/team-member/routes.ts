import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import {Auth} from '../middleware/auth';
import {TeamMemberDB} from './db';
import {EditRequestDB} from './db';
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

    //TODO: DON'T LET EDITS INCLUDE NON-EXISTING PROPERTIES (properties not defined in team member model)
    router.post('/member', Auth.ensureAuthenticated,
    (req, res) => {
        let netid = req.body.netid;
        if (req.session && req.session.user.isLead) {
            (new TeamMemberDB().editOne('netid', netid, req.body))
                .then(teammember => {
                    res.status(HttpStatus.OK).json(teammember);
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else if (req.session && netid === req.session.user.netid) {
            (new TeamMemberDB().getOne('netid', netid))
                .then(_ => {
                    (new EditRequestDB().addOne(req.body))
                        .then(teammember => {
                            res.status(HttpStatus.OK).json(teammember);
                        })
                        .catch(error => {
                            res.status(HttpStatus.BAD_REQUEST).json({ error });
                        });
                })
                .catch(error => {
                    res.status(HttpStatus.BAD_REQUEST).json({ error });
                });
        } else if (!netid) {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'NetID not provided.' });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to edit that user.' });
        }
    });

    router.post('/approve-edit', Auth.ensureAuthenticated,
    (req, res) => {
        //Approves edit request of netid
        let netid = req.body.netid;
        if (req.session && req.session.user.isLead) {
            //Find edit request with specified netID
            (new EditRequestDB().getOne('netid', netid))
                .then(editRequest => {
                    //Clean editRequest object of all undefined properties
                    let json = editRequest.toJSON();
                    let editRequestCleaned = Object.keys(json).reduce((acc, key) => 
                    { 
                        if (json[key] !== undefined && json[key] !== null)
                            acc[key] = json[key];
                        return acc;
                    }, {});
                    //Edit team member with specified netID and change document to editRequest
                    (new TeamMemberDB().editOne('netid', netid, editRequestCleaned))
                        .then(editRequest => {
                            (new EditRequestDB().removeOne('netid', netid))
                                .then(_ => res.status(HttpStatus.OK).json(editRequest))
                                .catch(error => { res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error }) });
                        })
                        .catch(err => {
                            console.log(err);
                            console.log(editRequest.toJSON());
                            res.status(HttpStatus.BAD_REQUEST).json({ error: "No team member with that NetID exists." });
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.status(HttpStatus.BAD_REQUEST).json({ error: "No edit request with that NetID exists." });
                });
        } else if (!netid) {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'NetID not provided.' });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Not authorized to approve edit requests.' });
        }
    });

    return router;
}