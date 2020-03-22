// Grabbing Dependencies

const inquirer = require('inquirer');
const mysql = require('mysql');
const dbConnect = require('./_db/lib/db-connect');

import { dbConnect } from "./db-connect";

// Connect to database
dbConnect();

// When program is run
// Prompt user for which action to take
// Based on user's answer, run the appropriate function,
//either viewing a table or affecting a table entry.